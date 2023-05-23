<template>
  <div class="bg-white" style="padding-top: 80px">
    <div
      class="flex flex-wrap justify-center items-center text-center lg:text-left py-24 bg-gray-50"
    >
      <div class="w-full p-10 lg:w-1/2 flex">
        <div>
          <div class="text-5xl font-bold text-blue-900 lg:text-6xl">
            <p class="leading-tight">Lorem ipsum dol</p>
            <p class="leading-tight">or sit amet cons</p>
            <p class="leading-tight">ec tetur adipis</p>
          </div>
          <div class="py-10 text-xl font-light text-gray-700">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            <p>elit, sed do eiusmod tempor incididunt ut labore</p>
          </div>
          <div>
            <router-link
              class="focus:outline-none text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-7 py-3 mr-2 mb-2 dark:focus:ring-yellow-900"
              :to="{ name: 'sign-up' }"
            >
              Sign Up
            </router-link>
            <button
              class="py-3 px-7 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Take A Tour
            </button>
          </div>
        </div>
      </div>
      <div class="w-full lg:w-1/2">
        <swiper
          :slides-per-view="1"
          :space-between="50"
          :autoplay="autoplay"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide>
            <div class="p-10">
              <div
                class="h-96 bg-slate-400 rounded-lg shadow-lg"
                style="
                  background: url('https://images.unsplash.com/photo-1612776573019-568b6d728121?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1625&q=80');
                  background-size: cover;
                "
              ></div>
              <p class="py-10 text-center font-light text-gray-700 text-xl">
                Connect with food producers worldwide
              </p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="p-10">
              <div
                class="h-96 bg-slate-400 rounded-lg shadow-lg"
                style="
                  background: url('https://images.unsplash.com/photo-1580281657527-47f249e8f4df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80');
                  background-size: cover;
                "
              ></div>
              <p class="py-10 text-center font-light text-gray-700 text-xl">
                Link up with drug manufacturers around the world
              </p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="p-10">
              <div
                class="h-96 bg-slate-400 rounded-lg shadow-lg"
                style="
                  background: url('https://images.unsplash.com/photo-1586015555751-63bb77f4322a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80');
                  background-size: cover;
                "
              ></div>
              <p class="py-10 text-center font-light text-gray-700 text-xl">
                Access information on pharmacetucal companies
              </p>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <section class="py-20 px-10 flex flex-wrap items-center">
      <div class="w-full lg:w-1/2 lg:pr-5" data-aos="fade-right">
        <img
          src="https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
          alt="someone on a computer"
          class="rounded-lg shadow-lg mb-10"
        />
      </div>
      <div
        class="w-full text-center lg:w-1/2 lg:px-10 lg:text-left"
        data-aos="fade-left"
      >
        <h2 class="text-3xl mb-10 font-bold text-blue-900 lg:w-3/4">
          Lorem ipsum, dolor sit amet consectetur adipisicing
        </h2>
        <p class="w-full text-gray-700 font-light mb-10 lg:w-3/4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          minus quae incidunt iusto praesentium, dignissimos molestias, non
          possimus autem quas quisquam facere, labore repellat ipsum. Distinctio
          in sint autem sunt. Omnis maxime illo vel quis magni. possimus autem
          quas quisquam facere, labore repellat ipsum. Distinctio in sint autem
          sunt. Omnis maxime illo vel quis magni.
        </p>
        <button
          class="focus:outline-none text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-7 py-3 mr-2 mb-2 dark:focus:ring-yellow-900"
        >
          Sign Up
        </button>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import AOS from "aos";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

SwiperCore.use([Autoplay]);

export default {
  name: "HomeView",
  components: { Swiper, SwiperSlide },
  data() {
    return {
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    };
  },
  mounted() {
    AOS.init();
  },
};
</script>
