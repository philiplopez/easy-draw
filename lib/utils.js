"use strict";
exports.__esModule = true;
function asRGBAString(rgba) {
    var red = rgba.red, green = rgba.green, blue = rgba.blue, alpha = rgba.alpha;
    return "rgba(" + red + ", " + green + ", " + blue + ", " + alpha + ")";
}
exports.asRGBAString = asRGBAString;
