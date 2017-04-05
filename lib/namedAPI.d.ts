import * as t from "./types";
import { Vector2D } from "easy-vector2d";
export * from "./types";
/**
 *
 * @param red: 0 to 255 (0 is no red, 255 is full red)
 * @param green: 0 to 255 (0 is no green, 255 is full green)
 * @param blue: 0 to 255 (0 is no blue, 255 is full blue)
 * @param transparency "alpha": 0.0 to 1.0 (0 is transparent, 1.0 is opaque, 0.5 is half-opaque)
 */
export declare function rgba(red: number, green: number, blue: number, alpha: number): t.RGBA;
export declare function circle(centre_px: Vector2D, radius_px: number, style?: t.Style): t.Circle;
export declare function rectangle(topLeft_px: Vector2D, dimensions_px: Vector2D, style?: t.Style): t.Rectangle;
