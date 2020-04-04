const axios = require("axios");
const api = {
  getUser(username) {
    const url = `https://api.github.com/users/${username}`;
    console.log("Searching...\n");
    return axios.get(url);
  }
};

module.exports = api;
