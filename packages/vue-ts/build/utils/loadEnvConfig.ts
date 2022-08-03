import { resolve } from "path";
import dotenv from 'dotenv'
import { readFileSync } from "fs";
import { projectRoot } from "../../vite.config";
/**
 * 
 * @param root 项目跟路径
 * @param mode 项目打包模式
 * @returns 
 */
export const initEnvPathList=({root,mode})=>{
    const evnFilePath=resolve(root, `.env.${mode}`)
    const evnCommonPath=resolve(root, `.env`)
    return [evnCommonPath,evnFilePath]
}
export function loadEnvConfig({match = "VITE_GLOB_",mode='development',root=projectRoot}) {
  const files=initEnvPathList({
    mode,
    root
  })
  return mergeEnvConfig(match,files)
}

export const mergeEnvConfig=(match,envfiles)=>{
  let envConfig:EnvConfig = {};
  envfiles.forEach((filePath) => {
    try {
      const envObj = dotenv.parse(readFileSync(filePath));
      envConfig = { ...envConfig, ...envObj };
    } catch (e) {
      console.error(`Error in parsing ${filePath}`, e);
    }
  });
  const reg = new RegExp(`^(${match})`);
  Object.keys(envConfig).forEach((key) => {
    if (!reg.test(key)) {
      Reflect.deleteProperty(envConfig, key);
    }
  });
  return envConfig;
}

