"use strict";
exports.__esModule = true;
var DEFAULT_STYLE = {
    fillColour: rgba(0, 0, 0, 1),
    strokeColour: rgba(255, 255, 255, 1)
};
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
function circle(centre_px, radius_px, style) {
    if (style === void 0) { style = DEFAULT_STYLE; }
    return { type: "shape", shapeType: "circle", centre_px: centre_px, radius_px: radius_px, style: style };
}
exports.circle = circle;
function rectangle(topLeft_px, dimensions_px, style) {
    if (style === void 0) { style = DEFAULT_STYLE; }
    return { type: "shape", shapeType: "rectangle", topLeft_px: topLeft_px, dimensions_px: dimensions_px, style: style };
}
exports.rectangle = rectangle;
