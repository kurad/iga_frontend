
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
            <router-link :to="{name: 'dashboard'}"  class="nav-link active">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Dashboard
              </p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/levels" class="nav-link">
              <i class="nav-icon fas fa-signal"></i>
              <p>
                Levels
              </p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'schools' }" class="nav-link">
              <i class="nav-icon fas fa-school"></i>
              <p>
                Schools
              </p>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link :to="{ name: 'subjects' }" class="nav-link">
              <i class="nav-icon fas fa-book"></i>
              <p>
                Subjects
              </p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'lessons' }" class="nav-link">
              <i class="nav-icon fas fa-book-reader"></i>
              <p>
                Lessons
              </p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'users' }" class="nav-link">
              <i class="nav-icon fas fa-users"></i>
              <p>
                Users
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
    

