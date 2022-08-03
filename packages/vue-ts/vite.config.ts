import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { dealCommonConfig } from './build/vite/dealCommonConfig';
import { dealResolveAliasConfig } from './build/vite/dealResolveAliasConfig';
import { dealServerConfig } from './build/vite/dealServerConfig';
import { loadEnvConfig } from './build/utils/loadEnvConfig';
import { dealBuildConfig } from './build/vite/dealBuildConfig';

// see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// https://vitejs.dev/config/
export const projectRoot: string = process.cwd();
export default defineConfig(({ command, mode }) => {
  const envConfig= loadEnvConfig({
    root:projectRoot,
    mode
  })
  const comomConfig = dealCommonConfig(envConfig)
  const resolveAliasConfig = dealResolveAliasConfig(envConfig)
  const serverConfig=dealServerConfig(envConfig)
  const buildConfig=dealBuildConfig(envConfig)
  return {
    root: projectRoot,
    ...comomConfig,
    resolve:{
      alias:resolveAliasConfig,
      extensions:['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
    },
    server:serverConfig,
    build:buildConfig,
    css:{

    },
    plugins: [vue()]
  }
})


