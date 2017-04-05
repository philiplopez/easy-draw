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
function drawCircleOnContext(context, circleItem) {
    // FIXME: Duplication between drawCircle and drawRect
    // context.save();
    context.beginPath();
    context.arc(circleItem.centre_px.x, circleItem.centre_px.y, circleItem.radius_px, 0, 2 * Math.PI);
    context.fillStyle = utils_1.asRGBAString(circleItem.style.fillColour);
    context.strokeStyle = utils_1.asRGBAString(circleItem.style.strokeColour);
    context.fill();
    context.stroke();
    // context.restore();
}
function drawRectangleOnContext(context, rectangleItem) {
    // FIXME: Duplication between drawCircle and drawRect
    // context.save();
    context.beginPath();
    context.rect(rectangleItem.topLeft_px.x, rectangleItem.topLeft_px.y, rectangleItem.dimensions_px.x, rectangleItem.dimensions_px.y);
    context.fillStyle = utils_1.asRGBAString(rectangleItem.style.fillColour);
    context.strokeStyle = utils_1.asRGBAString(rectangleItem.style.strokeColour);
    context.fill();
    context.stroke();
    // context.restore();
}
