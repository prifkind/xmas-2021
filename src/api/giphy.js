import axios from "axios";

const giphy = axios.create({
  baseURL: "https://api.giphy.com/v1/gifs",
  params: {
    api_key: "3F7eh6IpfOMKsUx1djJESaVJQIdGr9NU",
  },
});

export default giphy;
