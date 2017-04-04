"use strict";
exports.__esModule = true;
function circle(centre_px, radius_px) {
    return {
        type: "shape",
        shapeType: "circle",
        centre_px: centre_px,
        radius_px: radius_px
    };
}
exports.circle = circle;
function rectangle(topLeft_px, dimensions_px) {
    return {
        type: "shape",
        shapeType: "rectangle",
        topLeft_px: topLeft_px,
        dimensions_px: dimensions_px
    };
}
exports.rectangle = rectangle;
