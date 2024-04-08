<template>
  <section class="content-header">
    <div class="container-fluid">
      <div class="row mb-3">
        <div class="col-sm-6">
          <h1>Timeline</h1>
        </div>
        <div class="col-sm-6">
          <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item active">Timeline</li>
          </ol>
        </div>
      </div>
    </div>
    <!-- /.container-fluid -->
  </section>

  <!-- Main content -->
  <section class="content">
    <div class="container-fluid">
      <!-- Timelime example  -->
      <div class="row">
        <div class="col-md-4" v-for="item in topics" :key="item.id">
          <!-- The time line -->
          <div class="timeline">
            <div>
              <div class="timeline-item">
                <h3 class="timeline-header">
                  {{ item.topic_title }}
                </h3>

                <div class="timeline-body">
                  Etsy doostang zoodles disqus groupon greplin oooj voxy
                  zoodles, weebly ning heekya handango imeem plugg dopplr
                  jibjab, movity jajah plickers sifteo edmodo ifttt zimbra.
                  Babblely odeo kaboodle quora plaxo ideeli hulu weebly
                  balihoo...
                </div>
                <div class="timeline-footer">
                  <a class="btn btn-primary btn-sm">Read more</a>
                  <a class="btn btn-danger btn-sm">Delete</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /.col -->
      </div>
    </div>
    <!-- /.timeline -->
  </section>
  <router-link :to="{ name: 'student.dashboard' }" class="btn btn-primary">
    Back
  </router-link>
  <!-- /.content -->
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
    };
  },

  methods: {
    getTopics() {
      axios.get(`/v1/count/topics/${this.$route.params.id}`).then(
        function (response) {
          this.topics = response.data;
          console.log(this.topics);
        }.bind(this)
      );
    },
  },
  created() {
    this.getTopics();
  },
};
</script>