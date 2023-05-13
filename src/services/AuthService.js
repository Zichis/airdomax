import { httpClient } from "../config/axios";

export default {
  signup(signupForm) {
    return httpClient.post("/sign-up", signupForm, {
      headers: {
        "Content-Type":
          "multipart/form-data; charset=utf-8; boundary=" +
          Math.random().toString().substr(2),
      },
    });
  },
};
