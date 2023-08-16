import axios from "axios";

const fetchData = axios.create({
  baseURL: "https://parseapi.back4app.com/graphql",
  headers: {
    "X-Parse-Application-Id": "DSiIkHz2MVbCZutKS7abtgrRVsiLNNGcs0L7VsNL",
    "X-Parse-Master-Key": "0cpnqkSUKVkIDlQrNxameA6OmjxmrA72tsUMqVG9",
    "X-Parse-Client-Key": "zXOqJ2k44R6xQqqlpPuizAr3rs58RhHXfU7Aj20V",
    "Content-Type": "application/json; charset=utf-8", // Include the charset parameter
  },
});

export default fetchData;
