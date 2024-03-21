<template>
    <main>
        <div class="container-fluid px-4">
            <h1 class="mt-4">Subjects</h1>
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
                                        :to="{ name: 'student.units', params: { id: item.id } }">View</router-link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <!-- ============================================================================== -->

            <div class="modal" tabindex="-1" id="new_subject_modal">
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

            form: {
                name: null,
                level_id: null,
                user_id: null
            },
        }
    },
    methods: {

        async getSubjects() {
            let response = await axios.get('/subjects');
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
                .then((response) => {
                    $('#new_subject_modal').modal('hide');
                    this.subjects.unshift(response.data);
                    // this.isLoading(true)
                    location.reload()
                }).catch((error) => {
                    console.log(error);
                }).finally(() => {
                    $('#new_subject_modal').modal('hide');

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