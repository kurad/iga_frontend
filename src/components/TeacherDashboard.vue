<template>
  <main>
    <div class="container-fluid px-4">
      <h1 class="mt-4">Dashboard</h1>
      
      <div class="row mt-3">
        <div class="col-xl-3 col-md-6">
          <div class="card bg-primary text-white mb-4">
            <div class="card-body">Schools</div>
            <div v-if="loading"
              class="card-footer d-flex align-items-center justify-content-between"
            >
              Loading ...
            </div>
            <div v-else
              class="card-footer d-flex align-items-center justify-content-between"
            >
              {{ this.statistics.schools }}
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-md-6">
          <div class="card bg-warning text-white mb-4">
            <div class="card-body">Subjects</div>
            <div v-if="loading"
              class="card-footer d-flex align-items-center justify-content-between"
            >
            Loading ...
            </div>
            <div v-else
              class="card-footer d-flex align-items-center justify-content-between"
            >
            {{ this.statistics.subjects }}
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-md-6">
          <div class="card bg-success text-white mb-4">
            <div class="card-body">Lessons</div>
            <div v-if="loading"
              class="card-footer d-flex align-items-center justify-content-between"
            >
            Loading ...
            </div>
            <div v-else
              class="card-footer d-flex align-items-center justify-content-between"
            >
            {{ this.statistics.lessons }}
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-md-6">
          <div class="card bg-danger text-white mb-4">
            <div class="card-body">Students</div>
            <div v-if="loading"
              class="card-footer d-flex align-items-center justify-content-between"
            >
            Loading ...
            </div>
            <div v-else
              class="card-footer d-flex align-items-center justify-content-between"
            >
            {{ this.statistics.students }}
            </div>
          </div>
        </div>
      </div>
      <div class="row">
          <div class="col-12 col-sm-12">
            <div class="card card-primary card-outline card-tabs">
              <div class="card-header p-0 pt-1 border-bottom-0">
                <ul class="nav nav-tabs" id="custom-tabs-three-tab" role="tablist">
                  <li class="nav-item">
                    <a class="nav-link active" id="custom-tabs-three-home-tab" data-toggle="pill" href="#custom-tabs-three-home" role="tab" aria-controls="custom-tabs-three-home" aria-selected="true">Subjects</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" id="custom-tabs-three-profile-tab" data-toggle="pill" href="#custom-tabs-three-profile" role="tab" aria-controls="custom-tabs-three-profile" aria-selected="false">Units</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" id="custom-tabs-three-messages-tab" data-toggle="pill" href="#custom-tabs-three-messages" role="tab" aria-controls="custom-tabs-three-messages" aria-selected="false">Lessons</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" id="custom-tabs-three-settings-tab" data-toggle="pill" href="#custom-tabs-three-settings" role="tab" aria-controls="custom-tabs-three-settings" aria-selected="false">Settings</a>
                  </li>
                </ul>
              </div>
              <div class="card-body">
                <div class="tab-content" id="custom-tabs-three-tabContent">
                  <div class="tab-pane fade show active" id="custom-tabs-three-home" role="tabpanel" aria-labelledby="custom-tabs-three-home-tab">
                     <TeacherSubject />
                  </div>
                  <div class="tab-pane fade" id="custom-tabs-three-profile" role="tabpanel" aria-labelledby="custom-tabs-three-profile-tab">
                     <TeacherUnits />
                  </div>
                  <div class="tab-pane fade" id="custom-tabs-three-messages" role="tabpanel" aria-labelledby="custom-tabs-three-messages-tab">
                     Morbi turpis dolor, vulputate vitae felis non, tincidunt congue mauris. Phasellus volutpat augue id mi placerat mollis. Vivamus faucibus eu massa eget condimentum. Fusce nec hendrerit sem, ac tristique nulla. Integer vestibulum orci odio. Cras nec augue ipsum. Suspendisse ut velit condimentum, mattis urna a, malesuada nunc. Curabitur eleifend facilisis velit finibus tristique. Nam vulputate, eros non luctus efficitur, ipsum odio volutpat massa, sit amet sollicitudin est libero sed ipsum. Nulla lacinia, ex vitae gravida fermentum, lectus ipsum gravida arcu, id fermentum metus arcu vel metus. Curabitur eget sem eu risus tincidunt eleifend ac ornare magna.
                  </div>
                  <div class="tab-pane fade" id="custom-tabs-three-settings" role="tabpanel" aria-labelledby="custom-tabs-three-settings-tab">
                     Pellentesque vestibulum commodo nibh nec blandit. Maecenas neque magna, iaculis tempus turpis ac, ornare sodales tellus. Mauris eget blandit dolor. Quisque tincidunt venenatis vulputate. Morbi euismod molestie tristique. Vestibulum consectetur dolor a vestibulum pharetra. Donec interdum placerat urna nec pharetra. Etiam eget dapibus orci, eget aliquet urna. Nunc at consequat diam. Nunc et felis ut nisl commodo dignissim. In hac habitasse platea dictumst. Praesent imperdiet accumsan ex sit amet facilisis.
                  </div>
                </div>
              </div>
              <!-- /.card -->
            </div>
          </div>
        </div>
    </div>
  </main>
 
</template>
<script>
import axios from "axios";
import TeacherSubject from '../views/teachers_view/SubjectComponent.vue'
import TeacherUnits from '../views/teachers_view/ListUnitComponent.vue'

export default {
  name: "Dashboard Admin",
  components:{
    TeacherSubject,
    TeacherUnits,
  },
  data() {
    return {
      loading: false,
      statistics: [],
    };
  },
  created() {
    this.getStats();
  },
  methods: {
    async getStats() {
      this.loading = true;
      await axios.get("/v1/count/data").then(
        function (response) {
          this.statistics = response.data;
          console.log(this.statistics)
        }.bind(this)
      )
      .catch((error) =>{
        console.log(error)
      })
      .finally(() =>{
        this.loading = false
      })
    },
  },
};
</script>