//const common = `
 //   --require setup/assertions.js
  //  --require setup/hooks.js
   // --require step-defitions/**/*.step.js
//`
//module.exports = {
 // default: `${common} features/**/*.feature`,
//}

let options = [
  '--require setup/assertions.js',
    '--require setup/hooks.js',
    '--require step-defitions/**/*.step.js',
].join(' ');

let run_features = [
  './features/',
  options,
].join(' ');

module.exports = {
  test_runner: run_features
};
