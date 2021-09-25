import http from '../utils/http'


export const hpImgPath = 'http://localhost:8000/hp'
export const baseUrl = 'http://localhost:8000'

export const getBanners = () => http.get('/hp/banner');

export const getGames = () => http.get('/hp/games');
export const getNews = () => http.get('/hp/news');

