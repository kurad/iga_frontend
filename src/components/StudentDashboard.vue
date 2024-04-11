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
      <section class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 col-sm-4">
              <div class="card card-primary">
                <div class="card-header p-2 border-bottom-0">
                  <h5>List of Subjects</h5><span >Select a lesson to Enroll</span>
                </div>
                <div class="card-body">
                  <table class="table table-bordered table-sm">
                    <thead>
                      <th>#</th>
                      <th>Subject Name</th>
                      <th>No of Lessons</th>
                    </thead>
                    <tbody>
                      <tr v-for="(item, index) in totalTopic" :key="index">
                        <td>{{ index + 1 }}</td>
                        <td>{{ item.subjName }}</td>
                        <td style="width: 15px">
                          <router-link
                            :to="{
                              name: 'subject.topics',
                              params: { id: item.id },
                            }"
                          >
                            {{ item.total_topics }}
                          </router-link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div
                    v-for="(item, index) in totalTopic"
                    :key="index"
                    v-show="activateTab === index"
                  >
                    {{ item.topic_title }}
                  </div>
                </div>
                <!-- /.card -->
              </div>
            </div>
            <div class="col-12 col-sm-8">
              <div class="card card-success">
                <div class="card-header p-2 border-bottom-0">
                  <h4>My Enrollments</h4>
                </div>
                <div class="card-body">
                  <table class="table table-bordered table-sm">
                    <thead>
                      <th>#</th>
                      <th>Subject Name</th>
                      <th>Lesson Title</th>
                      <th>Unit</th>
                      <th>Action</th>
                    </thead>
                    <tbody v-if="enrollments.length>0">
                      <tr v-for="(item, index) in enrollments" :key="index">
                        <td>{{ index + 1 }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.topic_title }}</td>
                        <td>{{ item.unit_title }}</td>
                        <td>
                          <router-link
                            :to="{
                              name: 'subject.topics',
                              params: { id: item.id },
                            }"
                          >
                            Go to Course
                          </router-link>
                        </td>
                      </tr>
                    </tbody>
                    <tbody v-else>
                      <tr >
                        <td colspan="5" class="text-center fw-bold">No Enrollments found</td>
                        
                      </tr>
                    </tbody>
                  </table>
                 
                </div>
                <!-- /.card -->
              </div>
            </div>
          </div>
        </div>
        <!-- /.container-fluid -->
      </section>
    </div>
  </main>
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
      allSubjects: [],
      totalTopic: [],
      activeTab: 0,
      loading: false,
      enrollments:[],
    };
  },
  created() {
    this.countSchools();
    this.countSubjects();
    this.countLessons();
    this.countStudents();
    this.userProfile();
    this.get_subjects();
    this.total_topics();
    this.allEnrollment();
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
    get_subjects() {
      axios.get("/subjects").then((response) => {
        this.allSubjects = response.data;
      });
    },
    total_topics() {
      axios.get("/v1/count/topics").then((response) => {
        this.totalTopic = response.data;
      });
    },
    activateTab(index) {
      this.activeTab = index;
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
    async allEnrollment(){
      this.loading = true;
      await axios.get('v1/enrollments').then((response)=>{
        this.enrollments = response.data;
      })
      .catch((error) =>{
        console.log(error);
      })
      .finally(() =>{
        this.loading = false;
      })
    }
  },
};
</script>