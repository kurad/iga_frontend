<template>
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="info">
          <a href="#" class="d-block">iGA APP</a>
        </div>
      </div>
    </div>
    <!-- /.sidebar -->
  </aside>
</template>
<script>
import axios from "axios";
export default {
  name: "Aside",
  data() {
    return {
      subjects: [],
      topics: [],
    };
  },
  created() {
    this.get_subjects();
    this.total_topics();
  },
  methods: {
    get_subjects() {
      axios.get("/subjects").then((response) => {
        this.subjects = response.data;
      });
    },
    total_topics() {
      axios.get("/v1/count/topics").then((response) => {
        this.topics = response.data;
      });
    },
  },
};
</script>