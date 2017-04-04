import * as D from "./types";
export interface RenderFunc {
    (graphics: D.Drawable[]): void;
}
export declare function makeRender(context: CanvasRenderingContext2D, clearCanvasEachRender?: boolean): RenderFunc;
