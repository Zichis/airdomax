<template>
  <div class="w-full md:w-1/2">
    <div class="min-h-screen p-10 md:p-20">
      <h1 class="font-medium text-3xl text-gray-800 my-5">Log In</h1>
      <p class="font-light text-gray-600">
        Log into your account to access our services
      </p>
      <form @submit.prevent="login">
        <div class="my-2">
          <label for="email" class="block">Email</label>
          <input
            name="email"
            v-model="loginForm.email"
            type="email"
            placeholder="Enter your email"
            class="w-full md:w-3/4 my-3 border-2 border-gray-300 py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            required
          />
        </div>
        <div class="my-2">
          <label for="password" class="block">Password</label>
          <input
            name="password"
            v-model="loginForm.password"
            type="password"
            placeholder="Enter your password"
            class="w-full md:w-3/4 my-3 border-2 border-gray-300 py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            required
          />
        </div>
        <div class="my-2">
          <button
            class="bg-green-500 hover:bg-green-700 text-white w-full md:w-3/4 font-bold py-3 px-4 rounded"
          >
            Login
          </button>
        </div>
        <p class="text-gray-500">
          Don't have an account?
          <router-link
            to="/auth/sign-up"
            class="text-green-500 hover:text-green-700"
            >Sign Up</router-link
          >
        </p>
      </form>
    </div>
    <div
      id="errorAlert"
      v-show="showErrorAlert"
      class="fixed top-5 left-5 md:left-auto right-5 z-50 py-3 pl-4 pr-16 bg-red-100 text-red-700 border border-red-400 rounded shadow-lg"
    >
      {{ loginErrorMessage }}
      <span
        class="absolute top-0 bottom-0 right-0 px-4 py-3 cursor-pointer"
        @click="dismissAlert"
      >
        <svg
          class="fill-current h-6 w-6 text-red-500"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>Close</title>
          <path
            d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
          />
        </svg>
      </span>
    </div>
  </div>
</template>

<script>
import AuthService from "../../services/AuthService";
export default {
  name: "LoginView",
  data() {
    return {
      loginForm: {
        email: "",
        password: "",
      },
      loginErrorMessage: "",
      loginErrors: [],
      showErrorAlert: false,
    };
  },
  methods: {
    login() {
      AuthService.login(this.loginForm)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          this.loginErrorMessage = error.response.data.message;
          this.loginErrors = error.response.data.errors;
          if (this.loginErrorMessage != "") {
            this.showErrorAlert = true;
          }
        });
    },
    dismissAlert() {
      this.showErrorAlert = false;
    },
  },
};
</script>

<style lang="scss">
@keyframes test {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
#errorAlert {
  animation-name: test;
  animation-duration: 0.5s;
}
</style>
