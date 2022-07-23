const { promisify } = require("util");
const figlet = promisify(require("figlet"));
const clear = require("clear");
const { green } = require("chalk");
const log = (content) => console.log(green(content));
const { clone } = require("./download");
// const { resolve } = require("path");
// const spawn = async (...args) => {
//   const { spawn } = require("child_process");
//   return new Promise((resolve) => {
//     const proc = spawn(...args);
//     proc.stdout.pipe(process.stdout);
//     proc.stderr.pipe(process.stderr);
//     proc.on("close", () => {
//       resolve();
//     });
//   });
// };
module.exports = async (name, template) => {
  //打印欢迎界面
  clear();
  const data = await figlet("vue-ts-app");
  log(data);
  log(`😹创建项目：${name}`);
  await clone(`github:liangqifei/app-cli/${template}`, name);
  //安装依赖
  log("安装依赖");
  //   await spawn("yarn", ["install"], { cwd: `./${name}` });
  log(
    green(`
        =======================
        👌安装完成
            yarn install
            cd ${name}
            yarn dev
        =======================
    `)
  );
};
