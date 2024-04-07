<template>
  <div class="row">
    <div class="col-12">
      <!-- Custom Tabs -->
      <div class="card">
        <div class="card-header d-flex p-0">
          <h3 class="card-title p-3">
            Names: {{ lastname }} {{ firstname }} -
            <span v-if="loginType == 0"> Student</span>
          </h3>
          <ul class="nav nav-pills ml-auto p-2">
            <li class="nav-item">
              <a class="nav-link active" href="#tab_1" data-toggle="tab"
                >Tab 1</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#tab_2" data-toggle="tab">Tab 2</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#tab_3" data-toggle="tab">Tab 3</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
              >
                Dropdown <span class="caret"></span>
              </a>
              <div class="dropdown-menu">
                <a class="dropdown-item" tabindex="-1" href="#">Action</a>
                <a class="dropdown-item" tabindex="-1" href="#"
                  >Another action</a
                >
                <a class="dropdown-item" tabindex="-1" href="#"
                  >Something else here</a
                >
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" tabindex="-1" href="#"
                  >Separated link</a
                >
              </div>
            </li>
          </ul>
        </div>
        <!-- /.card-header -->
        <div class="card-body">
          <div class="tab-content">
            <div class="tab-pane active" id="tab_1">
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart.
              I am alone, and feel the charm of existence in this spot, which
              was created for the bliss of souls like mine. I am so happy, my
              dear friend, so absorbed in the exquisite sense of mere tranquil
              existence, that I neglect my talents. I should be incapable of
              drawing a single stroke at the present moment; and yet I feel that
              I never was a greater artist than now.
            </div>
            <!-- /.tab-pane -->
            <div class="tab-pane" id="tab_2">
              The European languages are members of the same family. Their
              separate existence is a myth. For science, music, sport, etc,
              Europe uses the same vocabulary. The languages only differ in
              their grammar, their pronunciation and their most common words.
              Everyone realizes why a new common language would be desirable:
              one could refuse to pay expensive translators. To achieve this, it
              would be necessary to have uniform grammar, pronunciation and more
              common words. If several languages coalesce, the grammar of the
              resulting language is more simple and regular than that of the
              individual languages.
            </div>
            <!-- /.tab-pane -->
            <div class="tab-pane" id="tab_3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
            <!-- /.tab-pane -->
          </div>
          <!-- /.tab-content -->
        </div>
        <!-- /.card-body -->
      </div>
      <!-- ./card -->
    </div>
    <!-- /.col -->
  </div>
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
      logged_user: null,
      firstname: null,
      lastname: null,
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
        this.logged_user = response.data;
        this.firstname = response.data.firstname;
        this.lastname = response.data.lastname;
        this.loginType = response.data.is_admin;
        //this.loginName = response.data.firstname;
      });
    },
  },
};
</script>