const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  async prompting() {
    const answers = await this.prompt([
      {
        type: "list",
        name: "app",
        message: "What kind of app do you want?",
        choices: [
          {
            name: "Simple React App (Vite)",
          },
          {
            name: "NextJs App",
          },
        ],
      },
      {
        type: "checkbox",
        name: "features",
        message: "What features do you want to add",
        when: (answers) => answers.app === "Simple React App (Vite)",
        choices: [
          {
            name: "eslint",
            checked: true,
          },
          {
            name: "typescript",
          },
          {
            name: "router",
          },
          {
            name: "husky",
          },
        ],
      },
      {
        type: "checkbox",
        name: "features",
        message: "What features do you want to add",
        when: (answers) => answers.app === "NextJs App",
        choices: [
          {
            name: "eslint",
            checked: true,
          },
          {
            name: "typescript",
          },
          {
            name: "husky",
          },
        ],
      },
    ]);

    if (answers.app) {
      if (answers.app === "Simple React App (Vite)") {
        this.composeWith(require.resolve("./app/simple"));
      } else if (answers.app === "NextJs App") {
        this.composeWith(require.resolve("./app/nextjs"));
      }
    }
  }
};
