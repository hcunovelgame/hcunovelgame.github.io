import http from '../utils/http'


export const hpImgPath = 'https://hcunovelgame.yude.jp/hp'
export const baseUrl = 'https://hcunovelgame.yude.jp'

export const getBanners = () => http.get('/hp/banner');

export const getGames = () => http.get('/hp/games');
export const getNews = () => http.get('/hp/news');

