import axios from "axios";

const key = 'apiKey=788ec9282bf841d2b58113a0b55f6008';
const url = `https://newsapi.org/v2/`;

class NewsService {
    getLatestNewsByCountry(country='us') {
        return axios.get(`${url}top-headlines?country=${country}&${key}`);
    }

    getNewsByKeyword(keyword='bitcoin') {
        return axios.get(`${url}everything?q=${keyword}&${key}`);
    }
}

export default NewsService;