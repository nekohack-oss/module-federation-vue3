import { createApp, defineAsyncComponent } from 'vue'
import App from './App'

const Content = defineAsyncComponent(() => import('app1/Content'))
const Button = defineAsyncComponent(() => import('app1/Button'))

const app = createApp(App)

app.component('ContentElement', Content)
app.component('ButtonElement', Button)

app.mount('#app')
