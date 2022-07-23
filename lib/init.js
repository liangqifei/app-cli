const clear = require("clear");
const { green } = require("chalk");
const { promisify } = require("util");
const { clone } = require("./download");

//工具函数
const figlet = promisify(require("figlet"));
const log = (content) => console.log(green(content));

module.exports = async ({ name, template, remote }) => {
  //打印欢迎界面
  clear();
  const data = await figlet(template);
  log(data);
  log(`😹创建项目：${name}`);
  const address = remote
    ? remote
    : `https://github.com/liangqifei/app-cli/packages/${template}`;
  const { success } = await clone(address, name);
  if (success) {
    log(
      green(`
          =======================
          👌安装完成
              cd ${name}
              yarn
              yarn dev
          =======================
      `)
    );
  }
};
