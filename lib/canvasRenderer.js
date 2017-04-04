export function makeRender(context, clearCanvasEachRender) {
    if (clearCanvasEachRender === void 0) { clearCanvasEachRender = true; }
    return function (graphics) {
        if (clearCanvasEachRender)
            clearCanvas(context);
        graphics.map(function (item) {
            drawItemOnCanvas(context, item);
        });
    };
}
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
    context.beginPath();
    context.arc(circleItem.centre_px.x, circleItem.centre_px.y, circleItem.radius_px, 0, 2 * Math.PI);
    context.stroke();
}
function drawRectangleOnContext(context, rectangleItem) {
    context.strokeRect(rectangleItem.topLeft_px.x, rectangleItem.topLeft_px.y, rectangleItem.dimensions_px.x, rectangleItem.dimensions_px.y);
}
