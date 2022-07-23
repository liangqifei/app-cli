#!/usr/bin/env node
const PackJson = require("../package.json");
const program = require("commander");
const initMethod = require("../lib/init");
program.version(PackJson.version);
program
  .command("init <name>")
  .option("-t, --template <template>", "模板类型", "vue-ts")
  .option("-r, --remote <remote>", "要克隆远程git地址")
  .action((name, options) => {
    const { template, remote } = options;
    initMethod({ name, template, remote });
  });

program.parse(process.argv);
