#!/usr/bin/env node

const program = require("commander");
const list = require("../lib/list");

program
  .command("generate")
  .alias("g")
  .description("Generate files using templates")
  .action(function () {
    list();
  });

program.parse(process.argv);
