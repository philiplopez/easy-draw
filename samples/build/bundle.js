(function(FuseBox){FuseBox.$fuse$=FuseBox;
FuseBox.pkg("default", {}, function(___scope___){
___scope___.file("samples.js", function(exports, require, module, __filename, __dirname){

"use strict";
exports.__esModule = true;
var D = require("easy-draw/lib/namedAPI");
var canvasRenderer_1 = require("easy-draw/lib/canvasRenderer");
var graphics = [
    D.circle({
        centre_px: {
            x: 120,
            y: 120
        },
        radius_px: 100,
        style: {
            fillRGBA: D.rgba(0, 255, 0, 0.5)
        }
    }),
    D.circle({
        centre_px: {
            x: 240,
            y: 240
        },
        radius_px: 150,
        style: {
            fillRGBA: D.rgba(0, 0, 255, 0.5),
            strokeRGBA: D.rgba(255, 0, 0, 1.0)
        }
    }),
    D.rectangle({
        topLeft_px: {
            x: 75,
            y: 500
        },
        dimensions_px: {
            x: 50,
            y: 50
        },
        style: {
            fillRGBA: D.rgba(0, 255, 0, 0.75),
            strokeRGBA: D.rgba(255, 0, 0, 1.0)
        }
    })
];
var canvas = document.getElementById("canvas");
var renderToScreen = canvasRenderer_1.makeRender(canvas.getContext("2d"), true);
renderToScreen(graphics);
//# sourceMappingURL=samples.js.map
});
});
FuseBox.pkg("easy-draw", {}, function(___scope___){
___scope___.file("lib/namedAPI.js", function(exports, require, module, __filename, __dirname){

"use strict";
exports.__esModule = true;
var EMPTY_STYLE = {};
/**
 *
 * @param red: 0 to 255 (0 is no red, 255 is full red)
 * @param green: 0 to 255 (0 is no green, 255 is full green)
 * @param blue: 0 to 255 (0 is no blue, 255 is full blue)
 * @param transparency "alpha": 0.0 to 1.0 (0 is transparent, 1.0 is opaque, 0.5 is half-opaque)
 */
function rgba(red, green, blue, alpha) {
    return { red: red, green: green, blue: blue, alpha: alpha };
}
exports.rgba = rgba;
function circle(_a) {
    var centre_px = _a.centre_px, radius_px = _a.radius_px, _b = _a.style, style = _b === void 0 ? EMPTY_STYLE : _b;
    return { type: "shape", shapeType: "circle", centre_px: centre_px, radius_px: radius_px, style: style };
}
exports.circle = circle;
function rectangle(_a) {
    var topLeft_px = _a.topLeft_px, dimensions_px = _a.dimensions_px, _b = _a.style, style = _b === void 0 ? EMPTY_STYLE : _b;
    return { type: "shape", shapeType: "rectangle", topLeft_px: topLeft_px, dimensions_px: dimensions_px, style: style };
}
exports.rectangle = rectangle;

});
___scope___.file("lib/canvasRenderer.js", function(exports, require, module, __filename, __dirname){

"use strict";
exports.__esModule = true;
var utils_1 = require("./utils");
function makeRender(context, clearCanvasEachRender) {
    if (clearCanvasEachRender === void 0) { clearCanvasEachRender = true; }
    return function (graphics) {
        if (clearCanvasEachRender)
            clearCanvas(context);
        graphics.map(function (item) {
            drawItemOnCanvas(context, item);
        });
    };
}
exports.makeRender = makeRender;
function clearCanvas(context) {
    var _a = context.canvas, width = _a.width, height = _a.height;
    context.clearRect(0, 0, width, height);
}
function drawItemOnCanvas(context, item) {
    // or dynamic dispatch, e.g. 
    var renderItem = findRendererForItem(item);
    if (renderItem) {
        renderItem(context, item);
    }
    else {
        console.error("No renderer for item: ", item);
        // we have an error - couldn't match item to a renderer
    }
}
function findRendererForItem(item) {
    return (item.type === "shape")
        ? findShapeRendererForItem(item)
        : null;
}
function findShapeRendererForItem(item) {
    var SHAPE_RENDERERS = {
        circle: drawCircleOnContext,
        rectangle: drawRectangleOnContext
    };
    return SHAPE_RENDERERS[item.shapeType];
}
var DEFAULT_FILL_STYLE = "white";
var DEFAULT_STROKE_STYLE = "black";
function applyStyle(context, style) {
    // TODO: Properly handly fill/stroke options (e.g. string vs rgba vs gradient vs ...)
    context.fillStyle = (style.fillRGBA) ? utils_1.asRGBAString(style.fillRGBA) : DEFAULT_FILL_STYLE;
    context.strokeStyle = (style.strokeRGBA) ? utils_1.asRGBAString(style.strokeRGBA) : DEFAULT_STROKE_STYLE;
    context.fill(); // TODO: always fill?
    context.stroke(); // TODO: always stroke?
}
function drawCircleOnContext(context, circleItem) {
    // context.save();
    context.beginPath();
    context.arc(circleItem.centre_px.x, circleItem.centre_px.y, circleItem.radius_px, 0, 2 * Math.PI);
    applyStyle(context, circleItem.style);
    // context.restore();
}
function drawRectangleOnContext(context, rectangleItem) {
    // context.save();
    context.beginPath();
    context.rect(rectangleItem.topLeft_px.x, rectangleItem.topLeft_px.y, rectangleItem.dimensions_px.x, rectangleItem.dimensions_px.y);
    applyStyle(context, rectangleItem.style);
    // context.restore();
}

});
___scope___.file("lib/utils.js", function(exports, require, module, __filename, __dirname){

"use strict";
exports.__esModule = true;
function asRGBAString(rgba) {
    var red = rgba.red, green = rgba.green, blue = rgba.blue, alpha = rgba.alpha;
    return "rgba(" + red + ", " + green + ", " + blue + ", " + alpha + ")";
}
exports.asRGBAString = asRGBAString;

});
return ___scope___.entry = "lib/index.js";
});

FuseBox.import("default/samples.js");
FuseBox.main("default/samples.js");
})
(function(e){function r(e){var r=e.charCodeAt(0),n=e.charCodeAt(1);if((d||58!==n)&&(r>=97&&r<=122||64===r)){if(64===r){var t=e.split("/"),i=t.splice(2,t.length).join("/");return[t[0]+"/"+t[1],i||void 0]}var o=e.indexOf("/");if(o===-1)return[e];var a=e.substring(0,o),f=e.substring(o+1);return[a,f]}}function n(e){return e.substring(0,e.lastIndexOf("/"))||"./"}function t(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];for(var n=[],t=0,i=arguments.length;t<i;t++)n=n.concat(arguments[t].split("/"));for(var o=[],t=0,i=n.length;t<i;t++){var a=n[t];a&&"."!==a&&(".."===a?o.pop():o.push(a))}return""===n[0]&&o.unshift(""),o.join("/")||(o.length?"/":".")}function i(e){var r=e.match(/\.(\w{1,})$/);return r&&r[1]?e:e+".js"}function o(e){if(d){var r,n=document,t=n.getElementsByTagName("head")[0];/\.css$/.test(e)?(r=n.createElement("link"),r.rel="stylesheet",r.type="text/css",r.href=e):(r=n.createElement("script"),r.type="text/javascript",r.src=e,r.async=!0),t.insertBefore(r,t.firstChild)}}function a(e,r){for(var n in e)e.hasOwnProperty(n)&&r(n,e[n])}function f(e){return{server:require(e)}}function u(e,n){var o=n.path||"./",a=n.pkg||"default",u=r(e);if(u&&(o="./",a=u[0],n.v&&n.v[a]&&(a=a+"@"+n.v[a]),e=u[1]),e)if(126===e.charCodeAt(0))e=e.slice(2,e.length),o="./";else if(!d&&(47===e.charCodeAt(0)||58===e.charCodeAt(1)))return f(e);var s=h[a];if(!s){if(d)throw"Package not found "+a;return f(a+(e?"/"+e:""))}e=e?e:"./"+s.s.entry;var l,c=t(o,e),v=i(c),p=s.f[v];return!p&&v.indexOf("*")>-1&&(l=v),p||l||(v=t(c,"/","index.js"),p=s.f[v],p||(v=c+".js",p=s.f[v]),p||(p=s.f[c+".jsx"]),p||(v=c+"/index.jsx",p=s.f[v])),{file:p,wildcard:l,pkgName:a,versions:s.v,filePath:c,validPath:v}}function s(e,r){if(!d)return r(/\.(js|json)$/.test(e)?v.require(e):"");var n=new XMLHttpRequest;n.onreadystatechange=function(){if(4==n.readyState)if(200==n.status){var i=n.getResponseHeader("Content-Type"),o=n.responseText;/json/.test(i)?o="module.exports = "+o:/javascript/.test(i)||(o="module.exports = "+JSON.stringify(o));var a=t("./",e);g.dynamic(a,o),r(g.import(e,{}))}else console.error(e,"not found on request"),r(void 0)},n.open("GET",e,!0),n.send()}function l(e,r){var n=m[e];if(n)for(var t in n){var i=n[t].apply(null,r);if(i===!1)return!1}}function c(e,r){if(void 0===r&&(r={}),58===e.charCodeAt(4)||58===e.charCodeAt(5))return o(e);var t=u(e,r);if(t.server)return t.server;var i=t.file;if(t.wildcard){var a=new RegExp(t.wildcard.replace(/\*/g,"@").replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&").replace(/@/g,"[a-z0-9$_-]+"),"i"),f=h[t.pkgName];if(f){var p={};for(var m in f.f)a.test(m)&&(p[m]=c(t.pkgName+"/"+m));return p}}if(!i){var g="function"==typeof r,x=l("async",[e,r]);if(x===!1)return;return s(e,function(e){return g?r(e):null})}var _=t.pkgName;if(i.locals&&i.locals.module)return i.locals.module.exports;var w=i.locals={},y=n(t.validPath);w.exports={},w.module={exports:w.exports},w.require=function(e,r){return c(e,{pkg:_,path:y,v:t.versions})},w.require.main={filename:d?"./":v.require.main.filename,paths:d?[]:v.require.main.paths};var b=[w.module.exports,w.require,w.module,t.validPath,y,_];return l("before-import",b),i.fn.apply(0,b),l("after-import",b),w.module.exports}if(e.FuseBox)return e.FuseBox;var d="undefined"!=typeof window&&window.navigator,v=d?window:global;d&&(v.global=window),e=d&&"undefined"==typeof __fbx__dnm__?e:module.exports;var p=d?window.__fsbx__=window.__fsbx__||{}:v.$fsbx=v.$fsbx||{};d||(v.require=require);var h=p.p=p.p||{},m=p.e=p.e||{},g=function(){function r(){}return r.global=function(e,r){return void 0===r?v[e]:void(v[e]=r)},r.import=function(e,r){return c(e,r)},r.on=function(e,r){m[e]=m[e]||[],m[e].push(r)},r.exists=function(e){try{var r=u(e,{});return void 0!==r.file}catch(e){return!1}},r.remove=function(e){var r=u(e,{}),n=h[r.pkgName];n&&n.f[r.validPath]&&delete n.f[r.validPath]},r.main=function(e){return this.mainFile=e,r.import(e,{})},r.expose=function(r){var n=function(n){var t=r[n].alias,i=c(r[n].pkg);"*"===t?a(i,function(r,n){return e[r]=n}):"object"==typeof t?a(t,function(r,n){return e[n]=i[r]}):e[t]=i};for(var t in r)n(t)},r.dynamic=function(r,n,t){this.pkg(t&&t.pkg||"default",{},function(t){t.file(r,function(r,t,i,o,a){var f=new Function("__fbx__dnm__","exports","require","module","__filename","__dirname","__root__",n);f(!0,r,t,i,o,a,e)})})},r.flush=function(e){var r=h.default;for(var n in r.f)e&&!e(n)||delete r.f[n].locals},r.pkg=function(e,r,n){if(h[e])return n(h[e].s);var t=h[e]={};return t.f={},t.v=r,t.s={file:function(e,r){return t.f[e]={fn:r}}},n(t.s)},r.addPlugin=function(e){this.plugins.push(e)},r}();return g.packages=h,g.isBrowser=void 0!==d,g.isServer=!d,g.plugins=[],e.FuseBox=g}(this))
//# sourceMappingURL=bundle.js.map