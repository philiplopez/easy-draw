import * as D from "easy-draw/lib/namedAPI"
import {makeRender} from "easy-draw/lib/canvasRenderer"


const graphics = [
    D.circle({x: 120, y: 120}, 120, {
        fillColour: D.rgba(0, 255, 0, 1.0),
        strokeColour: D.rgba(255, 0, 0, 1.0),
    }),
    D.circle({x: 240, y: 240}, 120, {
        fillColour: D.rgba(0, 0, 255, 0.5),
        strokeColour: D.rgba(0, 255, 0, 0.2),
    }),
    D.circle({x: 360, y: 360}, 120, {
        fillColour: D.rgba(255, 0, 0, 0.25),
        strokeColour: D.rgba(0, 0, 0, 1.0),
    }),
    D.circle({x: 480, y: 480}, 120, {
        fillColour: D.rgba(255, 255, 0, 0.25),
        strokeColour: D.rgba(0, 0, 0, 1.0),
    }),
    D.rectangle({x: 50, y: 500}, {x: 50, y: 50}, {
        fillColour: D.rgba(0, 255, 255, 1.0),
        strokeColour: D.rgba(255, 255, 0, 1.0),
    }),
    D.rectangle({x: 75, y: 500}, {x: 50, y: 50}, {
        fillColour: D.rgba(0, 255, 0, 0.75),
        strokeColour: D.rgba(255, 255, 0, 1.0),
    }),
    D.rectangle({x: 100, y: 500}, {x: 50, y: 50}, {
        fillColour: D.rgba(255, 0, 0, 0.5),
        strokeColour: D.rgba(255, 255, 0, 1.0),
    }),
];

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const renderToScreen = makeRender(canvas.getContext("2d"), true);
renderToScreen(graphics)