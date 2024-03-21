<template>
    <main>
        <div class="container-fluid px-4">
            <h1 class="mt-4">Dashboard</h1>
            <ol class="breadcrumb mb-4">
                <li class="breadcrumb-item active">Dashboard</li>
            </ol>

            <a href="#" class="btn btn-primary btn-sm mb-3" @click.prevent="newSchool"><i class="fa fa-plus"></i> New
                User</a>
            <div class="card mb-4">
                <div class="card-header">
                    <i class="fas fa-table me-1"></i>
                    List of Users
                </div>
                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th># </th>
                                <th>FirstName</th>
                                <th>LastName</th>
                                <th>Email</th>
                                <th>School</th>
                                <th>Province</th>
                                <th>District</th>
                                <th>Sector</th>
                                <th>Action</th>

                            </tr>
                        </thead>

                        <tbody>

                            <tr v-for="(item, index) in users" :key="item.id">
                                <td>{{ index + 1 }}</td>
                                <td>{{ item.firstname }}</td>
                                <td>{{ item.lastname }}</td>
                                <td>{{ item.email }}</td>
                                <td>{{ item.name }}</td>
                                <td>{{ item.province_name }}</td>
                                <td>{{ item.district_name }}</td>
                                <td>{{ item.sector_name }}</td>
                                <td>
                                    <button class="btn btn-primary btn-sm" type="button">View</button>
                                </td>

                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
            <!-- ============================================================================== -->

            <div class="modal" tabindex="-1" id="new_staff_modal">
                <div class="modal-dialog modal-lg modal-dialog-scrollable">
                    <form @submit.prevent="registerUser()">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Register a New Staff</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row mb-3">
                                    <div class="col-md-6">
                                        <div class="form-floating mb-3 mb-md-0">
                                            <input class="form-control" id="inputFirstName" type="text"
                                                placeholder="Enter your first name" v-model="form.firstname" />
                                            <label for="inputFirstName">First name</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input class="form-control" id="inputLastName" type="text"
                                                placeholder="Enter your last name" v-model="form.lastname" />
                                            <label for="inputLastName">Last name</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-body">
                                <div class="row mb-3">
                                    <div class="col-md-4">
                                        <div class="form-floating mb-3 mb-md-0">
                                            <select class="form-control" v-model="province" @change="getDistrict()">
                                                <option v-for="item in provinces" :key="item.id" :value="item.id">{{
                                                    item.province_name }}</option>
                                            </select>
                                            <label for="inputFirstName">Province</label>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-floating">
                                            <select class="form-control" v-model="district" @change="getSector()">
                                                <option v-for="item in districts" :key="item.id" :value="item.id">{{
                                                    item.district_name }}</option>
                                            </select>
                                            <label for="inputLastName">District</label>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-floating">
                                            <select class="form-control" v-model="sector" @change="getSchools()">
                                                <option v-for="item in sectors" :key="item.id" :value="item.id">{{
                                                    item.sector_name }}</option>
                                            </select>
                                            <label for="inputLastName">Sector</label>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="modal-body">
                                <div class="row mb-3">
                                    <div class="col-md-5">
                                        <div class="form-floating">
                                            <select class="form-control" v-model="form.school" v-if="schools.length > 0">
                                                <option v-for="item in schools" :key="item.id" :value="item.id">{{
                                                    item.name }}</option>
                                            </select>
                                            <select class="form-control" v-model="form.school" v-else>
                                                <option selected>No Schools found in this sector</option>
                                            </select>
                                            <label for="inputLastName">School</label>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-floating mb-3">
                                            <input class="form-control" id="inputEmail" type="email"
                                                placeholder="name@example.com" v-model="form.email" />
                                            <label for="inputEmail">Email address</label>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-floating mb-3">
                                            <input class="form-control" id="inputEmail" type="text"
                                                placeholder="name@example.com" v-model="form.phone" />
                                            <label for="inputEmail">Phone</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-body">
                                <div class="row mb-3">
                                    <div class="col-md-6">
                                        <div class="form-floating mb-3 mb-md-0">
                                            <select class="form-control" v-model="form.is_admin">
                                                <option value="1">Admin</option>
                                                <option value="2">Teacher</option>
                                            </select>
                                            <label for="inputPassword">User Role</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-floating mb-3 mb-md-0">
                                            <input class="form-control" id="inputPasswordConfirm" type="password"
                                                placeholder="Confirm password" v-model="form.password" />
                                            <label for="inputPasswordConfirm">Password</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="submit" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <!-- ===============================================================================-->

        </div>
    </main>
</template>
<script>
import axios from 'axios';
import $ from 'jquery'
import { ref } from 'vue';
export default {
    data() {
        return {
            schools: [],
            province: 0,
            provinces: [],
            districts: [],
            district: 0,
            sectors: [],
            users: [],
            sector: 0,
            form: {
                firstname: null,
                lastname: null,
                phone: null,
                email: null,
                password: null,
                school: null,
                is_admin: null,
            },
            // isLoading: ref(false)
        }
    },
    methods: {
        async getSchools() {
            let response = await axios.get('/v1/school-info');
            this.schools = response.data;
            console.log(this.schools);
        },
        newSchool() {
            $('#new_staff_modal').modal('show');
        },

        async registerUser() {
            await axios.post('/staff/register', {
                firstname: this.form.firstname,
                lastname: this.form.lastname,
                phone: this.form.phone,
                email: this.form.email,
                is_admin: this.form.is_admin,
                school_id: this.form.school,
                password: this.form.password,
            })
                .then((response) => {
                    location.reload();
                }).catch((error) => {
                    console.log(error);
                });
        },
        getProvinces() {
            axios.get('/v1/province')
                .then(function (response) {
                    this.provinces = response.data;
                }.bind(this));
        },

        getUsers() {
            axios.get('/users/list')
                .then(function (response) {
                    this.users = response.data;
                    console.log(this.users)
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
        this.getUsers()
        this.getProvinces()
    }
}

</script>