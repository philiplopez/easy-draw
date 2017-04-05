const {FuseBox} = require('fuse-box')

const fuse = FuseBox.init({
    cache: false,
    homeDir: "src/",
    outFile: "./build/bundle.js",
    sourceMaps: true,
    plugins: [
    ]
}).devServer("> samples.ts")

