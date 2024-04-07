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

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul
          class="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <li class="nav-item mt-4">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>Subjects</p>
            </a>
          </li>
          <li class="nav-item" v-for="item in topics" :key="item.id">
            <router-link :to="{ name: 'subject.topics' }" class="nav-link">
              <i class="nav-icon fas fa-th"></i>

              <small>{{ item.subjName }}({{ item.name }})</small>
              <span class="badge badge-info right ml-8">{{
                item.total_topics
              }}</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'subject.topics' }" class="nav-link">
              <i class="nav-icon fas fa-th"></i>
              <p>Widgets</p>
            </router-link>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
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