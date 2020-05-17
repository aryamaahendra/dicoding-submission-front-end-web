import 'bootstrap';
import './scss/app.scss';
import './js/component/app-landing-cover.js'
import './js/component/app-pagination.js'
import axios from 'axios'

const appLandingCover = document.querySelector("app-landing-cover");
const appPagination = document.querySelector("app-pagination");
const api_base_url = "https://api.covid19api.com";

axios.get(`${api_base_url}/summary`).then(response => {
   appLandingCover.global = response.data.Global;
   appPagination.data = response.data.Countries;
}).catch(err => {
   console.log(err)
})
