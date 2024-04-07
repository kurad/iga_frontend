<template>
  <main>
    <div class="container-fluid px-4">
      <h3 class="mt-4">Lesson Title: {{ topics.topic_title }}</h3>

      <div class="card mb-4 mt-4" id="objective_div">
        <div class="card-body">
          Instructional Objectives:
          <strong>
            <p v-html="topics.instructional_objectives"></p>
          </strong>
        </div>
        <div class="card-footer small text-muted">
          <a
            href="#"
            class="btn btn-success btn-sm float-start"
            @click.prevent="edit_objective"
            ><i class="fas fa-pencil"></i> <b>Edit Objectives</b></a
          >
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
          <br /><br />
          <a href="#" @click.prevent="add_content">Add Lesson Content </a>
        </div>
        <div class="card-footer small text-muted" v-if="topics.topic_content">
          Last Updated:
          {{ moment(topics.updated_at).format("DD-MM-YYYY") }}
          <a
            href="#"
            class="btn btn-success btn-sm float-end"
            @click.prevent="edit_content"
            ><i class="fas fa-pencil"></i> <b>Edit Content</b></a
          >
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6" id="video-div">
          <div class="card mb-4">
            <div class="card-header">
              <i class="fab fa-youtube me-1"></i>
              Lesson Video
            </div>
            <div class="card-body" v-if="topics.video_link">
              <iframe
                width="450"
                height="350"
                :src="topics.video_link"
              ></iframe>
            </div>
            <div class="card-body" v-else>
              No Video added
              <br /><br />
              <a href="#" @click.prevent="add_video_link">Add YouTube Link </a>
            </div>
            <div class="card-footer small text-muted" v-if="topics.video_link">
              <a
                href="#"
                class="btn btn-success btn-sm"
                @click.prevent="edit_video_link"
                ><i class="fas fa-pencil"></i><b> Edit Video Link</b></a
              >
            </div>
          </div>
        </div>

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
              <br /><br />
              <a href="#" @click.prevent="add_exercise">Add Exercises </a>
            </div>
            <div
              class="card-footer small text-muted"
              v-if="all_exercises.exercises"
            >
              <a
                href="#"
                class="btn btn-success btn-sm"
                @click.prevent="edit_exercise"
                ><i class="fas fa-pencil"></i><b> Edit Exercise(s)</b></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ============================================================================== -->
    <div class="modal" tabindex="-1" id="add_content_modal">
      <div class="modal-dialog modal-lg modal-dialog-scrollable">
        <form @submit.prevent="storeTopicContent(form)">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Lesson Content</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="md-form mt-3">
                <label class="mb-3">Write Content / Copy and Paste</label>
                <QuillEditor
                  theme="snow"
                  v-model:content="form.topic_content"
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

    <!-- ============================================================================== -->
    <div class="modal" tabindex="-1" id="edit_objectives_modal">
      <div class="modal-dialog modal-lg modal-dialog-scrollable">
        <form @submit.prevent="updateObjective()">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Edit Instructional Objectives</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="md-form mt-3">
                <input type="hidden" v-model="topics.id" class="form-control" />
                <label class="mb-3">Instructional Objectives</label>
                <QuillEditor
                  theme="snow"
                  v-model:content="topics.instructional_objectives"
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

    <!-- ============================================================================== -->
    <div class="modal" tabindex="-1" id="edit_content_modal">
      <div class="modal-dialog modal-lg modal-dialog-scrollable">
        <form @submit.prevent="updateTopicContent()">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Lesson Content</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="md-form mt-3">
                <label class="mb-3">Write Content / Copy and Paste</label>
                <QuillEditor
                  theme="snow"
                  v-model:content="topics.topic_content"
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

    <!-- ============================================================================== -->
    <div class="modal" tabindex="-1" id="add_video_link_modal">
      <div class="modal-dialog modal-lg">
        <form @submit.prevent="storeTopicVideoLink()">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Video Link</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="md-form mt-3">
                <label class="mb-3">Copy and Paste Video Link</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="videoForm.video_link"
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

    <!-- ============================================================================== -->
    <div class="modal" tabindex="-1" id="edit_video_link_modal">
      <div class="modal-dialog">
        <form @submit.prevent="updateTopicVideoLink()">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Update Video Link</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="md-form mt-3">
                <label class="mb-3">Copy and Paste Video Link</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="topics.video_link"
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

    <!-- ============================================================================== -->
    <div class="modal" tabindex="-1" id="add_exercise_modal">
      <div class="modal-dialog modal-lg">
        <form @submit.prevent="storeExercise()">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Lesson Content</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="md-form mt-3">
                <input type="hidden" v-model="topics.id" class="form-control" />
                <label class="mb-3">Write Content / Copy and Paste</label>
                <QuillEditor
                  theme="snow"
                  v-model:content="exerciseForm.exercises"
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
    <!-- ============================================================================== -->
    <div class="modal" tabindex="-1" id="edit_exercise_modal">
      <div class="modal-dialog">
        <form @submit.prevent="updateExercise()">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Lesson Content</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="md-form mt-3">
                <input
                  type="hidden"
                  class="form-control"
                  v-model="all_exercises.id"
                />
                <label class="mb-3">Write Exercises / Copy and Paste</label>
                <QuillEditor
                  theme="snow"
                  v-model:content="all_exercises.exercises"
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
  </main>
</template>

<script>
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import axios from "axios";
import $ from "jquery";
import moment from "moment";
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
      form: {
        topic_content: null,
      },

      videoForm: {
        video_link: null,
      },
      exerciseForm: {
        exercises: null,
      },
    };
  },
  methods: {
    add_content() {
      $("#add_content_modal").modal("show");
    },

    add_exercise() {
      $("#add_exercise_modal").modal("show");
    },
    edit_exercise() {
      $("#edit_exercise_modal").modal("show");
    },

    edit_objective() {
      $("#edit_objectives_modal").modal("show");
    },
    add_video_link() {
      $("#add_video_link_modal").modal("show");
    },

    edit_content() {
      $("#edit_content_modal").modal("show");
    },
    edit_video_link() {
      $("#edit_video_link_modal").modal("show");
    },

    getTopics() {
      axios.get(`/topic/${this.$route.params.id}`).then(
        function (response) {
          NProgress.start();
          this.topics = response.data;
          // console.log(this.topics)
          NProgress.done();
        }.bind(this)
      );
    },

    getExercises() {
      axios.get(`/topic/exercises/${this.$route.params.id}`).then(
        function (response) {
          this.all_exercises = response.data;
          // console.log(this.all_exercises)
        }.bind(this)
      );
    },

    async storeTopicContent(form) {
      await axios
        .put(`/topic/content/${this.$route.params.id}`, {
          topic_content: this.form.topic_content,
        })
        .then((response) => {
          this.topics.unshift(response.data);
          $("#add_content_modal").modal("hide");
          location.reload();
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          $("#add_content_modal").modal("hide");
        });
    },

    async storeExercise() {
      await axios
        .post("/topic/exercise", {
          exercises: this.exerciseForm.exercises,
          topic_id: this.topics.id,
        })
        .then((response) => {
          this.exercises.unshift(response.data);
          $("#add_exercise_modal").modal("hide");
          location.reload();
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          $("#add_exercise_modal").modal("hide");
        });
    },

    async storeTopicVideoLink() {
      await axios
        .put(`/topic/video/${this.$route.params.id}`, {
          video_link: this.videoForm.video_link,
        })
        .then((response) => {
          this.topics.unshift(response.data);
          $("#add_video_link_modal").modal("hide");
          location.reload();
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          $("#add_video_link_modal").modal("hide");
        });
    },

    async updateTopicVideoLink() {
      await axios
        .put(`/topic/video/${this.$route.params.id}`, this.topics)
        .then((response) => {
          this.topics.unshift(response.data);
          $("#edit_video_link_modal").modal("hide");
          $("#video-div").reload();
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          $("#edit_video_link_modal").modal("hide");
        });
    },
    async updateTopicContent() {
      await axios
        .put(`/topic/content/${this.$route.params.id}`, this.topics)
        .then((response) => {
          this.topics.unshift(response.data);
          $("#edit_content_modal").modal("hide");
          $("#lesson-content-div").reload();
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          $("#edit_content_modal").modal("hide");
        });
    },

    async updateExercise() {
      await axios
        .put("/topic/exercise/" + this.all_exercises.id, this.all_exercises)
        .then((response) => {
          this.all_exercises.unshift(response.data);
          $("#edit_exercise_modal").modal("hide");
          $("#exercise-div").reload();
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          $("#edit_exercise_modal").modal("hide");
        });
    },

    async updateObjective() {
      await axios
        .put("/topic/objective/" + this.topics.id, this.topics)
        .then((response) => {
          this.topics.unshift(response.data);
          $("#edit_objectives_modal").modal("hide");
          $("#objective_div").reload();
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          $("#edit_objectives_modal").modal("hide");
        });
    },
  },

  created() {
    this.getTopics();
    this.getExercises();
  },
};
</script>