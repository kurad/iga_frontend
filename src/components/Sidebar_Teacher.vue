<template>
<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="index3.html" class="brand-link">
      <span class="brand-text font-weight-light">iGA App</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
       
        <div class="info" style="color: white;">
          <!-- Welcome {{this.loginName.firstname}} {{this.loginName.lastname}} -->
        </div>
      </div>
      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <li class="nav-item menu-open">
            <router-link active-class="active" to="/teacher/dashboard" exact class="nav-link" >
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Dashboard
              </p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link active-class="active" to="/teacher/subjects" exact class="nav-link">
              <i class="nav-icon fas fa-book"></i>
              <p>
                My Subjects
              </p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link active-class="active" to="/teacher/lessons" exact class="nav-link">
              <i class="nav-icon fas fa-book-reader"></i>
              <p>
                My Lessons
              </p>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link active-class="active" to="/teacher/browse/lessons" exact class="nav-link">
              <i class="nav-icon fas fa-search"></i>
              <p>
                Browse Lessons
              </p>
            </router-link>
          </li>
         
        </ul>
      </nav>
    </div>
  </aside>
</template>
<script>
  import axios from "axios";
  export default {
    data(){
      return{
        loginName:null,
      }
    },

    created() {
      axios.defaults.headers.common["Content-Type"] = "application/json";
      axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("token");
  
      axios
        .get("/profile")
        .then((response) => {
          this.user = response.data;
          this.loginType = response.data.is_admin;
          this.loginName = response.data;
          console.log(this.loginName)
        })
        .catch((error) => {
          if (error.response.status === 401) {
            localStorage.clear();
            this.$router.push("/login");
          }
          console.error(error);
        });
    },
  };
  </script>
