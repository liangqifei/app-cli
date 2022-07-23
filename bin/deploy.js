#!/usr/bin/env node
const PackJson = require("../package.json");
const program = require("commander");
const initMethod = require("../lib/init");
program.version(PackJson.version);
program
  .command("init <name>")
  .option("-t, --template <template>", "选择一个模板类型", "vue-ts")
  .action((name, template) => {
    initMethod(name, template);
  });

program.parse(process.argv);
