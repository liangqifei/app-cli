const PackJson = require("../package.json");
const program = require("commander");
const initMethod = require("./init");
program.version(PackJson.version);
program.command("init <name>").action((name) => {
  initMethod(name);
});

program.parse(process.argv);
