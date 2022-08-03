export function dealBuildConfig(config:EnvConfig){
    return {
        minify: "terser",
        target: "es2015",
        cssTarget: "chrome86",
        outDir: config.VITE_GLOB_OUTPUT_DIR,
        terserOptions: {
            compress: {
                keep_infinity: true,
                drop_console: config.VITE_GLOBDROP_CONSOLE
            }
        },
        // Turning off brotliSize display can slightly reduce packaging time
        brotliSize: false,
        chunkSizeWarningLimit: 2000
    }
}