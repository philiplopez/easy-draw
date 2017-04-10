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
