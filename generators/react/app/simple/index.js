const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  installDependencies() {
    Generator.addDependencies({dependency: "react-router-dom"});
  }

  app() {
    this.fs.copy(this.templatePath("app"), this.destinationPath("./src/app"));
  }
};
