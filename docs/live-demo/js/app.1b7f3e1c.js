(function(e){function t(t){for(var a,i,l=t[0],s=t[1],c=t[2],f=0,d=[];f<l.length;f++)i=l[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,l=1;l<n.length;l++){var s=n[l];0!==o[s]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},o={app:0},r=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0677":function(e,t,n){"use strict";n("fa78")},"2c88":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{app:""}},[n("h2",[e._v("Niivue")]),n("v-spacer")],1),n("v-main",[n("v-row",{staticStyle:{height:"100%"}},[n("v-col",{attrs:{sm:"12",md:"12",lg:"4"}},[n("controls",{attrs:{overlays:e.overlayList}})],1),n("v-col",{attrs:{sm:"12",md:"12",lg:"8"}},[n("v-toolbar",{staticClass:"pa-0"},[n("v-btn",{on:{click:function(t){return e.setSliceType(0)}}},[e._v("A")]),n("v-btn",{on:{click:function(t){return e.setSliceType(2)}}},[e._v("S")]),n("v-btn",{on:{click:function(t){return e.setSliceType(1)}}},[e._v("C")]),n("v-btn",{on:{click:function(t){return e.setSliceType(4)}}},[e._v("R")]),n("v-btn",{on:{click:function(t){return e.setSliceType(3)}}},[e._v("MP")]),n("v-spacer")],1),1==e.viewShown2D?n("v-toolbar",[n("v-slider",{attrs:{step:"0.01",max:"1",min:"0","thumb-label":""},on:{input:e.onSliceSlider2D},model:{value:e.sliceScrollVal,callback:function(t){e.sliceScrollVal=t},expression:"sliceScrollVal"}})],1):e._e(),n("glviewer",{attrs:{overlays:e.overlayList}})],1)],1)],1),n("v-footer",{attrs:{app:""}},[n("v-row",[n("v-col",{attrs:{align:"center",justify:"center"}},[n("span",{staticClass:"text-caption"},[e._v(e._s(e.coordinateString))])])],1)],1)],1)},r=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mt-5",attrs:{id:"controls"}},[n("v-row",{staticClass:"my-2 mx-2 align-center"},[n("h3",[e._v("Layers")]),n("v-spacer"),n("v-btn",{staticClass:"mx-2",attrs:{small:""},on:{click:e.onAddOverlay}},[e._v("Add overlay")])],1),n("v-row",{attrs:{"no-gutters":""}},[n("v-expansion-panels",[n("draggable",{staticClass:"row mx-2 my-2",attrs:{handle:".drag-handle"},model:{value:e.overlays,callback:function(t){e.overlays=t},expression:"overlays"}},e._l(e.overlays,(function(t,a){return n("v-expansion-panel",{key:a},[n("v-expansion-panel-header",[n("v-row",{staticClass:"align-center",attrs:{"no-gutters":""}},[n("v-icon",{staticClass:"mx-2 drag-handle"},[e._v(" mdi-drag-horizontal-variant ")]),n("v-icon",{staticClass:"mx-2",on:{click:function(t){return t.stopPropagation(),e.toggleEye(t)}}},[e._v(" "+e._s(e.eyeIcon)+" ")]),e._v(e._s(t.name)+" ")],1)],1),n("v-expansion-panel-content",[n("v-row",[n("v-select",{attrs:{items:e.colorMaps,label:"Color map"},on:{change:e.onColorChange},model:{value:e.selectedColorMap,callback:function(t){e.selectedColorMap=t},expression:"selectedColorMap"}})],1),n("v-row",[n("v-col",{staticClass:"px-4"},[n("p",[e._v("Intensity range")]),n("v-range-slider",{staticClass:"align-center",attrs:{max:t.intensityMax,min:t.intensityMin,"hide-details":""},scopedSlots:e._u([{key:"prepend",fn:function(){return[n("v-text-field",{staticClass:"mt-0 pt-0",staticStyle:{width:"60px"},attrs:{value:t.intensityRange[0],"hide-details":"","single-line":"",type:"number"},on:{input:function(n){return e.$set(t.intensityRange,0,n)}}})]},proxy:!0},{key:"append",fn:function(){return[n("v-text-field",{staticClass:"mt-0 pt-0",staticStyle:{width:"60px"},attrs:{value:t.intensityRange[1],"hide-details":"","single-line":"",type:"number"},on:{input:function(n){return e.$set(t.intensityRange,1,n)}}})]},proxy:!0}],null,!0),model:{value:t.intensityRange,callback:function(n){e.$set(t,"intensityRange",n)},expression:"overlay.intensityRange"}})],1)],1),n("v-row",[n("v-col",[n("p",[e._v("Opacity")]),n("v-slider",{attrs:{step:"0.01",max:"1",min:"0","thumb-label":"",ticks:""},on:{input:e.onOpacityChange},model:{value:e.opacity,callback:function(t){e.opacity=t},expression:"opacity"}})],1)],1)],1)],1)})),1)],1)],1)],1)},l=[],s=n("b76a"),c=n.n(s),u=n("f5ef"),f={props:{overlays:Array},name:"controls",components:{draggable:c.a},data:function(){return{colorSelected:"gray",colorMaps:["gray","Winter","Warm","Plasma","Viridis","Inferno"],selectedColorMap:"gray",eyeIcon:"mdi-eye",overlays_:this.overlays,draggable:!0,opacity:1}},methods:{toggleEye:function(){this.eyeIcon="mdi-eye"==this.eyeIcon?"mdi-eye-off":"mdi-eye"},onColorChange:function(){u["a"].$emit("colormap-change",this.selectedColorMap)},onOpacityChange:function(){u["a"].$emit("opacity-change",this.opacity)},onAddOverlay:function(){alert("adding overlays in this demo is not implemented yet! :)")}}},d=f,v=(n("d72e"),n("2877")),p=n("6544"),m=n.n(p),h=n("8336"),g=n("62ad"),y=n("cd55"),x=n("49e2"),T=n("c865"),E=n("0393"),_=n("132d"),b=n("5963"),P=n("0fd9"),R=n("b974"),w=n("ba0d"),C=n("2fa4"),S=n("8654"),A=Object(v["a"])(d,i,l,!1,null,"4b65bab5",null),D=A.exports;m()(A,{VBtn:h["a"],VCol:g["a"],VExpansionPanel:y["a"],VExpansionPanelContent:x["a"],VExpansionPanelHeader:T["a"],VExpansionPanels:E["a"],VIcon:_["a"],VRangeSlider:b["a"],VRow:P["a"],VSelect:R["a"],VSlider:w["a"],VSpacer:C["a"],VTextField:S["a"]});var M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"viewer",attrs:{id:"viewer"}},[n("v-dialog",{attrs:{"max-width":"400"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-color-picker",{attrs:{width:"400",mode:"rgba"},on:{input:e.onCrosshairColorChange},model:{value:e.crosshairColor,callback:function(t){e.crosshairColor=t},expression:"crosshairColor"}})],1),n("v-dialog",{attrs:{"max-width":"400"},model:{value:e.discoMode,callback:function(t){e.discoMode=t},expression:"discoMode"}},[n("v-card",{attrs:{color:"rgba(0, 0, 0, 0.4)"}},[n("v-row",{attrs:{"no-gutters":""}},[n("v-spacer"),n("h2",{staticStyle:{color:"white"}},[e._v("Disco mode")]),n("v-spacer")],1)],1)],1)],1)},W=[],L=n("8f10"),U={name:"glviewer",props:{overlays:Array,shader:String},created:function(){u["a"].$on("slice-type-change",(function(e){L["j"](e)})),u["a"].$on("set-2D-slice",(function(e){L["k"](e,!1)}))},data:function(){return{selectedOverlay:0,last2DSliceVal:.5,mouseDown:!1,touchDown:!1,zDown:!1,discoMode:!1,discoModeColorMapTimer:null,discoModeCrosshairTimer:null,scale:1,dialog:!1,crosshairColor:{r:255,g:0,b:0,a:1},colorMaps:["Winter","Warm","Plasma","Viridis","Inferno"],selectedColorMap:"Winter"}},watch:{overlays:{deep:!0,handler:function(){}}},methods:{onWindowResize:function(){var e=100,t=document.querySelector("#gl"),n=document.querySelector("#viewer");t.width=n.clientWidth,t.height=n.clientHeight,n.getBoundingClientRect().bottom>document.documentElement.clientHeight&&(n.style.height=document.documentElement.clientHeight-e,t.height=document.documentElement.clientHeight-e),L["a"](this.gl,this.overlays[this.selectedOverlay])},onCrosshairColorChange:function(){var e=[this.crosshairColor.r/255,this.crosshairColor.g/255,this.crosshairColor.b/255,this.crosshairColor.a];L["g"](e)}},mounted:function(){var e=this,t=document.createElement("canvas");t.classList.add("fillParent");var n=document.querySelector("#viewer");t.id="gl",t.width=n.clientWidth,t.height=n.clientHeight,n.appendChild(t);var a=document.querySelector("#gl"),o=a.getContext("webgl2");o.canvas.addEventListener("mousedown",(function(t){t.preventDefault(),e.dialog=!1,e.mouseDown=!0;var n=a.getBoundingClientRect();L["d"](e.gl,e.overlays[0],t.clientX-n.left,t.clientY-n.top),L["e"](t.clientX-n.left,t.clientY-n.top)})),o.canvas.addEventListener("touchstart",(function(t){t.preventDefault(),e.dialog=!1,e.touchDown=!0;var n=a.getBoundingClientRect();L["d"](e.gl,e.overlays[0],t.touches[0].clientX-n.left,t.touches[0].clientY-n.top),L["e"](t.touches[0].clientX-n.left,t.touches[0].clientY-n.top)})),o.canvas.addEventListener("mousemove",(function(t){if(e.mouseDown){var n=a.getBoundingClientRect();L["d"](e.gl,e.overlays[0],t.clientX-n.left,t.clientY-n.top),L["f"](t.clientX-n.left,t.clientY-n.top)}})),o.canvas.addEventListener("touchmove",(function(t){if(t.preventDefault(),t.stopPropagation(),e.touchDown&&t.touches.length<2){var n=a.getBoundingClientRect();L["d"](e.gl,e.overlays[0],t.touches[0].clientX-n.left,t.touches[0].clientY-n.top),L["f"](t.touches[0].clientX-n.left,t.touches[0].clientY-n.top)}})),o.canvas.addEventListener("wheel",(function(t){e.zDown?(t.preventDefault(),e.scale+=-.01*t.deltaY,L["h"](e.scale)):(t.preventDefault(),L["k"](-.01*t.deltaY))})),o.canvas.addEventListener("mouseup",(function(){e.mouseDown=!1})),o.canvas.addEventListener("touchend",(function(){e.touchDown=!1})),o.canvas.addEventListener("contextmenu",(function(t){t.preventDefault(),e.dialog=!0})),window.addEventListener("keypress",(function(t){"z"===t.key&&(e.zDown=!0),"d"===t.key&&(e.discoMode=0==e.discoMode,clearInterval(e.discoModeColorMapTimer),clearInterval(e.discoModeCrosshairTimer),e.discoMode?(e.discoModeColorMapTimer=setInterval((function(){u["a"].$emit("colormap-change",e.colorMaps[Math.floor(Math.random()*e.colorMaps.length)])}),200),e.discoModeCrosshairTimer=setInterval((function(){L["g"]([Math.random(),Math.random(),Math.random(),1])}),200)):(u["a"].$emit("colormap-change","gray"),L["g"]([1,0,0,1])))})),window.addEventListener("keyup",(function(t){"z"===t.key&&(e.zDown=!1)})),window.addEventListener("resize",this.onWindowResize),this.gl=o,this.gl.enable(this.gl.CULL_FACE),this.gl.cullFace(this.gl.FRONT),this.gl.enable(this.gl.BLEND),this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA),L["b"](this.gl),L["c"](this.overlays[this.selectedOverlay]),u["a"].$on("opacity-change",(function(e){L["i"](e)}))}},H=U,I=(n("0677"),n("b0af")),k=n("03a4"),F=n("169a"),V=Object(v["a"])(H,M,W,!1,null,"7ed2e29d",null),X=V.exports;m()(V,{VCard:I["a"],VColorPicker:k["a"],VDialog:F["a"],VRow:P["a"],VSpacer:C["a"]});var z={name:"App",components:{controls:D,glviewer:X},created:function(){var e=this;u["a"].$on("crosshair-pos-change",(function(t){e.coordinateString=t}))},data:function(){return{tab:null,viewShown2D:!1,sliceScrollVal:.5,appTabs:["Menu","Draw","Edit","Scripting"],coordinateString:"0x0x0",overlayList:[{volumeURL:"./spm152.nii.gz",volume:{hdr:null,img:null},name:"standard",intensityMin:0,intensityMax:100,intensityRange:[0,100],colorMap:"gray",opacity:100},{volumeURL:"./motor.nii.gz",volume:{hdr:null,img:null},name:"motor",intensityMin:0,intensityMax:100,intensityRange:[0,100],colorMap:"Warm",opacity:100}]}},methods:{setSliceType:function(e){this.viewShown2D=e<3,u["a"].$emit("slice-type-change",e)},onSliceSlider2D:function(){this.viewShown2D&&u["a"].$emit("set-2D-slice",this.sliceScrollVal)}}},N=z,B=n("7496"),O=n("40dc"),G=n("553a"),j=n("f6c4"),$=n("71d9"),Y=Object(v["a"])(N,o,r,!1,null,null,null),q=Y.exports;m()(Y,{VApp:B["a"],VAppBar:O["a"],VBtn:h["a"],VCol:g["a"],VFooter:G["a"],VMain:j["a"],VRow:P["a"],VSlider:w["a"],VSpacer:C["a"],VToolbar:$["a"]});var K=n("f309");n("bf40");a["a"].use(K["a"]);var J=new K["a"]({});a["a"].config.productionTip=!1,new a["a"]({vuetify:J,render:function(e){return e(q)}}).$mount("#app")},6704:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n("4160"),n("ac1f"),n("466d"),n("159b");var a=function(e,t,n){var a=this;this.program=o(e,t,n);var r=/uniform[^;]+[ ](\w+);/g,i=/uniform[^;]+[ ](\w+);/;this.uniforms={};var l=t.match(r),s=n.match(r);for(var c in l&&l.forEach((function(e){var t=e.match(i);a.uniforms[t[1]]=-1})),s&&s.forEach((function(e){var t=e.match(i);a.uniforms[t[1]]=-1})),this.uniforms)this.uniforms[c]=e.getUniformLocation(this.program,c)};a.prototype.use=function(e){e.useProgram(this.program)};var o=function(e,t,n){var a=e.createShader(e.VERTEX_SHADER);if(e.shaderSource(a,t),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS))return alert("Vertex shader failed to compile, see console for log"),console.log(e.getShaderInfoLog(a)),null;var o=e.createShader(e.FRAGMENT_SHADER);if(e.shaderSource(o,n),e.compileShader(o),!e.getShaderParameter(o,e.COMPILE_STATUS))return alert("Fragment shader failed to compile, see console for log"),console.log(e.getShaderInfoLog(o)),null;var r=e.createProgram();return e.attachShader(r,a),e.attachShader(r,o),e.linkProgram(r),e.getProgramParameter(r,e.LINK_STATUS)?r:(alert("Shader failed to link, see console for log"),console.log(e.getProgramInfoLog(r)),null)}},"8bb8":function(e,t,n){"use strict";n.d(t,"i",(function(){return a})),n.d(t,"d",(function(){return o})),n.d(t,"j",(function(){return r})),n.d(t,"e",(function(){return i})),n.d(t,"c",(function(){return l})),n.d(t,"f",(function(){return s})),n.d(t,"a",(function(){return c})),n.d(t,"h",(function(){return u})),n.d(t,"g",(function(){return f})),n.d(t,"b",(function(){return d}));var a="#version 300 es\n#line 4\nlayout(location=0) in vec3 pos;\nuniform mat4 mvpMtx;\nout vec3 vColor;\nvoid main(void) {\n\tgl_Position = mvpMtx * vec4(2.0 * (pos.xyz - 0.5), 1.0);\n\tvColor = pos;\n}",o="#version 300 es\n#line 15\nprecision highp int;\nprecision highp float;\nuniform vec3 rayDir;\nuniform vec3 texVox;\nuniform vec4 clipPlane;\nuniform highp sampler3D volume, overlay;\nuniform highp sampler2D colormap;\nuniform float overlays;\nin vec3 vColor;\nout vec4 fColor;\nvec3 GetBackPosition (vec3 startPosition) {\n vec3 invR = 1.0 / rayDir;\n vec3 tbot = invR * (vec3(0.0)-startPosition);\n vec3 ttop = invR * (vec3(1.0)-startPosition);\n vec3 tmax = max(ttop, tbot);\n vec2 t = min(tmax.xx, tmax.yz);\n return startPosition + (rayDir * min(t.x, t.y));\n}\nvec4 applyClip (vec3 dir, inout vec4 samplePos, inout float len) {\n\tfloat cdot = dot(dir,clipPlane.xyz);\n\tif  ((clipPlane.a > 1.0) || (cdot == 0.0)) return samplePos;\n    bool frontface = (cdot > 0.0);\n\tfloat clipThick = 2.0;\n    float dis = (-clipPlane.a - dot(clipPlane.xyz, samplePos.xyz-0.5)) / cdot;\n    float  disBackFace = (-(clipPlane.a-clipThick) - dot(clipPlane.xyz, samplePos.xyz-0.5)) / cdot;\n    if (((frontface) && (dis >= len)) || ((!frontface) && (dis <= 0.0))) {\n        samplePos.a = len + 1.0;\n        return samplePos;\n    }\n    if (frontface) {\n        dis = max(0.0, dis);\n        samplePos = vec4(samplePos.xyz+dir * dis, dis);\n        len = min(disBackFace, len);\n    }\n    if (!frontface) {\n        len = min(dis, len);\n        disBackFace = max(0.0, disBackFace);\n        samplePos = vec4(samplePos.xyz+dir * disBackFace, disBackFace);\n    }\n    return samplePos;\n}\nvoid main() {\n    fColor = vec4(0.0,0.0,0.0,0.0);\n\tvec3 start = vColor;\n\t//fColor = vec4(start, 1.0); return;\n\tvec3 backPosition = GetBackPosition(start);\n\t//fColor = vec4(backPosition, 1.0); return;\n    vec3 dir = backPosition - start;\n    float len = length(dir);\n\tfloat lenVox = length((texVox * start) - (texVox * backPosition));\n\tfloat sliceSize = len / lenVox; //e.g. if ray length is 1.0 and traverses 50 voxels, each voxel is 0.02 in unit cube\n\tfloat stepSize = sliceSize; //quality: larger step is faster traversal, but fewer samples\n\tfloat opacityCorrection = stepSize/sliceSize;\n    dir = normalize(dir);\n\tvec4 deltaDir = vec4(dir.xyz * stepSize, stepSize);\n\tvec4 samplePos = vec4(start.xyz, 0.0); //ray position\n\tfloat lenNoClip = len;\n\tvec4 clipPos = applyClip(dir, samplePos, len);\n\t//start: OPTIONAL fast pass: rapid traversal until first hit\n\tfloat stepSizeFast = sliceSize * 1.9;\n\tvec4 deltaDirFast = vec4(dir.xyz * stepSizeFast, stepSizeFast);\n\twhile (samplePos.a <= len) {\n\t\tfloat val = texture(volume, samplePos.xyz).r;\n\t\tif (val > 0.01) break;\n\t\tsamplePos += deltaDirFast; //advance ray position\n\t}\n\tif ((samplePos.a > len) && (overlays < 1.0)) return;\n\tsamplePos -= deltaDirFast;\n\tif (samplePos.a < 0.0)\n\t\tvec4 samplePos = vec4(start.xyz, 0.0); //ray position\n\t//end: fast pass\n\tvec4 colAcc = vec4(0.0,0.0,0.0,0.0);\n\tconst float earlyTermination = 0.95;\n\tfloat backNearest = len; //assume no hit\n    float ran = fract(sin(gl_FragCoord.x * 12.9898 + gl_FragCoord.y * 78.233) * 43758.5453);\n    samplePos += deltaDir * ran; //jitter ray\n\twhile (samplePos.a <= len) {\n\t\tfloat val = texture(volume, samplePos.xyz).r;\n\t\tsamplePos += deltaDir; //advance ray position\n\t\tif (val < 0.01) continue;\n\t\tbackNearest = min(backNearest, samplePos.a); \n\t\tvec4 colorSample = texture(colormap, vec2(val, 0.5)).rgba;\n\t\tcolorSample.a = 1.0-pow((1.0 - colorSample.a), opacityCorrection);\n\t\tcolorSample.rgb *= colorSample.a;\n\t\tcolAcc= (1.0 - colAcc.a) * colorSample + colAcc;\n\t\tif ( colAcc.a > earlyTermination )\n\t\t\tbreak;\n\t}\n\tcolAcc.a = colAcc.a / earlyTermination;\n\tfColor = colAcc;\n\tif (overlays < 1.0) return;\n\t//overlay pass\n\tlen = lenNoClip;\n\tsamplePos = vec4(start.xyz, 0.0); //ray position\n    //start: OPTIONAL fast pass: rapid traversal until first hit\n\tstepSizeFast = sliceSize * 1.9;\n\tdeltaDirFast = vec4(dir.xyz * stepSizeFast, stepSizeFast);\n\twhile (samplePos.a <= len) {\n\t\tfloat val = texture(overlay, samplePos.xyz).a;\n\t\tif (val > 0.01) break;\n\t\tsamplePos += deltaDirFast; //advance ray position\n\t}\n\tif (samplePos.a > len) return;\n\tsamplePos -= deltaDirFast;\n\tif (samplePos.a < 0.0)\n\t\tvec4 samplePos = vec4(start.xyz, 0.0); //ray position\n\t//end: fast pass\n\t\t\n\tfloat overFarthest = len;\n\tcolAcc = vec4(0.0, 0.0, 0.0, 0.0);\n\tsamplePos += deltaDir * ran; //jitter ray\n\twhile (samplePos.a <= len) {\n\t\tvec4 colorSample = texture(overlay, samplePos.xyz);\n\t\tsamplePos += deltaDir; //advance ray position\n\t\tif (colorSample.a < 0.01) continue;\n\t\tcolorSample.a = 1.0-pow((1.0 - colorSample.a), opacityCorrection);\n\t\tcolorSample.rgb *= colorSample.a;\n\t\tcolAcc= (1.0 - colAcc.a) * colorSample + colAcc;\n\t\toverFarthest = samplePos.a;\n\t\tif ( colAcc.a > earlyTermination )\n\t\t\tbreak;\n\t}\n\tfloat overMix = colAcc.a;\n\tfloat overlayDepth = 0.3;\n\tif (fColor.a <= 0.0) \n\t\t\toverMix = 1.0;\n\telse if (((overFarthest) > backNearest)) {\n\t\tfloat dx = (overFarthest - backNearest)/1.73;\n\t\tdx = fColor.a * pow(dx, overlayDepth);\n\t\toverMix *= 1.0 - dx;\n\t}\n\tfColor.rgb = mix(fColor.rgb, colAcc.rgb, overMix);\n\tfColor.a = max(fColor.a, colAcc.a);\n}",r="#version 300 es\n#line 81\nlayout(location=0) in vec3 pos;\nuniform int axCorSag;\nuniform float slice;\nuniform vec2 canvasWidthHeight;\nuniform vec4 leftTopWidthHeight;\nout vec3 texPos;\nvoid main(void) {\n\t//convert pixel x,y space 1..canvasWidth,1..canvasHeight to WebGL 1..-1,-1..1\n\tvec2 frac;\n\tfrac.x = (leftTopWidthHeight.x + (pos.x * leftTopWidthHeight.z)) / canvasWidthHeight.x; //0..1\n\tfrac.y = 1.0 - ((leftTopWidthHeight.y + ((1.0 - pos.y) * leftTopWidthHeight.w)) / canvasWidthHeight.y); //1..0\n\tfrac = (frac * 2.0) - 1.0;\n\tgl_Position = vec4(frac, 0.0, 1.0);\n\tif (axCorSag == 1)\n\t\ttexPos = vec3(pos.x, slice, pos.y);\n\telse if (axCorSag == 2)\n\t\ttexPos = vec3(slice, pos.x, pos.y);\n\telse\n\t\ttexPos = vec3(pos.xy, slice);\n}",i="#version 300 es\n#line 105\nprecision highp int;\nprecision highp float;\nuniform highp sampler3D volume, overlay;\nuniform highp sampler2D colormap;\nuniform float opacity;\nin vec3 texPos;\nout vec4 color;\nvoid main() {\n\tcolor = vec4(texture(colormap, vec2(texture(volume, texPos).r, 0.5)).rgb, opacity);\n\tvec4 ocolor = texture(overlay, texPos);\n\tcolor.rgb = mix(color.rgb, ocolor.rgb, ocolor.a);\n}",l="#version 300 es\n#line 119\nprecision highp int;\nprecision highp float;\nuniform vec4 lineColor;\nout vec4 color;\nvoid main() {\n\tcolor = lineColor;\n}",s="#version 300 es\n#line 130\nlayout(location=0) in vec3 pos;\nuniform vec2 canvasWidthHeight;\nuniform vec4 leftTopWidthHeight;\nout float vColor;\nvoid main(void) {\n\t//convert pixel x,y space 1..canvasWidth,1..canvasHeight to WebGL 1..-1,-1..1\n\tvec2 frac;\n\tfrac.x = (leftTopWidthHeight.x + (pos.x * leftTopWidthHeight.z)) / canvasWidthHeight.x; //0..1\n\tfrac.y = 1.0 - ((leftTopWidthHeight.y + ((1.0 - pos.y) * leftTopWidthHeight.w)) / canvasWidthHeight.y); //1..0\n\tfrac = (frac * 2.0) - 1.0;\n\tgl_Position = vec4(frac, 0.0, 1.0);\n\tvColor = pos.x;\n}",c="#version 300 es\n#line 147\nprecision highp int;\nprecision highp float;\nuniform highp sampler2D colormap;\nin float vColor;\nout vec4 color;\nvoid main() {\n\tcolor = vec4(texture(colormap, vec2(vColor, 0.5)).rgb, 1.0);\n}",u="#version 300 es\n#line 159\nlayout(location=0) in vec3 pos;\nuniform vec2 canvasWidthHeight;\nuniform vec4 leftTopWidthHeight;\nvoid main(void) {\n\t//convert pixel x,y space 1..canvasWidth,1..canvasHeight to WebGL 1..-1,-1..1\n\tvec2 frac;\n\tfrac.x = (leftTopWidthHeight.x + (pos.x * leftTopWidthHeight.z)) / canvasWidthHeight.x; //0..1\n\tfrac.y = 1.0 - ((leftTopWidthHeight.y + ((1.0 - pos.y) * leftTopWidthHeight.w)) / canvasWidthHeight.y); //1..0\n\tfrac = (frac * 2.0) - 1.0;\n\tgl_Position = vec4(frac, 0.0, 1.0);\n}",f="#version 300 es\n#line 174\nlayout(location=0) in vec3 pos;\nuniform vec2 canvasWidthHeight;\nuniform vec4 leftTopWidthHeight;\nuniform vec4 uvLeftTopWidthHeight;\nout vec2 vUV;\nvoid main(void) {\n\t//convert pixel x,y space 1..canvasWidth,1..canvasHeight to WebGL 1..-1,-1..1\n\tvec2 frac;\n\tfrac.x = (leftTopWidthHeight.x + (pos.x * leftTopWidthHeight.z)) / canvasWidthHeight.x; //0..1\n\tfrac.y = 1.0 - ((leftTopWidthHeight.y + ((1.0 - pos.y) * leftTopWidthHeight.w)) / canvasWidthHeight.y); //1..0\n\tfrac = (frac * 2.0) - 1.0;\n\tgl_Position = vec4(frac, 0.0, 1.0);\n\tvUV = vec2(uvLeftTopWidthHeight.x + (pos.x * uvLeftTopWidthHeight.z), uvLeftTopWidthHeight.y  + ((1.0 - pos.y) * uvLeftTopWidthHeight.w) );\n}",d="#version 300 es\n#line 192\nprecision highp int;\nprecision highp float;\nuniform highp sampler2D fontTexture;\nuniform vec4 fontColor;\nuniform float screenPxRange;\nin vec2 vUV;\nout vec4 color;\nfloat median(float r, float g, float b) {\n    return max(min(r, g), min(max(r, g), b));\n}\nvoid main() {\n\tvec3 msd = texture(fontTexture, vUV).rgb;\n\t//color = vec4(msd, 1.0); return;\n    float sd = median(msd.r, msd.g, msd.b);\n    float screenPxDistance = screenPxRange*(sd - 0.5);\n    float opacity = clamp(screenPxDistance + 0.5, 0.0, 1.0);\n\tcolor = vec4(fontColor.rgb , fontColor.a * opacity);\n}"},"8f10":function(e,t,n){"use strict";(function(e){n.d(t,"e",(function(){return N})),n.d(t,"f",(function(){return B})),n.d(t,"g",(function(){return O})),n.d(t,"k",(function(){return G})),n.d(t,"j",(function(){return j})),n.d(t,"i",(function(){return $})),n.d(t,"h",(function(){return Y})),n.d(t,"c",(function(){return Z})),n.d(t,"b",(function(){return ae})),n.d(t,"d",(function(){return ce})),n.d(t,"a",(function(){return Te}));n("d81d"),n("fb6a"),n("b680"),n("d3b7"),n("cfc3"),n("8b09"),n("5cc6"),n("8a59"),n("84c3"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),n("96cf");var a=n("1da1"),o=n("0037"),r=n("6704"),i=n("20e7"),l=n("8bb8"),s=n("f5ef"),c=.03,u=.05,f=1,d=[0,0,0,1],v=0,p=1,m=2,h=3,g=4,y=h,x=120,T=15,E=[.5,.5,.5],_=1,b=[.5,.5,0,.1],P=!1,R=[1,0,0,1],w=1,C=null,S=.05,A=null,D=null,M=null,W=null,L=null,U=null,H=null,I=null,k=null,F=[0,0],V=0,X=[{leftTopWidthHeight:[1,0,0,1],axCorSag:v},{leftTopWidthHeight:[1,0,0,1],axCorSag:v},{leftTopWidthHeight:[1,0,0,1],axCorSag:v},{leftTopWidthHeight:[1,0,0,1],axCorSag:v}],z=1;function N(e,t){y==g&&(F=[e,t])}function B(e,t){y==g&&(x+=e-F[0],T+=t-F[1],F=[e,t],Te(q(),C))}function O(e){R=e,Te(q(),C)}function G(e){var t,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(y==v&&(t=2),y==m&&(t=0),y==p&&(t=1),n){var a=E[t],o=a+e;o>1&&(o=1),o<0&&(o=0),E[t]=o}else E[t]=e;Te(q(),C)}function j(e){y=e,Te(q(),C)}function $(e){z=e,Te(q(),C)}function Y(e){w=e,Te(q(),C)}function q(){var e=document.querySelector("#gl").getContext("webgl2");return e||null}function K(e,t){var n,a=t.volume,o=a.hdr.cal_min,r=a.hdr.cal_max,i=e.length,l=new Uint8ClampedArray(i),s=1;for(r>o&&(s=255/(r-o)),n=0;n<i-1;n++){var c=e[n];c=c*a.hdr.scl_slope+a.hdr.scl_inter,l[n]=(c-o)*s}return l}function J(e){for(var t=e.volume.hdr,n=t.dims[1]*t.dims[2]*t.dims[3],a=new Uint8ClampedArray(4*n),o=.2*Math.min(Math.min(t.dims[1],t.dims[2]),t.dims[3]),r=.5*t.dims[1],i=.5*t.dims[2],l=.5*t.dims[3],s=0,c=0;c<t.dims[3];c++)for(var u=0;u<t.dims[2];u++)for(var f=0;f<t.dims[1];f++){var d=Math.abs(f-r),v=Math.abs(u-i),p=Math.abs(c-l),m=Math.sqrt(d*d+v*v+p*p),h=0;m<o&&(h=255),a[s]=0,s++,a[s]=h,s++,a[s]=0,s++,a[s]=.5*h,s++}return a}function Q(e,t){var n,a=t.volume,o=e.length,r=1/0,i=-1/0;for(n=0;n<o-1;n++)isFinite(e[n])&&(e[n]<r&&(r=e[n]),e[n]>i&&(i=e[n]));isFinite(a.hdr.scl_slope)&&isFinite(a.hdr.scl_inter)&&0!==a.hdr.scl_slope?(r=r*a.hdr.scl_slope+a.hdr.scl_inter,i=i*a.hdr.scl_slope+a.hdr.scl_inter):(a.hdr.scl_slope=1,a.hdr.scl_inter=0),a.hdr.global_min=r,a.hdr.global_max=i,(!isFinite(a.hdr.cal_min)||!isFinite(a.hdr.cal_max)||a.hdr.cal_min>=a.hdr.cal_max)&&(a.hdr.cal_min=r,a.hdr.cal_max=i)}function Z(e){var t=null,n=null,a=e.volumeURL,r=new XMLHttpRequest;r.open("GET",a,!0),r.responseType="arraybuffer",r.onerror=function(){console.log="Error Loading Volume"},r.onload=function(){var a=r.response;a?(t=o["readHeader"](a),n=o["isCompressed"](a)?o["readImage"](t,o["decompress"](a)):o["readImage"](t,a)):(alert("Unable to load buffer properly from volume?"),console.log("no buffer?")),e.volume.hdr=t,e.volume.img=n,C=e,ie(q(),e.colorMap),re(q(),e)},r.send()}s["a"].$on("colormap-change",(function(e){ie(q(),e),Te(q(),C)}));var ee=function(e,t){var n=null;n=new Image,n.onload=function(){var t=e.createTexture();e.activeTexture(e.TEXTURE3),e.bindTexture(e.TEXTURE_2D,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,n)},n.src=t};function te(e){return ne.apply(this,arguments)}function ne(){return ne=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n,o,r,i,l,s,c,u,f,d,v,p,m;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=function(){return i=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("./fnt.json");case 2:return t=e.sent,e.next=5,t.json();case 5:o=e.sent;case 6:case"end":return e.stop()}}),e)}))),i.apply(this,arguments)},r=function(){return i.apply(this,arguments)},e.next=4,ee(t,"fnt.png");case 4:for(k=[],n=0;n<256;n++)k[n]={},k[n].xadv=0,k[n].uv_lbwh=[0,0,0,0],k[n].lbwh=[0,0,0,0];return o=[],e.next=9,r();case 9:k.distanceRange=o.atlas.distanceRange,k.size=o.atlas.size,l=o.atlas.width,s=o.atlas.height,c=0;case 14:if(!(c<o.glyphs.length)){e.next=33;break}if(u=o.glyphs[c],f=u.unicode,k[f].xadv=u.advance,void 0!==u.planeBounds){e.next=20;break}return e.abrupt("continue",30);case 20:d=u.atlasBounds.left/l,v=(s-u.atlasBounds.top)/s,p=(u.atlasBounds.right-u.atlasBounds.left)/l,m=(u.atlasBounds.top-u.atlasBounds.bottom)/s,k[f].uv_lbwh=[d,v,p,m],d=u.planeBounds.left,v=u.planeBounds.bottom,p=u.planeBounds.right-u.planeBounds.left,m=u.planeBounds.top-u.planeBounds.bottom,k[f].lbwh=[d,v,p,m];case 30:c++,e.next=14;break;case 33:case"end":return e.stop()}}),e)}))),ne.apply(this,arguments)}function ae(e){return oe.apply(this,arguments)}function oe(){return oe=Object(a["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return W=new r["a"](t,l["j"],l["e"]),W.use(t),t.uniform1i(W.uniforms["volume"],0),t.uniform1i(W.uniforms["colormap"],1),t.uniform1i(W.uniforms["overlay"],2),L=new r["a"](t,l["h"],l["c"]),U=new r["a"](t,l["i"],l["d"]),U.use(t),t.uniform1i(U.uniforms["volume"],0),t.uniform1i(U.uniforms["colormap"],1),t.uniform1i(U.uniforms["overlay"],2),H=new r["a"](t,l["f"],l["a"]),H.use(t),t.uniform1i(H.uniforms["colormap"],1),I=new r["a"](t,l["g"],l["b"]),I.use(t),t.uniform1i(I.uniforms["fontTexture"],3),e.next=19,te(t);case 19:case"end":return e.stop()}}),e)}))),oe.apply(this,arguments)}function re(e,t){var n=[0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0],a=e.createVertexArray();e.bindVertexArray(a);var o=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,o),e.bufferData(e.ARRAY_BUFFER,new Float32Array(n),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,3,e.FLOAT,!1,0,0);var r=t.volume.hdr,i=t.volume.img,l=null;2===r.datatypeCode?l=new Uint8Array(i):4===r.datatypeCode?l=new Int16Array(i):16===r.datatypeCode?l=new Float32Array(i):512===r.datatypeCode&&(l=new Uint16Array(i)),Q(l,t);var s=K(l,t);D&&e.deleteTexture(D),D=e.createTexture(),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_3D,D),e.texParameteri(e.TEXTURE_3D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_3D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_3D,e.TEXTURE_WRAP_R,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_3D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_3D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.pixelStorei(e.UNPACK_ALIGNMENT,1),e.texStorage3D(e.TEXTURE_3D,1,e.R8,r.dims[1],r.dims[2],r.dims[3]),e.texSubImage3D(e.TEXTURE_3D,0,0,0,0,r.dims[1],r.dims[2],r.dims[3],e.RED,e.UNSIGNED_BYTE,s);var c=J(t);M&&e.deleteTexture(M),M=e.createTexture(),e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_3D,M),e.texParameteri(e.TEXTURE_3D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_3D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_3D,e.TEXTURE_WRAP_R,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_3D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_3D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.pixelStorei(e.UNPACK_ALIGNMENT,1),e.texStorage3D(e.TEXTURE_3D,4,e.RGBA8,r.dims[1],r.dims[2],r.dims[3]),e.texSubImage3D(e.TEXTURE_3D,0,0,0,0,r.dims[1],r.dims[2],r.dims[3],e.RGBA,e.UNSIGNED_BYTE,c),Te(e,t)}function ie(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=le([0,255],[0,255],[0,255],[0,128],[0,255]);"Winter"===t&&(n=le([0,0,0],[0,128,255],[255,196,128],[0,64,128],[0,128,255])),"Warm"===t&&(n=le([255,255,255],[127,196,254],[0,0,0],[0,64,128],[0,128,255])),"Plasma"===t&&(n=le([13,156,237,240],[8,23,121,249],[135,158,83,33],[0,56,80,88],[0,64,192,255])),"Viridis"===t&&(n=le([68,49,53,253],[1,104,183,231],[84,142,121,37],[0,56,80,88],[0,65,192,255])),"Inferno"===t&&(n=le([0,120,237,240],[0,28,105,249],[4,109,37,33],[0,56,80,88],[0,64,192,255])),null!==A&&e.deleteTexture(A),A=e.createTexture(),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,A),e.texStorage2D(e.TEXTURE_2D,1,e.RGBA8,256,1),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_R,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texSubImage2D(e.TEXTURE_2D,0,0,0,256,1,e.RGBA,e.UNSIGNED_BYTE,n),console.log("set colormap",t)}function le(e,t,n,a,o){for(var r=new Uint8ClampedArray(1024),i=0;i<o.length-1;i++)for(var l=o[i],s=o[i+1],c=s-l,u=4*l,f=l;f<=s;f++){var d=(f-l)/c;r[u]=e[i]+d*(e[i+1]-e[i]),u++,r[u]=t[i]+d*(t[i+1]-t[i]),u++,r[u]=n[i]+d*(n[i+1]-n[i]),u++,r[u]=a[i]+d*(a[i+1]-a[i]),u++}return r}function se(e,t){var n=t.volume.hdr,a=[1,n.dims[1]*n.pixDims[1],n.dims[2]*n.pixDims[2],n.dims[3]*n.pixDims[3]],o=Math.max(a[1],Math.max(a[2],a[3])),r=[a[1]/o,a[2]/o,a[3]/o];r=r.map((function(e){return e*w}));var i=[n.dims[1],n.dims[2],n.dims[3]];return{volScale:r,vox:i}}function ce(e,t,n,a){if(y!==g&&!(V<1||e.canvas.height<1||e.canvas.width<1))for(var o=0;o<V;o++){var r=X[o].axCorSag;if(!(r>m)){var i=X[o].leftTopWidthHeight,l=!1;i[2]<0&&(l=!0,i[0]+=i[2],i[2]=-i[2]);var s=(n-i[0])/i[2];l&&(s=1-s);var c=1-(a-i[1])/i[3];if(s>=0&&s<1&&c>=0&&c<1)return r===v&&(E[0]=s,E[1]=c),r===p&&(E[0]=s,E[2]=c),r===m&&(E[1]=s,E[2]=c),void Te(e,t)}}}function ue(e,t){if(!(t[2]<=0||t[3]<=0)){if(f>0){L.use(e),e.uniform4fv(L.uniforms["lineColor"],R),e.uniform2fv(L.uniforms["canvasWidthHeight"],[e.canvas.width,e.canvas.height]);var n=[t[0]-1,t[1]-1,t[2]+2,t[3]+2];e.uniform4f(L.uniforms["leftTopWidthHeight"],n[0],n[1],n[2],n[3]),e.drawArrays(e.TRIANGLE_STRIP,5,4)}H.use(e),e.uniform2fv(H.uniforms["canvasWidthHeight"],[e.canvas.width,e.canvas.height]),e.uniform4f(H.uniforms["leftTopWidthHeight"],t[0],t[1],t[2],t[3]),e.drawArrays(e.TRIANGLE_STRIP,5,4)}}function fe(t,n){for(var a=0,o=new e(n),r=0;r<n.length;r++)a+=t*k[o[r]].xadv;return a}function de(e,t,n,a){var o=k[a],r=t[0]+n*o.lbwh[0],i=-n*o.lbwh[1],l=n*o.lbwh[2],s=n*o.lbwh[3],c=t[1]+(i-s)+n;return e.uniform4f(I.uniforms["leftTopWidthHeight"],r,c,l,s),e.uniform4fv(I.uniforms["uvLeftTopWidthHeight"],o.uv_lbwh),e.drawArrays(e.TRIANGLE_STRIP,5,4),n*o.xadv}function ve(t,n,a){if(!(c<=0)){I.use(t);var o=c*t.canvas.height;t.uniform2f(I.uniforms["canvasWidthHeight"],t.canvas.width,t.canvas.height),t.uniform4fv(I.uniforms["fontColor"],R);var r=o/k.size*k.distanceRange;r=Math.max(r,1),t.uniform1f(I.uniforms["screenPxRange"],r);for(var i=new e(a),l=0;l<a.length;l++)n[0]+=de(t,n,o,i[l])}}function pe(e,t,n){c<=0||(I.use(e),t[1]-=.5*c*e.canvas.height,ve(e,t,n))}function me(e,t,n){if(!(c<=0)){I.use(e);var a=c*e.canvas.height;t[0]-=.5*fe(a,n),ve(e,t,n)}}function he(e,t,n){var a=[E[0],E[1],E[2]];n===p&&(a=[E[0],E[2],E[1]]),n===m&&(a=[E[1],E[2],E[0]]);var o=P&&n<m;if(W.use(e),e.uniform1f(W.uniforms["opacity"],z),e.uniform1i(W.uniforms["axCorSag"],n),e.uniform1f(W.uniforms["slice"],a[2]),e.uniform2fv(W.uniforms["canvasWidthHeight"],[e.canvas.width,e.canvas.height]),o&&(e.disable(e.CULL_FACE),t[2]=-t[2],t[0]=t[0]-t[2]),e.uniform4f(W.uniforms["leftTopWidthHeight"],t[0],t[1],t[2],t[3]),e.drawArrays(e.TRIANGLE_STRIP,5,4),X[V].leftTopWidthHeight=t,X[V].axCorSag=n,V+=1,!(f<=0)){L.use(e),e.uniform4fv(L.uniforms["lineColor"],R),e.uniform2fv(L.uniforms["canvasWidthHeight"],[e.canvas.width,e.canvas.height]);var r=t[0]+t[2]*a[0];e.uniform4f(L.uniforms["leftTopWidthHeight"],r-.5*f,t[1],f,t[3]),e.drawArrays(e.TRIANGLE_STRIP,5,4);var i=t[1]+t[3]*(1-a[1]);e.uniform4f(L.uniforms["leftTopWidthHeight"],t[0],i-.5*f,t[2],f),e.drawArrays(e.TRIANGLE_STRIP,5,4),e.enable(e.CULL_FACE),o?pe(e,[t[0]+t[2]+1,t[1]+.5*t[3]],"R"):n<m&&pe(e,[t[0]+1,t[1]+.5*t[3]],"L"),n===v&&me(e,[t[0]+.5*t[2],t[1]+1],"A"),n>v&&me(e,[t[0]+.5*t[2],t[1]+1],"S")}}function ge(e,t){var n=se(e,t),a=n.volScale,o=n.vox;U.use(e),e.canvas.width<e.canvas.height?e.viewport(0,.5*(e.canvas.height-e.canvas.width),e.canvas.width,e.canvas.width):e.viewport(.5*(e.canvas.width-e.canvas.height),0,e.canvas.height,e.canvas.height),e.clearColor(.2,0,0,1);var r=i["a"].create(),l=-.54;i["a"].translate(r,r,[0,0,l]);var c=(90-T-a[0])*Math.PI/180;i["a"].rotate(r,r,c,[-1,0,0]),c=x*Math.PI/180,i["a"].rotate(r,r,c,[0,0,1]),i["a"].scale(r,r,a);var u=i["a"].create();i["a"].invert(u,r);var f=i["c"].fromValues(0,0,-1,1);i["c"].transformMat4(f,f,u);var d=i["b"].fromValues(f[0],f[1],f[2]);i["b"].normalize(d,d);var v=1e-5;Math.abs(d[0])<v&&(d[0]=v),Math.abs(d[1])<v&&(d[1]=v),Math.abs(d[2])<v&&(d[2]=v),e.uniformMatrix4fv(U.uniforms["mvpMtx"],!1,r),e.uniform1f(U.uniforms["overlays"],_),e.uniform4fv(U.uniforms["clipPlane"],b),e.uniform3fv(U.uniforms["rayDir"],d),e.uniform3fv(U.uniforms["texVox"],o),e.drawArrays(e.TRIANGLE_STRIP,0,14);var p="azimuth: "+x.toFixed(0)+" elevation: "+T.toFixed(0);return s["a"].$emit("crosshair-pos-change",p),p}function ye(e){var t=i["c"].fromValues(E[0],E[1],E[2],1),n=e.volume.hdr.dims,a=i["c"].fromValues(n[1],n[2],n[3],1),o=e.volume.hdr.affine,r=i["a"].fromValues(o[0][0],o[1][0],o[2][0],o[3][0],o[0][1],o[1][1],o[2][1],o[3][1],o[0][2],o[1][2],o[2][2],o[3][2],o[0][3],o[1][3],o[2][3],o[3][3]);i["c"].mul(t,t,a);var l=i["c"].fromValues(-.5,-.5,-.5,0);return i["c"].add(t,t,l),i["c"].transformMat4(t,t,r),t}function xe(e,t,n){var a=e.canvas.clientWidth/t;n*a>e.canvas.clientHeight&&(a=e.canvas.clientHeight/n);var o=t*a,r=n*a,i=[.5*(e.canvas.clientWidth-o),.5*(e.canvas.clientHeight-r),o,r];return i}function Te(e,t){if(e.clearColor(d[0],d[1],d[2],d[3]),e.clear(e.COLOR_BUFFER_BIT),y===g)return ge(e,t);var n=se(e,t),a=n.volScale;if(e.viewport(0,0,e.canvas.width,e.canvas.height),V=0,y===v){var o=xe(e,a[0],a[1]);he(e,o,0)}else if(y===p){var r=xe(e,a[0],a[2]);he(e,r,1)}else if(y===m){var i=xe(e,a[1],a[2]);he(e,i,2)}else{var l=xe(e,a[0]+a[1],a[1]+a[2]),c=l[2]*a[0]/(a[0]+a[1]),f=l[2]-c,h=l[3]*a[1]/(a[1]+a[2]),x=l[3]-h;he(e,[l[0],l[1]+x,c,h],0),he(e,[l[0],l[1],c,x],1),he(e,[l[0]+c,l[1],f,x],2);var T=S*h;ue(e,[l[0]+c+T,l[1]+x+T,f-T-T,h*u])}e.finish();var E=ye(t),_=E[0].toFixed(2)+"×"+E[1].toFixed(2)+"×"+E[2].toFixed(2);return s["a"].$emit("crosshair-pos-change",_),_}}).call(this,n("b639").Buffer)},d72e:function(e,t,n){"use strict";n("2c88")},f5ef:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("2b0e"),o=new a["a"]},fa78:function(e,t,n){}});
//# sourceMappingURL=app.1b7f3e1c.js.map