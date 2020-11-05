const inquirer = require("inquirer");
const chalk = require("chalk");
const fs = require("fs");

const { lstatSync, readdirSync } = require("fs");
const { join } = require("path");

const listDir = (source) =>
  readdirSync(source).map((name) => join(source, name));
const isDirectory = (source) => lstatSync(source).isDirectory();
const getName = (path) => path.split("/")[1];
const getDirectories = (source) =>
  listDir(source).filter(isDirectory).map(getName);

const directories = getDirectories("./.scaff");

const questions = [
  {
    type: "list",
    name: "template",
    message: "Choose your template",
    choices: directories,
  },
  {
    type: "input",
    name: "dest",
    message: "Where to copy them?",
    default: "./src/components/",
  },
  {
    type: "input",
    name: "name",
    message: "What's component name?",
    default: "MyComponent",
  },
];

module.exports = function () {
  inquirer.prompt(questions).then(function (answers) {
    console.log(chalk.grey("Template: "), answers.template);
    console.log(chalk.grey("Destination: "), answers.dest);
    console.log(chalk.grey("Name: "), answers.name);

    listDir(`./.scaff/${answers.template}`).forEach((path) => {
      const paths = path.split("/");
      let filename = paths[paths.length - 1];

      fs.readFile(path, "utf8", function (err, data) {
        if (err) {
          return console.log(err);
        }
        var result = data.replace(/{{name}}/g, answers.name);
        filename = filename.replace(/{{name}}/g, answers.name);

        if (!fs.existsSync(answers.dest)) {
          fs.mkdirSync(answers.dest);
        }
        fs.writeFile(`${answers.dest}/${filename}`, result, "utf8", function (
          err
        ) {
          if (err) return console.log(err);
        });
      });
    });
  });
};
