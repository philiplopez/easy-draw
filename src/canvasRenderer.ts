import * as t from "./types"
import {asRGBAString} from "./utils"

export interface RenderFunc {
    (graphics : t.Drawable[]): void;
}

export function makeRender(context : CanvasRenderingContext2D, clearCanvasEachRender = true) : RenderFunc {
    return (graphics : t.Drawable[]) => {
        if (clearCanvasEachRender) clearCanvas(context);
        graphics.map((item : t.Drawable) => {
            drawItemOnCanvas(context, item)
        })
    }
}

function clearCanvas(context : CanvasRenderingContext2D) : void {
    const {width, height} = context.canvas;
    context.clearRect(0, 0, width, height)
}

function drawItemOnCanvas(context : CanvasRenderingContext2D, item : t.Drawable) {
    // or dynamic dispatch, e.g. 
    const renderItem = findRendererForItem(item)
    if (renderItem) {
        renderItem(context, item) 
    } else {
        console.error("No renderer for item: ", item)
        // we have an error - couldn't match item to a renderer
    }
}

interface FindRenderFunc {
    (context : CanvasRenderingContext2D, circleItem : t.Drawable): void;
}
function findRendererForItem(item : t.Drawable) : FindRenderFunc {
    return (item.type === "shape")
        ? findShapeRendererForItem(item as t.Shape)
        : null
}

function findShapeRendererForItem(item : t.Shape) {
    const SHAPE_RENDERERS = {
        circle: drawCircleOnContext,
        rectangle: drawRectangleOnContext
    }
    return SHAPE_RENDERERS[item.shapeType]
}

const DEFAULT_FILL_STYLE = "white"
const DEFAULT_STROKE_STYLE = "black"
function applyStyle(context : CanvasRenderingContext2D, style : t.Style) {
    // TODO: Properly handly fill/stroke options (e.g. string vs rgba vs gradient vs ...)
    context.fillStyle = (style.fillRGBA) ? asRGBAString(style.fillRGBA) : DEFAULT_FILL_STYLE;
    context.strokeStyle = (style.strokeRGBA) ? asRGBAString(style.strokeRGBA) : DEFAULT_STROKE_STYLE;
    context.fill();     // TODO: always fill?
    context.stroke();   // TODO: always stroke?
}

function drawCircleOnContext(context : CanvasRenderingContext2D, circleItem : t.Circle) {
    // context.save();
    context.beginPath();
    context.arc(circleItem.centre_px.x,
                circleItem.centre_px.y,
                circleItem.radius_px,
                0,
                2 * Math.PI);
    applyStyle(context, circleItem.style);
    // context.restore();
}

function drawRectangleOnContext(context : CanvasRenderingContext2D, rectangleItem : t.Rectangle) {
    // context.save();
    context.beginPath();
    context.rect(rectangleItem.topLeft_px.x,
                    rectangleItem.topLeft_px.y,
                    rectangleItem.dimensions_px.x,
                    rectangleItem.dimensions_px.y);
    applyStyle(context, rectangleItem.style);
    // context.restore();
                    
}