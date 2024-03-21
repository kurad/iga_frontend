<template>
    <main>
        <div class="container-fluid px-4">
            <h3 class="mt-4">Lesson Title: {{ topics.topic_title }}</h3>

            <div class="card mb-4 mt-4">
                <div class="card-body">
                    Instructional Objectives: <strong>
                        <p v-html="topics.instructional_objectives"></p>
                    </strong>
                </div>
            </div>
            <div class="card mb-4" id="lesson-content-div">
                <div class="card-header">
                    <i class="fab fa-buffer me-1"></i>
                    <strong> Lesson Content</strong>
                </div>
                <div class="card-body" v-if="topics.topic_content">
                    <p v-html="topics.topic_content"></p>
                </div>
                <div class="card-body" v-else>
                    No Content added
                    <br><br>
                </div>
                <div class="card-footer small text-muted" v-if="topics.topic_content">Last Updated:
                    {{ moment(topics.updated_at).format('DD-MM-YYYY') }}

                </div>
            </div>
            <div class="card mb-4" id="video-div">
                <div class="card-header">
                    <i class="fab fa-youtube me-1"></i>
                    Lesson Video
                </div>
                <div class="card-body " v-if="topics.video_link">
                    <center>
                        <iframe width="650" height="400" :src="topics.video_link"></iframe>
                    </center>
                </div>
                <div class="card-body" v-else>

                    No Video added
                    <br><br>
                </div>

            </div>

            <div class="row">
                <div class="col-lg-6" id="exercise-div">
                    <div class="card mb-4">
                        <div class="card-header">
                            <i class="fa fa-question me-1"></i>
                            Lesson Exercises
                        </div>
                        <div class="card-body" v-if="all_exercises.exercises">
                            <p v-html="all_exercises.exercises"></p>
                        </div>
                        <div class="card-body" v-else>

                            No Exercises added
                            <br><br>
                        </div>

                    </div>
                </div>

                <div class="col-lg-6" id="question-div">
                    <div class="card mb-4">
                        <div class="card-header">
                            <i class="fa fa-question me-1"></i>
                            <b>Do you any questions?</b>
                        </div>
                        <div class="card-body" v-if="questions">
                            <p v-html="questions.question"></p>
                        </div>
                        <div class="card-body" v-else>

                            No Question asked
                            <br><br>

                            <a href="#" @click.prevent="add_question">Ask Question </a>
                        </div>
                        <div class="card-footer small text-muted" v-if="questions">
                            <a href="#" class="btn btn-light btn-sm float-end" @click.prevent="edit_question"><i
                                    class="fas fa-pencil"></i></a>
                        </div>

                    </div>
                </div>

            </div>
        </div>

        <!-- ============================================================================== -->
        <div class="modal" tabindex="-1" id="add_question_modal">
            <div class="modal-dialog modal-lg">
                <form @submit.prevent="storeQuestion()">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Ask Question</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">

                            <div class="md-form mt-3">
                                <input type="hidden" v-model="topics.id" class="form-control">
                                <label class="mb-3">Write your Question(s)</label>
                                <QuillEditor theme="snow" v-model:content="form.question" content-type="html" />
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

        <!-- ============================================================================== -->
        <div class="modal" tabindex="-1" id="edit_question_modal">
            <div class="modal-dialog">
                <form @submit.prevent="updateQuestion()">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Ask Question</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">

                            <div class="md-form mt-3">
                                <input type="text" class="form-control" v-model="questions.id">
                                <label class="mb-3">Write your question(s)</label>
                                <QuillEditor theme="snow" v-model:content="questions.question" content-type="html" />
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
    </main>
</template>

<script>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import axios from 'axios';
import $ from 'jquery'
import moment from 'moment';
export default {
    components: {
        QuillEditor,
    },
    data() {
        return {
            moment: moment,
            topics: [],
            topic: 0,
            all_exercises: [],
            exercise: 0,
            user: '',

            questions: [],
            question: 0,

            form: {
                question: null,
            },
        }
    },
    methods: {
        add_question() {
            $('#add_question_modal').modal('show');
        },
        edit_question() {

            $('#edit_question_modal').modal('show');
        },

        getTopics() {
            axios.get(`/topic/${this.$route.params.id}`).then(function (response) {
                this.topics = response.data
                console.log(this.topics)
            }.bind(this));
        },

        getExercises() {
            axios.get(`/topic/exercises/${this.$route.params.id}`).then(function (response) {
                this.all_exercises = response.data
                console.log(this.all_exercises)
            }.bind(this));
        },

        getQuestions() {
            axios.get(`/topic/question/${this.$route.params.id}`).then(function (response) {
                this.questions = response.data
                console.log(this.questions)
            }.bind(this));
        },

        async storeQuestion() {
            await axios.post('/topic/question', {
                question: this.form.question,
                topic_id: this.topics.id,
                user_id: this.user.id
            })
                .then((response) => {
                    this.questions.unshift(response.data);
                    $('#add_question_modal').modal('hide');
                    location.reload();
                }).catch((error) => {
                    console.log(error);
                }).finally(() => {
                    $('#add_question_modal').modal('hide');
                });
        },

        async updateQuestion() {

            await axios.put('/topic/question/' + this.questions.id, this.questions)
                .then((response) => {
                    this.question.unshift(response.data);
                    $('#edit_question_modal').modal('hide');
                    $('#question-div').reload();
                }).catch((error) => {
                    console.log(error);
                }).finally(() => {
                    $('#edit_question_modal').modal('hide');
                });
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
        this.getTopics()
        this.getExercises()
        this.userProfile()
        this.getQuestions()
    }
}

</script>