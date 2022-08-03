import { pathResolve } from "../utils/pathResolve";

export function dealResolveAliasConfig(config:EnvConfig) {
    return [{
        find: /\/@\//,
        replacement: pathResolve("src") + "/"
    }]
}