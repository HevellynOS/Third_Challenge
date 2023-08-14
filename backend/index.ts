import axios from "axios";

const fetchData = axios.create({
  baseURL: "https://parseapi.back4app.com/",
  headers: {
    "X-Parse-Application-Id": "lrAPveloMl57TTby5U0S4rFPBrANkAhLUll8jFOh",
    "X-Parse-REST-API-Key": "8aqUBWOjOplfA6lstntyYsYVkt3RzpVtb8qU5x08",
    "Content-Type": "application/json; charset=utf-8", // Include the charset parameter
  },
});

export default fetchData;
