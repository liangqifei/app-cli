  export function dealServerConfig(config:EnvConfig){
    return {
      host: true,
      port: config.VITE_GLOB_PORT,
      open:true,
      // proxy: createProxy(VITE_PROXY)
    }
  }