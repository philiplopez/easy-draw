import * as t from "./types";
export interface RenderFunc {
    (graphics: t.Drawable[]): void;
}
export declare function makeRender(context: CanvasRenderingContext2D, clearCanvasEachRender?: boolean): RenderFunc;
