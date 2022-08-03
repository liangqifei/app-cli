import { resolve } from "path";
import { projectRoot } from "../../vite.config";

export function pathResolve(dir: string,root:string=projectRoot) {
    return resolve(root, ".", dir);
}

