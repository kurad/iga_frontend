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
    <div class="col-md-4" v-for="item in topics" :key="item.id">
      <div class="card card-success " style="height: 300px;">
        <div class="card-header">
          <h6 class="card-title">
            Title: <br /><small>{{ item.topic_title }}</small>
          </h6>
          <div class="card-tools">
            <button
              type="button"
              class="btn btn-tool"
              data-card-widget="collapse"
            >
              <i class="fas fa-plus"></i>
            </button>
          </div>
          <!-- /.card-tools -->
        </div>
        <!-- /.card-header -->
        <div class="card-body">
        <p v-html='item.instructional_objectives.substring(0,70) + " ..."' ></p>
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
  <router-link :to="{ name: 'student.dashboard' }" class="btn btn-primary">
    Back
  </router-link>
</template>
<script>
import axios from "axios";
export default {
  components: {
    name: "Topics",
  },
  data() {
    return {
      topics: [],
      topic_id: null,
      loading:false,
    };
  },

  methods: {
    getTopics() {
      this.loading=true;
      axios.get(`/v1/count/topics/${this.$route.params.id}`).then(
        function (response) {
          this.topics = response.data;
          console.log(this.topics);

        }.bind(this)
      )
      .catch((error) => {
          console.log(error)
        })
        .finally(() => {
          this.loading = false;
        });
    },
    async findTopicId() {
    await axios.get(`/v1/topic/${this.route.params.id}`).then((response) => {
      this.topic_id = response.data;
      console.log(this.topic_id)
    });
  },
  async enroll(){
    this.topic_id = this.topics;
    console.log(this.topic_id);
  }
  },
  


  // async enroll() {
  //   await axios
  //     .post("/v1/enrollment", {
  //       topic_id: this.topic_id.id,
  //     })
  //     .then((response) => {
  //       location.reload();
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },

  created() {
    this.getTopics();
    this.findTopicId();
  },
  };
</script>