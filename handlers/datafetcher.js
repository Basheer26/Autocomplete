const axios = require("axios");

function datafetcher(request, response) {
   let data = "";
   request.on("data", (chunck) => {
      data += chunck;
   });
   request.on("end", () => {
      const countryName = JSON.parse(data).countryname;
      console.log(countryName);

      axios
         .get("https://corona.lmao.ninja/v2/countries/")
         .then(function (res) {
            // this "res" is axios response
            const result = res.data.filter(
               (countryData) =>
                  countryData.country.toLowerCase() ===
                  countryName.toLowerCase()
            );
            // this send the result to app.js covidSearch fetch .then
            console.log(result);
            response.end(JSON.stringify(result)); // ending the datafetcher response
         })
         .catch(function (error) {
            console.log(error);
         });
   });
}

module.exports = datafetcher;
