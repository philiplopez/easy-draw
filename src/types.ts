import {Vector2D} from "easy-vector2d"

export interface Drawable {
    type: "shape"
}

export interface Shape extends Drawable {
    shapeType: "circle" | "rectangle"
}

export interface Circle extends Shape {
    centre_px: Vector2D,
    radius_px: number
}

export interface Rectangle extends Shape {
    topLeft_px: Vector2D,
    dimensions_px: Vector2D
}