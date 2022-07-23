const { promisify } = require("util");
const ora = require("ora");
const child_process = require("child_process");
const { resolve } = require("path");
const exec = promisify(require("child_process").exec);
module.exports.clone = async function (repo, dest) {
  let success = true;
  const process = ora({
    color: "yellow",
    text: `......下载 ${repo}`,
  });
  process.start();
  const degitpath = resolve(__dirname, "../node_modules/degit/dist/bin.js");
  try {
    await exec(`node ${degitpath} ${repo} ${dest}`);
    process.succeed();
    success = true;
  } catch (error) {
    process.fail("失败：" + error.stderr);
    success = false;
  }
  return { success };
};
