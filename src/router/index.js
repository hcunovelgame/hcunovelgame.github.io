import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Blog from "../views/Blog";
import GameList from "../views/GameList";
import NewsList from "../views/NewsList";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/blog',
    name: "Blog",
    component: Blog
  },
  {
    path: '/gamelist',
    name: "GameList",
    component: GameList,
  },
  {
    path: '/newslist',
    name: "NewsList",
    component: NewsList
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
