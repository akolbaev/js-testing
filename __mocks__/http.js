const axios = require("axios");

const fetchData = async () => {
  console.log("Fetching Mock Data...");
  return Promise.resolve({
    titles: ["Lord Commander of the Night's Watch"],
  });
};

exports.fetchData = fetchData;
