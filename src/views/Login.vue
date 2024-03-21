
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
                                <div v-if="errors">
                                    <div v-for="(v,k) in ermsg" :key="k" class="text-danger">
                                        <p v-for="error in v" :key="error" class="text-sm">
                                        {{ error }}
                                        </p>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <form>
                                        <div class="form-floating mb-3">
                                            <input class="form-control" id="inputEmail" type="email"
                                                placeholder="name@example.com" v-model="email" required />
                                            <small>{{ error_email }}</small>
                                            <label for="inputEmail">Email address</label>
                                        </div>
                                        <div class="form-floating mb-3">
                                            <input class="form-control" id="inputPassword" type="password"
                                                placeholder="Password" v-model="password" required />
                                            <small>{{ error_password }}</small>
                                            <label for="inputPassword">Password</label>
                                        </div>
                                        <div class="form-check mb-3">
                                            <input class="form-check-input" id="inputRememberPassword" type="checkbox"
                                                value="" />
                                            <label class="form-check-label" for="inputRememberPassword">Remember
                                                Password</label>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                                            <a class="small" href="password.html">Forgot Password?</a>
                                            <!-- <router-link :to="{ name: 'admin' }" class="btn btn-primary"
                                                href="index.html">Login</router-link> -->

                                            <button type="submit" class="btn btn-primary" @click="handleSubmit">
                                                Login
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div class="card-footer text-center py-3">
                                    <div class="small">
                                        Need an account? <router-link :to="{ name: 'register' }"> Sign up!</router-link> (As
                                        Student)
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
import axios from 'axios'
export default {
    data() {
        return {
            email: "",
            password: "",
            ermsg: '',
            error_email: "",
            error_password: "",
        }
    },
    methods: {
        handleSubmit(e) {
            e.preventDefault()
            if (this.password.length > 0) {
                let email = this.email
                let password = this.password

                axios.post('/login', { email, password })
                    .then(response => {
                        let user = response.data.user
                        let is_admin = user.is_admin
                        localStorage.setItem('user', JSON.stringify(user))
                        localStorage.setItem('token', response.data.token)
                        if (is_admin === 1) {
                            this.$router.push('dashboard')
                        } else if (is_admin === 0) {
                            this.$router.push('/student/dashboard')
                        }
                        else if (is_admin === 2) {
                            this.$router.push('/teacher/dashboard')
                        }
                    }).catch(error => {
                        this.ermsg = error.response.errors
                        console.log(error.response.data.messages)
                    });
            }
        }
    }
}
</script>
