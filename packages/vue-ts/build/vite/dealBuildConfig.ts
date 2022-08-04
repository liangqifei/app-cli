export function dealBuildConfig(config:EnvConfig){
    return {
        minify: "terser",
        target: "es2015",
        cssTarget: "chrome86",
        outDir: config.VITE_GLOB_OUTPUT_DIR,
        terserOptions: {
            compress: {
                keep_infinity: true,
                drop_console: Boolean(config.VITE_GLOB_DROP_CONSOLE)
            }
        },
        //规定触发警告的 chunk 大小。（以 kbs 为单位）默认： 500
        chunkSizeWarningLimit: 1000
    }
}