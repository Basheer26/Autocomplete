// for reading the files
const dataBase = require("../covid-data.json");
// The require method takes the json as a string so we need to parse it
const parsedDataBase = dataBase;
// filtering
function filterHandler(request, response) {
   let body = "";
   request.on("data", (chunck) => {
      body += chunck;
   });
   request.on("end", () => {
      const parsedBody = JSON.parse(body);
      const resultsArray = parsedDataBase.covidData.filter((country) => {
         // the filter function go over the flowers names. For each flower, if the flower name matches the user input, it returns it to the resultsArray and save it.
         if (country.location.toLowerCase().startsWith(parsedBody.search))
            return true;
         else return false;
      });
      //parsedBody.search;
      response.end(JSON.stringify(resultsArray));
   });
   // response
   // fs readfile for json filtering
   // const variable =  require json also works
   // i build an array
}
module.exports = filterHandler;
