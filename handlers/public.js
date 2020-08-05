const fs = require("fs");
const path = require("path");
const missingHandler = require("./missing");

const types = {
  html: "text/html",
  css: "text/css",
  js: "application/javascript",
  png: "image/png",
};

function publicHandler(request, response) {
  const urlArray = request.url.split(".");
  const extension = urlArray[1];
  const type = types[extension];

  const filePath = path.join(__dirname, "..", request.url);
  console.log(filePath);
  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(error);
      missingHandler(request, response);
    } else {
      response.writeHead(200, { "content-type": type });
      response.end(file);
    }
  });
}

module.exports = publicHandler;
