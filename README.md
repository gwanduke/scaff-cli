# 🚀scaff-cli

(`scaff` is short word of "scaffolding")

Scaffold your frequently used files or folder structure using file based templates.

## Getting Started

### Install

```plain
$ yarn global add scaff-cli

// or

$ npm install -g scaff-cli
```

### Usage

#### 1. Write your templates

```plain
$ mkdir -p .scaff/my-component
$ touch .scaff/my-component/index.js
$ touch .scaff/my-component/{{name}}.js
$ vi .scaff/my-component/{{name}}.js
// export default function {{name}} {}
```

#### 2. run `scaff g` command

`my-component` is folder name you wrote in `.scaff` folder.

```plain
$ scaff g
? Choose your template my-component
? Where to copy them? ./src/components/button
? What's component name? Button

// Now you can check these files.
//   - src/components/button/index.js
//   - src/components/button/Button.js
```

## Document

### scaff command

- scaff generate

## TODO

- [ ] Error handling
- [ ] Support file type
- [ ] Improve dialog
- [ ] Add more commands
- [ ] Add more variables option that can be replaced
