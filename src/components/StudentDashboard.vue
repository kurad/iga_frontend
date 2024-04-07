<template>
  <main>
    <div class="container-fluid px-4">
      <h1 class="mt-4">Dashboard</h1>

      <div class="row">
        <div class="col-xl-3 col-md-6">
          <div class="card bg-primary text-white mb-4">
            <div class="card-body">Schools</div>
            <div
              class="card-footer d-flex align-items-center justify-content-between"
            >
              {{ schools }}
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-md-6">
          <div class="card bg-warning text-white mb-4">
            <div class="card-body">Subjects</div>
            <div
              class="card-footer d-flex align-items-center justify-content-between"
            >
              {{ subjects }}
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-md-6">
          <div class="card bg-success text-white mb-4">
            <div class="card-body">Lessons</div>
            <div
              class="card-footer d-flex align-items-center justify-content-between"
            >
              {{ lessons }}
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-md-6">
          <div class="card bg-danger text-white mb-4">
            <div class="card-body">Students</div>
            <div
              class="card-footer d-flex align-items-center justify-content-between"
            >
              {{ students }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <footer class="py-4 bg-light mt-auto">
    <div class="container-fluid px-4">
      <div class="d-flex align-items-center justify-content-between small">
        <div class="text-muted">Copyright &copy; Your Website 2022</div>
      </div>
    </div>
  </footer>
</template>
<script>
import axios from "axios";
export default {
  name: "Dashboard Admin",
  data() {
    return {
      schools: [],
      subjects: [],
      lessons: [],
      students: [],
      user: null,
      loginType: null,
    };
  },
  created() {
    this.countSchools();
    this.countSubjects();
    this.countLessons();
    this.countStudents();
    this.userProfile();
  },
  methods: {
    async countSchools() {
      await axios.get("/v1/count/school").then(
        function (response) {
          this.schools = response.data;
          //   console.log(this.schools);
        }.bind(this)
      );
    },
    async countSubjects() {
      await axios.get("/v1/count/subject").then(
        function (response) {
          this.subjects = response.data;
        }.bind(this)
      );
    },
    async countLessons() {
      await axios.get("/v1/count/lessons").then(
        function (response) {
          this.lessons = response.data;
        }.bind(this)
      );
    },
    async countStudents() {
      await axios.get("/v1/count/student").then(
        function (response) {
          this.students = response.data;
        }.bind(this)
      );
    },
    async userProfile() {
      axios.defaults.headers.common["Content-Type"] = "application/json";
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + localStorage.getItem("token");

      axios.get("/profile").then((response) => {
        this.user = response.data;
        this.loginType = response.data.is_admin;
        //this.loginName = response.data.firstname;
      });
    },
  },
};
</script>