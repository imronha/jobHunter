const ig = require("./ig");
require("dotenv").config();

const username = process.env.USERNAME;
const password = process.env.PASSWORD;
// console.log(username, password);

(async () => {
  await ig.initialize();

  // await ig.login(username, password);

  // await ig.likeTagsProcess(["volleyballspikes", "volleyball"]);

  debugger;
})();
