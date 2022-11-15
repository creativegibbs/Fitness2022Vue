import { createApp } from 'vue'
import App from './App.vue'
import router from './router'



const app = createApp(App)

fetch("https://creativegibbs.github.io/gymapi/gymdb.json").then((res) =>
res.json().then((data) => (
    app.config.globalProperties.$workout = data,
    app.use(router).mount('#app')
    )
)

);

 


