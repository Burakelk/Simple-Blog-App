import App from './App.vue'
import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'

import BlogListSection from'./components/BlogListSection.vue'
import PreviewArticle from './components/PreviewArticle.vue'
import SideBarMenu from './components/SideBarMenu.vue'

import NewArticle from './components/NewArticle.vue'
import Home from './components/Home.vue'
import DetailedPage from './components/DetailedPage.vue'
import EditArticle from './components/EditArticle.vue'

const routes = [

    { path: '/NewArticle', component: NewArticle },
    { path: '/',component: Home},
    { path: '/EditArticle', component: EditArticle },
    { path: '/DetailedPage', component: DetailedPage }
    
  ]
  
  const router = createRouter({
    history: createMemoryHistory(),
    routes,
  })



  const app = createApp(App)
  app.use(router)
  app.mount('#app')

app.component('side-bar-menu',SideBarMenu)
app.component('blog-list-section', BlogListSection)
app.component('preview-article',PreviewArticle)
