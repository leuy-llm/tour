import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import { ThemPreset } from './assets/theme';
import router from './router';
import { Button, InputText, InputNumber} from 'primevue';
import Textarea from 'primevue/textarea'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import 'primeicons/primeicons.css';
import  Card  from 'primevue/card'
import  Calendar  from 'primevue/calendar'
import  Dropdown  from 'primevue/dropdown'
import  Rating  from 'primevue/rating'
import  Badge  from 'primevue/badge'
import  Galleria  from 'primevue/galleria'
import  Carousel  from 'primevue/carousel'
import  Dialog  from 'primevue/dialog'
import  TabView  from 'primevue/tabview'
import  TabPanel  from 'primevue/tabpanel'
import  Chip  from 'primevue/chip'
import  Avatar  from 'primevue/avatar'
import Skeleton from 'primevue/skeleton';

const app = createApp(App);
app.use(router)
app.use(PrimeVue, {
    theme: {
        preset: ThemPreset,
        options: {
            prefix: 'p',
            darkModeSelector: false,
            cssLayer: false
        }
    }
 });
app.use(ToastService)
app.component('Button', Button);
app.component('InputText', InputText);
app.component('InputNumber', InputNumber);
app.component('Card', Card)
app.component('Textarea', Textarea)
app.component('Calendar', Calendar)
app.component('Dropdown', Dropdown)
app.component('Badge', Badge)
app.component('Skeleton', Skeleton)
app.component('Avatar', Avatar)
app.component('Toast', Toast)
app.component('Rating', Rating)
app.component('Galleria', Galleria)
app.component('Carousel', Carousel)
app.component('Dialog', Dialog)
app.component('TabView', TabView)
app.component('TabPanel', TabPanel)
app.component('Chip', Chip)

app.mount('#app');

