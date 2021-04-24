const axios = require("axios");

const fetchData = async () => {
  console.log("Fetching data...");
  return axios
    .get("https://anapioficeandfire.com/api/characters/583")
    .then((response) => {
      return response.data;
    });
};

exports.fetchData = fetchData;
