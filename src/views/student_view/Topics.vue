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

  <div class="card">
              <div class="card-header">
                <h3 class="card-title">sss</h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table id="example1" class="table table-bordered table-striped">
                  <thead>
                  <tr>
                    <th>Lesson Title</th>
                    <th>Lesson Unit</th>
                    <th>Action</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for=" item in topics" :key="item.topicId">
                    <td>{{ item.topic_title }}</td>
                    <td>{{ item.unit_title }}
                    </td>
                    <td><router-link to="#" class="btn btn-primary btn-sm">View Details</router-link></td>
                  </tr>
                  
                  </tbody>
                 
                </table>
              </div>
              <!-- /.card-body -->
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
      topic:null,
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
    // getTopic() {
    //   this.loading=true;
    //   axios.get(`/v1/student/subject/${this.$route.params.id}`).then(
    //     function (response) {
    //       this.topic = response.data;
    //       console.log(this.topic);

    //     }.bind(this)
    //   )
    //   .catch((error) => {
    //       console.log(error)
    //     })
    //     .finally(() => {
    //       this.loading = false;
    //     });
    // },
  },
  

  created() {
    this.getTopics();
    // this.getTopic();
  },
  };
</script>