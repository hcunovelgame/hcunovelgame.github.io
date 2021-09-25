import http from '../utils/http'


export const hpImgPath = 'https://47.101.190.44:80/hp'
export const baseUrl = 'https://47.101.190.44:80'

export const getBanners = () => http.get('/hp/banner');

export const getGames = () => http.get('/hp/games');
export const getNews = () => http.get('/hp/news');

