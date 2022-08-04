  export function dealServerConfig(config:EnvConfig){
    console.log(config)
    const proxylist:string=config.VITE_GLOB_PROXY
    const list:ProxyList=JSON.parse(proxylist)
    return {
      host: true,
      port: config.VITE_GLOB_PORT,
      open:true,
      proxy: createProxy(list)
    }
  }
  type ProxyItem = [string, string];
  type ProxyList = ProxyItem[];
  export function createProxy(list: ProxyList = []) {
    const ret = {};
    for (const [prefix, target] of list) {
      const isHttps = /^https:\/\//.test(target);
      // https://github.com/http-party/node-http-proxy#options
      ret[prefix] = {
        target: target,
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(new RegExp(`^${prefix}`), ""),
        // https is require secure=false
        ...(isHttps ? { secure: false } : {})
      };
    }
    return ret;
  }