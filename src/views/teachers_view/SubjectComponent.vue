<template>
    <main>
        <div class="container-fluid px-4">
            <h1 class="mt-4 mb-4">Subjects</h1>
            <a href="#" class="btn btn-primary btn-sm mb-3" @click.prevent="newSubject"><i class="fa fa-plus"></i> New
                Subject</a>
            <div class="card mb-4">
                <div class="card-header">
                    <i class="fas fa-table me-1"></i>
                    List of Subjects
                </div>
                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th># </th>
                                <th>Subject Name</th>
                                <th>Level</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in subjects" :key="item.id">
                                <td>{{ index + 1 }}</td>
                                <td>{{ item.subjName }}</td>
                                <td>{{ item.name }}</td>
                                <td>
                                    <router-link class="btn btn-primary btn-sm"
                                        :to="{ name: 'teacher.units', params: { id: item.id } }">View Units</router-link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <!-- ============================================================================== -->

            <div class="modal" tabindex="-1" id="new_subject_modal">
                <div v-for="(v, k) in errors" :key="k">
                    <p v-for="error in v" :key="error" class="text-danger">
                        {{ error }}
                    </p>
                </div>
                <div class="modal-dialog">
                    <form @submit.prevent="storeSubject(form)">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Register a New Subject</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <label>Subject Name</label>
                                <input type="text" class="form-control" v-model="form.name">
                                <span class="text-danger" v-if="errors?.name">{{ errors.name[0] }}</span>
                            </div>

                            <div class="modal-body">
                                <label>Level</label>
                                <select class="form-control" v-model="form.level_id">
                                    <option v-for="item in levels" :key="item.id" :value="item.id">{{
                                        item.name }}</option>
                                </select>
                            </div>

                            <div class="modal-footer">
                                <button type="submit" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <!-- ============================================================================== -->
            <div class="modal" tabindex="-1" id="new_unit_modal">

                <div class="modal-dialog">
                    <form @submit.prevent="storeUnit(form)">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Register a New Unit</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <input type="text" v-model="subjects.id" class="form-control">
                                <label>Unit Title</label>
                                <input type="text" class="form-control" v-model="form.unit_title">
                                <!-- <p v-if="errors.unit_title" class="text-danger">{{ errors.unit_title }}</p> -->
                            </div>
                            <div class="modal-body">
                                <label>Key Unit Competence</label>
                                <textarea class="form-control" v-model="form.key_unit_competence"></textarea>
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
export default {
    data() {
        return {
            subjects: [],
            levels: [],
            user: '',
            is_admin: '',

            errors: null,

            form: {
                name: null,
                level_id: null,
                user_id: null
            },
        }
    },
    methods: {

        async getSubjects() {
            let response = await axios.get('/teacher/subjects');
            this.subjects = response.data;
            console.log(this.subjects);
        },

        newSubject() {
            $('#new_subject_modal').modal('show');
        },
        async storeSubject(form) {
            await axios.post('/subjects', {
                name: this.form.name,
                level_id: this.form.level_id,
                user_id: this.user.id
            })
                .then(response => {
                    $('#new_subject_modal').modal('hide');
                    this.subjects.unshift(response.data);
                    // this.isLoading(true)
                    location.reload()
                }).catch(error => {
                    if (error.response?.data) {
                        $('#new_subject_modal').modal('show');
                        this.errors = error.response.data.errors
                        console.log(this.errors);
                    }
                }).finally(() => {
                    $('#new_subject_modal').modal('hide');
                    // this.errors = e.data.errors
                });
        },

        async getLevels() {
            let response = await axios.get('/v1/levels');
            this.levels = response.data;
            console.log(this.levels);
        },

        async userProfile() {
            await axios.get('/user')
                .then(response => {
                    this.user = response.data
                    // console.log(this.user)
                })
        }
    },

    created() {

        this.getLevels()
        this.getSubjects()
        this.userProfile()
    }
}

</script>