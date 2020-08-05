const path = require("path");
const fs = require("fs");
const axios = require("axios");
const dataBase = require("../covid-data.json");

function datafetcher(req, res) {
  let data = "";
  req.on("data", (chunck) => {
    data += chunck;
  });
  req.on("end", () => {
    if (data) {
      console.log(data);
    }
    const dataCountry = JSON.parse(data);
    console.log(dataCountry.data[0].total_cases);
  });
}

module.exports = datafetcher;
