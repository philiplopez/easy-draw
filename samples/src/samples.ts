import * as D from "easy-draw/lib/namedAPI"
import {makeRender} from "easy-draw/lib/canvasRenderer"

const graphics = [
    D.circle({
        centre_px: {
            x: 120,
            y: 120
        },
        radius_px: 100,
        style: {
            fillRGBA: D.rgba(0, 255, 0, 0.5)
        }
    }),
    D.circle({
        centre_px: {
            x: 240,
            y: 240
        },
        radius_px: 150,
        style: {
            fillRGBA: D.rgba(0, 0, 255, 0.5),
            strokeRGBA: D.rgba(255, 0, 0, 1.0)
        }
    }),
    D.rectangle({
        topLeft_px: {
            x: 75,
            y: 500
        },
        dimensions_px: {
            x: 50,
            y: 50
        },
        style: {
            fillRGBA: D.rgba(0, 255, 0, 0.75),
            strokeRGBA: D.rgba(255, 0, 0, 1.0)
        }
    })
];

const canvas = document.getElementById("canvas")as HTMLCanvasElement;
const renderToScreen = makeRender(canvas.getContext("2d"), true);
renderToScreen(graphics)