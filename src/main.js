import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "aos/dist/aos.css";
import "./assets/tailwind.css";
import "swiper/css";
import "swiper/css/autoplay";

createApp(App).use(store).use(router).mount("#app");
