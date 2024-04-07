<template>
    <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
            <main>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-7">
                            <div class="card shadow-lg border-0 rounded-lg mt-2">
                                <div class="card-header">
                                    <h3 class="text-center font-weight-light my-2">Create an Account</h3>
                                </div>
                                <div class="card-body">
                                    <form @submit.prevent="registerUser()">
                                        <div class="row mb-3">
                                            <div class="col-md-6">
                                                <div class="form-floating mb-3 mb-md-0">
                                                    <input class="form-control" id="inputFirstName" type="text"
                                                        placeholder="Enter your first name" v-model="form.firstname" />
                                                        <div v-if="errors.firstname" class="text-danger">{{ errors.firstname[0] }}</div>
                                                    <label for="inputFirstName">First name<span class="text-danger">*</span></label>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-floating">
                                                    <input class="form-control" id="inputLastName" type="text"
                                                        placeholder="Enter your last name" v-model="form.lastname" />
                                                        <div v-if="errors.firstname" class="text-danger">{{ errors.lastname[0] }}</div>
                                                    <label for="inputLastName">Last name<span class="text-danger">*</span></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-md-6">
                                                <div class="form-floating mb-3 mb-md-0">
                                                    <select class="form-control" v-model="province" @change="getDistrict()">
                                                        <option v-for="item in provinces" :key="item.id" :value="item.id">{{
                                                            item.province_name }}</option>
                                                    </select>
                                                    <label for="inputFirstName">Province<span class="text-danger">*</span></label>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-floating">
                                                    <select class="form-control" v-model="district" @change="getSector()">
                                                        <option v-for="item in districts" :key="item.id" :value="item.id">{{
                                                            item.district_name }}</option>
                                                    </select>
                                                    <label for="inputLastName">District<span class="text-danger">*</span></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-md-6">
                                                <div class="form-floating">
                                                    <select class="form-control" v-model="sector" @change="getSchools()">
                                                        <option v-for="item in sectors" :key="item.id" :value="item.id">{{
                                                            item.sector_name }}</option>
                                                    </select>
                                                    <label for="inputLastName">Sector<span class="text-danger">*</span></label>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-floating">
                                                    <select class="form-control" v-model="form.school"
                                                        v-if="schools.length > 0">
                                                        <option v-for="item in schools" :key="item.id" :value="item.id">{{
                                                            item.name }}</option>
                                                    </select>
                                                    <select class="form-control" v-model="form.school" v-else>
                                                        <option selected>No Schools found</option>
                                                    </select>
                                                    <label for="inputLastName">School<span class="text-danger">*</span></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-md-6">
                                                <div class="form-floating mb-3">
                                                    <input class="form-control" id="inputEmail" type="email"
                                                        placeholder="name@example.com" v-model="form.email" />
                                                        <div v-if="errors.firstname" class="text-danger">{{ errors.email[0] }}</div>
                                                    <label for="inputEmail">Email Address <span class="text-danger">*</span></label>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-floating mb-3">
                                                    <input class="form-control" type="text" placeholder="name@example.com"
                                                        v-model="form.phone" />
                                                    <label for="inputEmail">Phone No</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mb-3">
                                            <div class="col-md-6">
                                                <div class="form-floating mb-3 mb-md-0">
                                                    <input class="form-control" id="inputPassword" type="password"
                                                        placeholder="Create a password" v-model="form.password" />
                                                        <div v-if="errors.firstname" class="text-danger">{{ errors.password[0] }}</div>
                                                    <label for="inputPassword">Password<span class="text-danger">*</span></label>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-floating mb-3 mb-md-0">
                                                    <input class="form-control" id="inputPasswordConfirm" type="password"
                                                        placeholder="Confirm password"
                                                        v-model="form.password_confirmation" />
                                                        <div v-if="errors.firstname" class="text-danger">{{ errors.password_confirmation[0] }}</div>
                                                    <label for="inputPasswordConfirm">Confirm Password <span class="text-danger">*</span></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mt-4 mb-0">
                                            <div class="d-grid"><button type="submit"
                                                    class="btn btn-primary btn-block">Create Account</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div class="card-footer text-center py-3">
                                    <div class="small">Have an account?<router-link :to="{ name: 'login' }">
                                            Login</router-link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        <div id="layoutAuthentication_footer">
            <footer class="py-4 bg-light mt-auto">
                <div class="container-fluid px-4">
                    <div class="d-flex align-items-center justify-content-between small">
                        <div class="text-muted">Copyright &copy; Your Website 2022</div>
                        <div>
                            <a href="#">Privacy Policy</a>
                            &middot;
                            <a href="#">Terms &amp; Conditions</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import $ from 'jquery'
export default {
    data() {
        return {
            schools: [],
            province: 0,
            provinces: [],
            districts: [],
            district: 0,
            sectors: [],
            sector: 0,
            users: [],
            form: {
                firstname: null,
                lastname: null,
                phone: null,
                email: null,
                password: null,
                password_confirmation: null,
                school: null,
            },
            errors:{},
            // isLoading: ref(false)
        }
    },
    methods: {
        async getSchools() {
            let response = await axios.get('/v1/school-info');
            this.schools = response.data;
            console.log(this.schools);
        },

        async registerUser() {
            await axios.post('/v1/register', {
                firstname: this.form.firstname,
                lastname: this.form.lastname,
                phone: this.form.phone,
                email: this.form.email,
                school_id: this.form.school,
                password: this.form.password,
                password_confirmation: this.form.password_confirmation,
            })
                .then((response) => {
                    this.$router.push('/login');
                }).catch((error) => {
                    if(error.response.status ===401){
                        this.errors = error.response.data.errors;
                        console.log(error.response.data.errors);
                    }else{
                        console.log('An error occured:',error.message)
                    }
                });
        },
        getProvinces() {
            axios.get('/v1/province')
                .then(function (response) {
                    this.provinces = response.data;
                }.bind(this));
        },

        getDistrict() {
            axios.get('/v1/district', {
                params: {
                    province_id: this.province
                }
            }).then(function (response) {
                this.districts = response.data
            }.bind(this));
        },
        getSector() {
            axios.get('/v1/sector', {
                params: {
                    district_id: this.district
                }
            }).then(function (response) {
                this.sectors = response.data
            }.bind(this));
        },

        getSchools() {
            axios.get('/v1/school', {
                params: {
                    sector_id: this.sector
                }
            }).then(function (response) {
                this.schools = response.data
            }.bind(this));
        },
    },
    created() {
        // this.getSchools()
        this.getProvinces()
    }
}

</script>