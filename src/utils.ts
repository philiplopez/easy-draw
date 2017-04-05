import {RGBA} from "./types"

export function asRGBAString(rgba: RGBA) : string {
    const {red, green, blue, alpha} = rgba;
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`
}