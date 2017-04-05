import * as t from "./types"
import {Vector2D} from "easy-vector2d"
export * from "./types"

const DEFAULT_STYLE : t.Style = {
    fillColour: rgba(0, 0, 0, 1),
    strokeColour: rgba(255, 255, 255, 1)
}

/**
 *
 * @param red: 0 to 255 (0 is no red, 255 is full red)
 * @param green: 0 to 255 (0 is no green, 255 is full green)
 * @param blue: 0 to 255 (0 is no blue, 255 is full blue)
 * @param transparency "alpha": 0.0 to 1.0 (0 is transparent, 1.0 is opaque, 0.5 is half-opaque)
 */
export function rgba(red : number, green : number, blue : number, alpha : number) : t.RGBA {
    return {red, green, blue, alpha}
}

export function circle(centre_px : Vector2D, radius_px : number, style = DEFAULT_STYLE) : t.Circle {
    return {type: "shape", shapeType: "circle", centre_px, radius_px, style};
}

export function rectangle(topLeft_px : Vector2D, dimensions_px : Vector2D, style = DEFAULT_STYLE) : t.Rectangle {
    return {type: "shape", shapeType: "rectangle", topLeft_px, dimensions_px, style}
}