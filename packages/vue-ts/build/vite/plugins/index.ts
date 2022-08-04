import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
export function createVitePlugins(viteEnvConfig: EnvConfig){
    const {
    }=viteEnvConfig
    const vitePlugins=[
        vue(),
        vueJsx({
        
        })
    ]
    return vitePlugins
}