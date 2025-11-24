// Use "type: commonjs" in package.json to use CommonJS modules
const express = require('express');
const app = express();
const port = 3000;
 
app.set('view engine','ejs')
app.set('views',"../views")
require("../rotas/home")(app);
 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});