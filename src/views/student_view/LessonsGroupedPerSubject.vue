<template>
  <main>
    <div class="container-fluid px-4">
      <h1 class="mt-4">Lessons</h1>
      <section class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 col-sm-10">
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
                      <tr v-for="(item, index) in totalTopic" :key="item.id">
                        <td>{{ index + 1 }}</td>
                        <td>
                            <router-link
                            :to="{
                              name: 'subject.topics',
                              params: { id: item.id },
                            }"
                          >{{ item.subjName }}({{ item.name }})
                            </router-link>
                        </td>
                        <td style="width: 15%;">
                          
                            {{ item.total_topics }}

                        </td>
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
      totalTopic: [],
      loading: false,

    };
  },
  created() {

    this.total_topics();
  },
  methods: {
    total_topics() {
      axios.get("/v1/count/topics").then((response) => {
        this.totalTopic = response.data;
      });
    },
  },
};
</script>