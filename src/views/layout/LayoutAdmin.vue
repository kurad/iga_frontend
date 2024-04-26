<template>
    <div class="wrapper">
    <!-- Navbar -->
    <nav class="main-header navbar navbar-expand navbar-white navbar-light">
        <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" data-widget="pushmenu" href="#" role="button"
            ><i class="fas fa-bars"></i
          ></a>
        </li>
      </ul>
        <!-- Right navbar links -->
        <ul class="navbar-nav ml-auto">
           
          <!-- Notifications Dropdown Menu -->
          <li class="nav-item dropdown">
            <a class="nav-link" data-toggle="dropdown" href="#">
              <i class="far fa-user-circle"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right">
              <div class="dropdown-divider"></div>
              <button @click.prevent="logout()" class="dropdown-item">
                <i class="fas fa-sign-out-alt mr-2"></i> Logout
              </button>
              <div class="dropdown-divider"></div>
            </div>
          </li>
        </ul>
      </nav>
      <!-- /.navbar -->

        <Sidebar />
        <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
          <div class="container-fluid">
            <router-view />
          </div>
          <!-- /.container-fluid -->
        </section>
  
        <!-- Main content -->
  
        <!-- /.content -->
      </div>
      <!-- /.content-wrapper -->
      <footer class="main-footer">
        <div class="float-right d-none d-sm-block"><b>Version</b> 1.0.0</div>
        <strong
          >Copyright &copy; 2024
          <a href="https://alwaysiga.com">iGA App</a>.</strong
        >
        All rights reserved.
      </footer>
    </div>
</template>
<script>
import axios from 'axios';
import Sidebar from '../../components/Sidebar.vue';
export default {
    components: {
        Sidebar,
    },


    created() {
        axios.defaults.headers.common['Content-Type'] = 'application/json'
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')

        axios.get('/profile')
            .then(response => {
                this.user = response.data
                this.loginType = response.data.is_admin
                this.loginName = response.data.firstname
            })
            .catch(error => {
                if (error.response.status === 401) {
                    localStorage.clear();
                    this.$router.push('/login')
                }
                console.error(error);
            })
    },
    methods:{
        logout(){
            localStorage.removeItem('token');
            this.$router.push('/login');
        },
    }


}
</script>