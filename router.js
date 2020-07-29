const homeHandler = require("./handlers/home");
const publicHandler = require("./handlers/public");
const missingHandler = require("./handlers/missing");
const filterHandler = require("./handlers/filter");

function router(request, response) {
   const url = request.url;
   if (url === "/") {
      homeHandler(request, response);
   } else if (url.includes("public")) {
      publicHandler(request, response);
      //
   } else if (url === "/autocomplete" && request.method === "POST") {
      filterHandler(request, response);
      // we need to do respond.end to the data
   } else {
      missingHandler(request, response);
   }
}

module.exports = router;
