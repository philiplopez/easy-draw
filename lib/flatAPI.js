"use strict";
exports.__esModule = true;
function circle(centreX, centreY, radius) {
    return {
        type: "shape",
        shapeType: "circle",
        centre_px: { x: centreX, y: centreY },
        radius_px: radius
    };
}
exports.circle = circle;
function rectangle(topLeftX, topLeftY, width, height) {
    return {
        type: "shape",
        shapeType: "rectangle",
        topLeft_px: { x: topLeftX, y: topLeftY },
        dimensions_px: { x: width, y: height }
    };
}
exports.rectangle = rectangle;
