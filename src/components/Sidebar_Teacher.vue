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
       
        <div class="info">
          <a href="#" class="d-block">Alexander Pierce</a>
        </div>
      </div>
      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <li class="nav-item menu-open">
            <router-link :to="{name: 'teacher.dashboard'}"  class="nav-link active">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Dashboard
              </p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'teacher.subjects' }" class="nav-link">
              <i class="nav-icon fas fa-book"></i>
              <p>
                My Subjects
              </p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'teacher.lessons' }" class="nav-link">
              <i class="nav-icon fas fa-book-reader"></i>
              <p>
                My Lessons
              </p>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link :to="{ name: 'browse.lessons' }" class="nav-link">
              <i class="nav-icon fas fa-search"></i>
              <p>
                Browse Lessons
              </p>
            </router-link>
          </li>
         
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>
