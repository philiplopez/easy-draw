import * as t from "./types"
export * from "./types"

export function circle(centreX : number, centreY : number, radius : number) : t.Circle {
    return {
        type: "shape",
        shapeType: "circle",
        centre_px: {x : centreX, y : centreY},
        radius_px: radius
    };
}

export function rectangle(topLeftX : number, topLeftY : number, width : number, height : number) : t.Rectangle {
    return {
        type: "shape",
        shapeType: "rectangle",
        topLeft_px: {x: topLeftX, y: topLeftY},
        dimensions_px: {x: width, y: height}
    };
}