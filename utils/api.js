
const axios = require("axios");
const api = {
  getUser(data) {
    const url = `https://api.github.com/users/${data.username}`;
    console.log("Searching...\n");
    return axios.get(url);;
  }
};

module.exports = api;
