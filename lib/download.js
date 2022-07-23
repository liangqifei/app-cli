const { promisify } = require("util");
module.exports.clone = async function (repo, dest) {
  const download = promisify(require("download-git-repo"));
  const ora = require("ora");
  const process = ora({
    color: "yellow",
    text: `......下载 ${repo}`,
  });
  process.start();
  await download(repo, dest);
  process.succeed();
};
