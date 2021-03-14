## Introduction

This project requires WebGL2. This specification was [finalized in January 2017](https://en.wikipedia.org/wiki/WebGL). It is supported by the current Chrome and Firefox browsers, but users of Safari must enable this `experimental` feature. NiiVue exploits WebGL2 features that [are not available in WebGL1](https://webgl2fundamentals.org/webgl/lessons/webgl2-whats-new.html). Specifically, the images are represented using non-Power of two 3D textures. The shaders used by WebGL2 are written using the [OpenGL ES 3.0](https://en.wikipedia.org/wiki/OpenGL_ES)version of the [OpenGL Shading Language (GLSL)](https://en.wikipedia.org/wiki/OpenGL_Shading_Language).

https://gamedev.stackexchange.com/questions/132262/how-to-use-texelfetch
but in OpenGL when specifying an integer vertex attribute you must use glVertexAttribIPointer, not glVertexAttribPointer; see
For glVertexAttribIPointer ... Values are always left as integer values
vec2 copies of the ivec2

##### Textures

The term Textures refers to bitmap images that are stored on the graphics card. The WebGL context can only have a limited number of textures active at one time (with the command `activeTexture` deterimining which textures are available). You can think of these active textures as slots that are available for the shaders to access. NiiVue consistently uses the same slots for specific textures. This means that each draw call does not need to explicitly set the active textures. Therefore, these slots should be considered reserved and not used for other functions.

 - TEXTURE0: Background volume. This 3D scalar bitmap stores the voxel intensities of the background image.
 - TEXTURE1: Active colormap. This 2D RGBA bitmap converts the scalar background voxel intensities to RGBA values (e.g. Grayscale, Viridis). Note that the background and each overlay can have a unique colormap, so the selectColormap() call should be used to select a specific map.
 - TEXTURE2: Overlay volumes. This 3D RGBA bitmap stores the blended values of all loaded overlays.
 - TEXTURE3: Font. This is a 2D bitmap that stores the [multi-channel signed distance field typeface](https://github.com/Chlumsky/msdfgen) 
 - TEXTURE6: Temporary 3D texture: this is used for compute shaders to reorient volumes (e.g. reformat an image from ASR to LIP orientation).

##### Color Schemes

The user can choose different colormaps for displaying dark to bright voxels. In addition to grayscale, one can choose from the [viridis color palettes](https://cran.r-project.org/web/packages/viridis/vignettes/intro-to-viridis.html) (Cividis, Inferno, Plasma and Viridis) which are designed to be both salient and compatible with the most common forms of colorblindness. Since WebGL2 does not support 1D textures, these are codes as 2D bitmap textures (sampler2D, with a width of 256 pixels and a height of one pixel). This explains the GLSL definition `sampler2D colormap`, with reading using `texture(colormap, vec2(f, 0.5))` (where f is a fraction from 0..1, and 0.5 indicates sampling in the vertical middle of the bitmap).

##### Overlays

Overlay images are resliced to match the resolution of the background image. Multiple overlays may be loaded, but they are all blended together to generate a single RGBA texture. This overcomes OpenGL limits on the number of active textures loaded, and improves the speed of rednering. 

JavaScript is slower than natively compiled programs for many computations,  [using WebGL can dramatically increase peformance providing near native performance](http://openglinsights.com/discovering.html#WebGLforOpenGLDevelopers). Therefore, while using the GPU instead of the CPU can accelerate performance regardless of language, the benefits are greater for JavaScript. Reslicing 3D volumes is compute intensive. , WebGL . Github commits on March 13th 2021 illustrate the difference for computing these on the CPU versus the GPU (subsequent releases removed the CPU code). Specifically, CPU-based reslicing is about an order of magnitude slower for JavaScript than the equivalent functions in the natively compiled [MRIcroGL](https://github.com/rordenlab/MRIcroGL12). Therefore, niivue uses WebGL for reslicing data. Fortunately, the GPU-based WebGL reslicing algorithm is also about an order of magnitude faster than the standard JavaScript code.

The reslicing algorithm uses the [R8UI, R16I, R16UI and R32F](https://www.khronos.org/registry/OpenGL-Refpages/es3.0/html/glTexStorage3D.xhtml) base formats for the [NIfTI](https://nifti.nimh.nih.gov/pub/dist/src/niftilib/nifti1.h) `DT_UINT8`, `DT_INT16`, `DT_UINT16`, and `DT_FLOAT32` datatypes. One limitation of WebGL is that these texture formats are not [filterable](https://webgl2fundamentals.org/webgl/lessons/webgl-data-textures.html), meaning that only [nearest](https://open.gl/textures) interpolation is available. Therefore, overlays may appear blocky if there is not a one-to-one correspondence between the background image and an overlay. On the other hand, this is often desired for thresholded statistical maps (where many voxels are artificially zeroed). Another quirk of WebGL is that three shader programs are requied to support unsigned integer, signed integer and floating point textures (using `usampler3D`, `isampler3D` and `sampler3D` respectively).

The algorithm of the reslicing shader is shown in the Figure below. Each texture is a unit normalized cube (with the voxels accessed in the range 0..1 in the X,Y,Z dimensions, regardless of the number of voxels in the column, row and slice dimension). A 4x4 matrix provides the [affine transformation](https://en.wikipedia.org/wiki/Transformation_matrix) mapping the overlay (red in figure below) to the background image (black in image below). Since WebGL works with 2D framebuffers, the shader is run for every 2D slice of the background image's 3D volume. Thefore, this compute shader requires only the standard WebGL2 functions, without requiring the nascent [compute extensions](https://www.khronos.org/registry/webgl/specs/latest/2.0-compute/).
 
![alt tag](overlay.png)

##### Links

 - [WebGL Insights](https://webglinsights.github.io/index.html) is free and a terrific resource.