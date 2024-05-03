<template>
  <main>
    <div class="container-fluid px-4">
      <h1 class="mt-2 mb-3">Lessons</h1>
    </div>

    <div class="container-fluid px-4" id="list_of_topics">
      <div class="card mb-4">
        <div class="card-header">
          <i class="fas fa-table me-1"></i>
          List of Lessons
          <a
            href="#"
            class="btn btn-primary btn-sm mb-3 float-end"
            @click.prevent="newTopic"
            ><i class="fa fa-plus"></i> New Lesson</a
          >
        </div>
        <div class="card-body">
          <table class="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Topic Title</th>
                <th>Instructional objective</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in teacherTopics" :key="item.id">
                <td>{{ index + 1 }}</td>
                <td>{{ item.topic_title }}</td>
                <td>
                  <p v-html="item.instructional_objectives"></p>
                </td>

                <td>
                  <router-link
                    class="btn btn-outline-primary btn-sm align-middle"
                    :to="{
                      name: 'teacher.lesson.details',
                      params: { id: item.id },
                    }"
                    >Lesson Resources</router-link
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </main>
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
                  <div class="row">
                    <div class="col-sm-4">
                      <!-- text input -->
                      <div class="form-group">
                        <label>Select Level</label>
                        <select class="form-control" v-model="level" @change="getSubjects()">
                          <option v-for="level in levels" :key="level.id" :value="level.id">
                            {{ level.name }}
                          </option>
                        </select>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="form-group">
                        <label>Select Subject</label>
                        <select class="form-control" v-model="subject" @change="getUnits()" >
                          <option v-for="subj in subjects" :key="subj.id" :value="subj.id">
                            {{ subj.name }}
                          </option>
                        </select>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="form-group">
                        <label>Select Unit</label>
                        <select class="form-control" v-model="unit">
                          <option v-for="unit in units" :key="unit.id" :value="unit.id">{{ unit.unit_title }}</option>
                        </select>
                      </div>
                    </div>
                  </div>
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
</template>
<script>
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import axios from "axios";
import $ from "jquery";
export default {
  components: {
    QuillEditor,
  },
  data() {
    return {
      schools: [],
      level: 0,
      levels: [],
      subjects: [],
      subject: 0,
      units: [],
      unit: 0,
      topics: [],
      topic: 0,
      teacherTopics: [],
      teacherTopic: 0,
      form: {
        topic_title: null,
        instructional_objectives: null,
        // topic_content: null,
        unit_id: this.unit,
      },
    };
  },
  methods: {
    async getSchools() {
      let response = await axios.get("/v1/school-info");
      this.schools = response.data;
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
    getLevels() {
      axios.get("/v1/dropdown/levels").then(
        function (response) {
          this.levels = response.data;
        }.bind(this)
      );
    },

    getSubjects() {
      axios
        .get("/v1/dropdown/subjects", {
          params: {
            level_id: this.level,
          },
        })
        .then(
          function (response) {
            this.subjects = response.data;
          }.bind(this)
        );
    },
    getUnits() {
      axios
        .get("/v1/dropdown/units", {
          params: {
            subject_id: this.subject,
          },
        })
        .then(
          function (response) {
            this.units = response.data;
          }.bind(this)
        );
    },

    getTopics() {
      axios
        .get("/v1/unit/topics", {
          params: {
            unit_id: this.unit,
          },
        })
        .then(
          function (response) {
            this.topics = response.data;
          }.bind(this)
        );
    },

    async getTeacherTopics() {
      await axios.get("/v1/teacher/topics").then((response) => {
        this.teacherTopics = response.data;
      });
    },
  },

  created() {
    this.getSchools();
    this.getTeacherTopics();
    this.getLevels();
  },
};
</script>