<template>
    <main>
        <div class="container-fluid px-4">
            <h1 class="mt-4 mb-4">Units</h1>

            <a href="#" class="btn btn-primary btn-sm mb-3" @click.prevent="newUnit"><i class="fa fa-plus"></i> Add
                Unit</a>
                <a
            href="#"
            class="btn btn-primary btn-sm mb-3 float-end"
            @click.prevent="newTopic"
            ><i class="fa fa-plus"></i> New Lesson</a
          >
            <div class="card mb-4" id="list_of_units">
                <div class="card-header">
                    <i class="fas fa-table me-1"></i>
                    List of Units for <b>{{ subject.name }} {{ subject.levelName }}</b>
                </div>
                <div class="card-body">
                    <table class="table table-sm" v-if="units.length > 0">
                        <thead>
                            <tr>
                                <th># </th>
                                <th>Unit Title</th>
                                <th>Competence</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in units" :key="item.id">
                                <td style="width: 20px;">{{ index + 1 }}</td>
                                <td style="width: 200px;">{{ item.unit_title }}</td>
                                <td style="width: 550px;">
                                    <p v-html="item.key_unit_competence"></p>
                                </td>
                                <td style="width: 200px;">
                                    <router-link class="btn btn-dark btn-sm me-2" :to="{ name: 'teacher.units' }">
                                        Details</router-link>
                                    <!-- <router-link class="btn btn-primary btn-sm" :to="{ name: 'teacher.lessons' }">
                                        Lessons</router-link> -->
                                </td>

                            </tr>
                        </tbody>
                    </table>

                    <table class="table" v-else>

                        <tbody>
                            <tr>
                                <td colspan="3">
                                    <center>Units not Found</center>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <!-- ============================================================================== -->
            <div class="modal" tabindex="-1" id="new_unit_modal">
                <div class="modal-dialog">
                    <form @submit.prevent="storeUnit(form)">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Register New Unit</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <input type="hidden" v-model="subject.id" class="form-control">
                                <label>Unit Title</label>
                                <input type="text" class="form-control" v-model="form.unit_title">
                            </div>
                            <div class="modal-body">
                                <label>Key Unit Competence</label>
                                <QuillEditor theme="snow" v-model:content="form.key_unit_competence" content-type="html" />

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
            <div class="modal" tabindex="-1" id="edit_unit_modal">
                <div class="modal-dialog">
                    <form @submit.prevent="storeUnit(form)">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Register New Unit</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <input type="hidden" v-model="subject.id" class="form-control">
                                <label>Unit Title</label>
                                <input type="text" class="form-control" v-model="form.unit_title">
                            </div>
                            <div class="modal-body">
                                <label>Key Unit Competence</label>
                                <QuillEditor theme="snow" v-model:content="form.key_unit_competence" content-type="html" />

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
   <div class="modal" tabindex="-1" id="new_topic_modal">
        <div class="modal-dialog modal-lg">
          <form @submit.prevent="storeTopic(form)">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Create New Lesson</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div class="md-form mb-3">
                  <input type="hidden" class="form-control" v-model="unit" />
                  <label>Lesson Title</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.topic_title"
                  />
                </div>

                <div class="md-form mb3">
                  <label>Instructional Objectives</label>
                  <QuillEditor
                    theme="snow"
                    v-model:content="form.instructional_objectives"
                    content-type="html"
                  />
                </div>

                <!-- <div class="md-form mt-3">
                                    <label>Content</label>
                                    <QuillEditor theme="snow" v-model:content="form.topic_content" content-type="html" />
                                </div> -->
              </div>
              <div class="modal-footer">
                <button
                  type="submit"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" class="btn btn-primary">Save</button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <!-- ===============================================================================-->

            <router-link :to="{ name: 'subjects' }" class="btn btn-primary">Back</router-link>
        </div>
    </main>
</template>
<script>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import axios from 'axios';
import $ from 'jquery'
export default {
    components: {
        QuillEditor,
    },
    props: ['subject_id'],
    data() {
        return {
            units: [],
            subject: [],

            form: {
                subject_id: null,
                unit_title: null,
                key_unit_competence: null,
            },
        }
    },
    methods: {

        newUnit() {
            $('#new_unit_modal').modal('show');
        },
        async storeUnit(form) {
            await axios.post('/units', {
                unit_title: this.form.unit_title,
                key_unit_competence: this.form.key_unit_competence,
                subject_id: this.subject.id
            })
                .then((response) => {
                    this.units.unshift(response.data);
                    $('#new_unit_modal').modal('hide');
                    // location.reload()
                    $('list_of_units').reload()
                }).catch((error) => {
                    console.log(error);
                }).finally(() => {
                    $('#new_unit_modal').modal('hide');
                });
        },
        async getUnits() {

            await axios.get(`/subjects/${this.$route.params.id}`)
                .then((res) => {
                    this.units = res.data
                }).catch(error => {
                    console.log(error)
                    this.units = []
                })
        },

        async getUnitSubject() {

            await axios.get(`/units/subjects/${this.$route.params.id}`)
                .then((res) => {
                    this.subject = res.data
                }).catch(error => {
                    console.log(error)
                    this.subject = []
                })
        },
        newTopic() {
      $("#new_topic_modal").modal("show");
    },
    async storeTopic(form) {
      await axios
        .post("/topics", {
          topic_title: this.form.topic_title,
          instructional_objectives: this.form.instructional_objectives,
          // topic_content: this.form.topic_content,
          unit_id: this.unit,
        })
        .then((response) => {
          this.topics.unshift(response.data);
          $("#new_topic_modal").modal("hide");
          // this.isLoading(true)
          location.reload();
          $("#list_of_topics").reload();
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          $("#new_topic_modal").modal("hide");
        });
    },
    },
    mounted() {
        this.getUnits()
        this.getUnitSubject()
    }
}

</script>