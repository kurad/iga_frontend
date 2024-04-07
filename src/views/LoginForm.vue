
<template>
  <div id="layoutAuthentication">
    <div id="layoutAuthentication_content">
      <main>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-5">
              <div class="card shadow-lg border-0 rounded-lg mt-5">
                <div class="card-header">
                  <h3 class="text-center font-weight-light my-4">Login</h3>
                </div>
                <div class="card-body">
                  <form @submit.prevent="handleSubmit">

                    <p v-if="errors.length>0" class="text-danger">{{ errors }}</p>
                    <div class="form-floating mb-3">
                      <input
                        class="form-control"
                        id="inputEmail"
                        type="email"
                        placeholder="name@example.com"
                        v-model="form.email"
                        :class="{ 'invalid': form.errors.has('email') }"
                      />
                      <span
                        class="text-danger"
                        v-if="form.errors.has('email')"
                      >
                        {{ form.errors.get("email") }}
                      </span>

                      <label for="inputEmail">Email Address</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input
                        class="form-control"
                        id="inputPassword"
                        type="password"
                        placeholder="Password"
                        v-model="form.password"
                        :class="{ 'invalid': form.errors.has('password') }"
                      />
                      <span
                        class="text-danger"
                        v-if="form.errors.has('password')"
                        >{{ form.errors.get("password") }}</span
                      >

                      <label for="inputPassword">Password</label>
                    </div>

                    <div
                      class="d-flex align-items-center justify-content-between mt-4 mb-0"
                    >
                      <a class="small" href="password.html">Forgot Password?</a>
    
                      <button
                        type="submit"
                        class="btn btn-primary"
                       
                      >
                        Login
                      </button>
                    </div>
                  </form>
                </div>
                <div class="card-footer text-center py-3">
                  <div class="small">
                    Need an account?
                    <router-link :to="{ name: 'register' }">
                      Sign up!</router-link
                    >
                    (As Student)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Form from "vform";
export default {
  data: () => ({
    form: new Form({
      email: "",
      password: "",
    }),
    errors: {},
  }),
  methods: {
    handleSubmit(e) {
      e.preventDefault();

      this.form
        .post("/login")
        .then((response) => {
          let user = response.data.user;
          let is_admin = user.is_admin;
          localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem("token", response.data.token);
          if (is_admin === 1) {
            this.$router.push("dashboard");
          } else if (is_admin === 0) {
            this.$router.push("/student/dashboard");
          } else if (is_admin === 2) {
            this.$router.push("/teacher/dashboard");
          }
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
