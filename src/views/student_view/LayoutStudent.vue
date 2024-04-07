<template>
  <div class="wrapper">
    <!-- Navbar -->
    <nav class="main-header navbar navbar-expand navbar-white navbar-light">
      <!-- Left navbar links -->
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" data-widget="pushmenu" href="#" role="button"
            ><i class="fas fa-bars"></i
          ></a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
          <a href="../../index3.html" class="nav-link">Home</a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
          <a href="#" class="nav-link">Contact</a>
        </li>
      </ul>

      <!-- Right navbar links -->
      <ul class="navbar-nav ml-auto">
        <!-- Notifications Dropdown Menu -->
        <li class="nav-item dropdown">
          <a class="nav-link" data-toggle="dropdown" href="#">
            <i class="far fa-bell"></i>
            <span class="badge badge-warning navbar-badge">15</span>
          </a>
          <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <span class="dropdown-item dropdown-header">15 Notifications</span>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">
              <i class="fas fa-envelope mr-2"></i> 4 new messages
              <span class="float-right text-muted text-sm">3 mins</span>
            </a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">
              <i class="fas fa-users mr-2"></i> 8 friend requests
              <span class="float-right text-muted text-sm">12 hours</span>
            </a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">
              <i class="fas fa-file mr-2"></i> 3 new reports
              <span class="float-right text-muted text-sm">2 days</span>
            </a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item dropdown-footer"
              >See All Notifications</a
            >
          </div>
        </li>
      </ul>
    </nav>
    <!-- /.navbar -->

    <!-- Main Sidebar Container -->
    <Aside />

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <div class="container-fluid">
          <router-view />
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1>
                Navbar & Tabs
                <small>new</small>
              </h1>
            </div>
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active">Navbar & Tabs</li>
              </ol>
            </div>
          </div>
        </div>
        <!-- /.container-fluid -->
      </section>

      <!-- Main content -->
      <section class="content">
        <div class="container-fluid">
          <user-details></user-details>

          <div class="row">
            <div class="col-12 col-sm-12">
              <div class="card card-primary card-outline card-tabs">
                <div class="card-header p-0 pt-1 border-bottom-0">
                  <ul
                    class="nav nav-tabs"
                    id="custom-tabs-three-tab"
                    role="tablist"
                  >
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        id="custom-tabs-three-home-tab"
                        data-toggle="pill"
                        href="#custom-tabs-three-home"
                        role="tab"
                        aria-controls="custom-tabs-three-home"
                        aria-selected="true"
                        >Dashboard</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        id="custom-tabs-three-profile-tab"
                        data-toggle="pill"
                        href="#custom-tabs-three-profile"
                        role="tab"
                        aria-controls="custom-tabs-three-profile"
                        aria-selected="false"
                        >Profile</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        id="custom-tabs-three-messages-tab"
                        data-toggle="pill"
                        href="#custom-tabs-three-messages"
                        role="tab"
                        aria-controls="custom-tabs-three-messages"
                        aria-selected="false"
                        >Messages</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        id="custom-tabs-three-settings-tab"
                        data-toggle="pill"
                        href="#custom-tabs-three-settings"
                        role="tab"
                        aria-controls="custom-tabs-three-settings"
                        aria-selected="false"
                        >Settings</a
                      >
                    </li>
                  </ul>
                </div>
                <div class="card-body">
                  <div class="tab-content" id="custom-tabs-three-tabContent">
                    <div
                      class="tab-pane fade show active"
                      id="custom-tabs-three-home"
                      role="tabpanel"
                      aria-labelledby="custom-tabs-three-home-tab"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin malesuada lacus ullamcorper dui molestie, sit amet
                      congue quam finibus. Etiam ultricies nunc non magna
                      feugiat commodo. Etiam odio magna, mollis auctor felis
                      vitae, ullamcorper ornare ligula. Proin pellentesque
                      tincidunt nisi, vitae ullamcorper felis aliquam id.
                      Pellentesque habitant morbi tristique senectus et netus et
                      malesuada fames ac turpis egestas. Proin id orci eu lectus
                      blandit suscipit. Phasellus porta, ante et varius ornare,
                      sem enim sollicitudin eros, at commodo leo est vitae
                      lacus. Etiam ut porta sem. Proin porttitor porta nisl, id
                      tempor risus rhoncus quis. In in quam a nibh cursus
                      pulvinar non consequat neque. Mauris lacus elit,
                      condimentum ac condimentum at, semper vitae lectus. Cras
                      lacinia erat eget sapien porta consectetur.
                    </div>
                    <div
                      class="tab-pane fade"
                      id="custom-tabs-three-profile"
                      role="tabpanel"
                      aria-labelledby="custom-tabs-three-profile-tab"
                    >
                      Mauris tincidunt mi at erat gravida, eget tristique urna
                      bibendum. Mauris pharetra purus ut ligula tempor, et
                      vulputate metus facilisis. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Vestibulum ante ipsum primis
                      in faucibus orci luctus et ultrices posuere cubilia Curae;
                      Maecenas sollicitudin, nisi a luctus interdum, nisl ligula
                      placerat mi, quis posuere purus ligula eu lectus. Donec
                      nunc tellus, elementum sit amet ultricies at, posuere nec
                      nunc. Nunc euismod pellentesque diam.
                    </div>
                    <div
                      class="tab-pane fade"
                      id="custom-tabs-three-messages"
                      role="tabpanel"
                      aria-labelledby="custom-tabs-three-messages-tab"
                    >
                      Morbi turpis dolor, vulputate vitae felis non, tincidunt
                      congue mauris. Phasellus volutpat augue id mi placerat
                      mollis. Vivamus faucibus eu massa eget condimentum. Fusce
                      nec hendrerit sem, ac tristique nulla. Integer vestibulum
                      orci odio. Cras nec augue ipsum. Suspendisse ut velit
                      condimentum, mattis urna a, malesuada nunc. Curabitur
                      eleifend facilisis velit finibus tristique. Nam vulputate,
                      eros non luctus efficitur, ipsum odio volutpat massa, sit
                      amet sollicitudin est libero sed ipsum. Nulla lacinia, ex
                      vitae gravida fermentum, lectus ipsum gravida arcu, id
                      fermentum metus arcu vel metus. Curabitur eget sem eu
                      risus tincidunt eleifend ac ornare magna.
                    </div>
                    <div
                      class="tab-pane fade"
                      id="custom-tabs-three-settings"
                      role="tabpanel"
                      aria-labelledby="custom-tabs-three-settings-tab"
                    >
                      Pellentesque vestibulum commodo nibh nec blandit. Maecenas
                      neque magna, iaculis tempus turpis ac, ornare sodales
                      tellus. Mauris eget blandit dolor. Quisque tincidunt
                      venenatis vulputate. Morbi euismod molestie tristique.
                      Vestibulum consectetur dolor a vestibulum pharetra. Donec
                      interdum placerat urna nec pharetra. Etiam eget dapibus
                      orci, eget aliquet urna. Nunc at consequat diam. Nunc et
                      felis ut nisl commodo dignissim. In hac habitasse platea
                      dictumst. Praesent imperdiet accumsan ex sit amet
                      facilisis.
                    </div>
                  </div>
                </div>
                <!-- /.card -->
              </div>
            </div>
            <div class="col-12 col-sm-6">
              <div class="card card-primary card-outline card-outline-tabs">
                <div class="card-header p-0 border-bottom-0">
                  <ul
                    class="nav nav-tabs"
                    id="custom-tabs-four-tab"
                    role="tablist"
                  >
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        id="custom-tabs-four-home-tab"
                        data-toggle="pill"
                        href="#custom-tabs-four-home"
                        role="tab"
                        aria-controls="custom-tabs-four-home"
                        aria-selected="true"
                        >Home</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        id="custom-tabs-four-profile-tab"
                        data-toggle="pill"
                        href="#custom-tabs-four-profile"
                        role="tab"
                        aria-controls="custom-tabs-four-profile"
                        aria-selected="false"
                        >Profile</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        id="custom-tabs-four-messages-tab"
                        data-toggle="pill"
                        href="#custom-tabs-four-messages"
                        role="tab"
                        aria-controls="custom-tabs-four-messages"
                        aria-selected="false"
                        >Messages</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        id="custom-tabs-four-settings-tab"
                        data-toggle="pill"
                        href="#custom-tabs-four-settings"
                        role="tab"
                        aria-controls="custom-tabs-four-settings"
                        aria-selected="false"
                        >Settings</a
                      >
                    </li>
                  </ul>
                </div>
                <div class="card-body">
                  <div class="tab-content" id="custom-tabs-four-tabContent">
                    <div
                      class="tab-pane fade show active"
                      id="custom-tabs-four-home"
                      role="tabpanel"
                      aria-labelledby="custom-tabs-four-home-tab"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin malesuada lacus ullamcorper dui molestie, sit amet
                      congue quam finibus. Etiam ultricies nunc non magna
                      feugiat commodo. Etiam odio magna, mollis auctor felis
                      vitae, ullamcorper ornare ligula. Proin pellentesque
                      tincidunt nisi, vitae ullamcorper felis aliquam id.
                      Pellentesque habitant morbi tristique senectus et netus et
                      malesuada fames ac turpis egestas. Proin id orci eu lectus
                      blandit suscipit. Phasellus porta, ante et varius ornare,
                      sem enim sollicitudin eros, at commodo leo est vitae
                      lacus. Etiam ut porta sem. Proin porttitor porta nisl, id
                      tempor risus rhoncus quis. In in quam a nibh cursus
                      pulvinar non consequat neque. Mauris lacus elit,
                      condimentum ac condimentum at, semper vitae lectus. Cras
                      lacinia erat eget sapien porta consectetur.
                    </div>
                    <div
                      class="tab-pane fade"
                      id="custom-tabs-four-profile"
                      role="tabpanel"
                      aria-labelledby="custom-tabs-four-profile-tab"
                    >
                      Mauris tincidunt mi at erat gravida, eget tristique urna
                      bibendum. Mauris pharetra purus ut ligula tempor, et
                      vulputate metus facilisis. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Vestibulum ante ipsum primis
                      in faucibus orci luctus et ultrices posuere cubilia Curae;
                      Maecenas sollicitudin, nisi a luctus interdum, nisl ligula
                      placerat mi, quis posuere purus ligula eu lectus. Donec
                      nunc tellus, elementum sit amet ultricies at, posuere nec
                      nunc. Nunc euismod pellentesque diam.
                    </div>
                    <div
                      class="tab-pane fade"
                      id="custom-tabs-four-messages"
                      role="tabpanel"
                      aria-labelledby="custom-tabs-four-messages-tab"
                    >
                      Morbi turpis dolor, vulputate vitae felis non, tincidunt
                      congue mauris. Phasellus volutpat augue id mi placerat
                      mollis. Vivamus faucibus eu massa eget condimentum. Fusce
                      nec hendrerit sem, ac tristique nulla. Integer vestibulum
                      orci odio. Cras nec augue ipsum. Suspendisse ut velit
                      condimentum, mattis urna a, malesuada nunc. Curabitur
                      eleifend facilisis velit finibus tristique. Nam vulputate,
                      eros non luctus efficitur, ipsum odio volutpat massa, sit
                      amet sollicitudin est libero sed ipsum. Nulla lacinia, ex
                      vitae gravida fermentum, lectus ipsum gravida arcu, id
                      fermentum metus arcu vel metus. Curabitur eget sem eu
                      risus tincidunt eleifend ac ornare magna.
                    </div>
                    <div
                      class="tab-pane fade"
                      id="custom-tabs-four-settings"
                      role="tabpanel"
                      aria-labelledby="custom-tabs-four-settings-tab"
                    >
                      Pellentesque vestibulum commodo nibh nec blandit. Maecenas
                      neque magna, iaculis tempus turpis ac, ornare sodales
                      tellus. Mauris eget blandit dolor. Quisque tincidunt
                      venenatis vulputate. Morbi euismod molestie tristique.
                      Vestibulum consectetur dolor a vestibulum pharetra. Donec
                      interdum placerat urna nec pharetra. Etiam eget dapibus
                      orci, eget aliquet urna. Nunc at consequat diam. Nunc et
                      felis ut nisl commodo dignissim. In hac habitasse platea
                      dictumst. Praesent imperdiet accumsan ex sit amet
                      facilisis.
                    </div>
                  </div>
                </div>
                <!-- /.card -->
              </div>
            </div>
          </div>
        </div>
        <!-- /.container-fluid -->
      </section>
      <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->
    <footer class="main-footer">
      <div class="float-right d-none d-sm-block"><b>Version</b> 3.2.0</div>
      <strong
        >Copyright &copy; 2014-2021
        <a href="https://adminlte.io">AdminLTE.io</a>.</strong
      >
      All rights reserved.
    </footer>

    <!-- Control Sidebar -->
    <aside class="control-sidebar control-sidebar-dark">
      <!-- Control sidebar content goes here -->
    </aside>
    <!-- /.control-sidebar -->
  </div>
  <!-- ./wrapper -->
</template>

<script>
import axios from "axios";
import Aside from "../../views/student_view/Aside.vue";
import UserDetails from "./components/UserDetails.vue";
// import Dashboard from '../../components/dashboard.vue'
export default {
  components: {
    Aside,
    UserDetails,
    // Dashboard
  },

  created() {
    axios.defaults.headers.common["Content-Type"] = "application/json";
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + localStorage.getItem("token");

    axios
      .get("/profile")
      .then((response) => {
        this.user = response.data;
        this.loginType = response.data.is_admin;
        this.loginName = response.data.firstname;
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