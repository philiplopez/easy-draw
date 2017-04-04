import * as t from "./types"
import {Vector2D} from "easy-vector2d"
export * from "./types"

export function circle(centre_px : Vector2D, radius_px : number) : t.Circle {
    return {
        type: "shape",
        shapeType: "circle",
        centre_px,
        radius_px
    };
}

export function rectangle(topLeft_px : Vector2D, dimensions_px : Vector2D) : t.Rectangle {
    return {
        type: "shape",
        shapeType: "rectangle",
        topLeft_px,
        dimensions_px
    }
}