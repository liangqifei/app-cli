export function dealCommonConfig(config:EnvConfig) {
    return {
      mode: config.VITE_GLOB_MODE,
      cacheDir: config.VITE_GLOB_CACHEDIR,
    }
  }
  