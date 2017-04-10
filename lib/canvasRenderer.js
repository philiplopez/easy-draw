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
