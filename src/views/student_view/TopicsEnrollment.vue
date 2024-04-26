<template>
  <section class="content-header">
    <div class="container-fluid">
      <div class="row mb-3">
        <div class="col-sm-6">
          <h1>Lessons</h1>
        </div>
        <div class="col-sm-6">
          <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item active">Lessons</li>
          </ol>
        </div>
      </div>
    </div>
    <!-- /.container-fluid -->
  </section>

  <div class="row">
    <div v-if="loading">Loading...</div>
    <div class="col-md-7">
      <div class="card card-success ">
        <div class="card-header">
          <h6 class="card-title">
            Title: <br /><small>{{ topic.topic_title }}</small>
          </h6>
        </div>
        <!-- /.card-header -->
        <div class="card-body">
        <p v-html='topic.instructional_objectives' ></p>
        </div>
        <!-- /.card-body -->
        <div class="card-footer">
          <button class="btn btn-primary btn-sm mr-2" @click.prevent="enroll()" >
            Enroll
          </button>
        </div>
      </div>
    </div>
  </div>
  <button :to="{ name: 'student.dashboard' }" class="btn btn-primary">
    Back
  </button>
</template>
<script>
import axios from "axios";
export default {
  components: {
    name: "Topic Enrollment",
  },
  data() {
    return {
      topic: null,
      user:"",
      loading:false,
    };
  },

  methods: {
    async findTopicId() {
      this.loading=true;
    await axios.get(`/v1/student/topic/${this.$route.params.id}`).then((response) => {
      this.topic = response.data;
      console.log(this.topic);
    })
    .catch((error) => {
          console.log(error)
        })
        .finally(() => {
          this.loading = false;
        });
  },
  async userProfile() {
      await axios.get("/user").then((response) => {
        this.user = response.data;
        // console.log(this.user)
      });
    },
  async enroll() {
    await axios
      .post("/v1/enrollments", {
        topic_id: this.topic.id,
        user_id: this.user,
      })
      .then((response) => {
        this.$router.push('/student/dashboard');
      })
      .catch((error) => {
        console.log(error);
      });
  },
  },
  
  created() {
    this.userProfile();
    this.findTopicId();
  },
  };
</script>