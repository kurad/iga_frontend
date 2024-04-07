<template>
  <div id="layoutSidenav_nav">
    <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
      <div class="sb-sidenav-menu">
        <div class="nav">
          <router-link class="nav-link" to="#">
            <div class="sb-nav-link-icon">
              <i class="fas fa-tachometer-alt"></i>
            </div>
            Dashboard
          </router-link>

          <router-link class="nav-link" :to="{ name: 'teacher.subjects' }">
            <div class="sb-nav-link-icon"><i class="fas fa-book"></i></div>
            My Subjects
          </router-link>
          <router-link class="nav-link" :to="{ name: 'teacher.lessons' }">
            <div class="sb-nav-link-icon"><i class="fas fa-book"></i></div>
            My Lessons
          </router-link>

          <router-link class="nav-link" :to="{ name: 'browse.lessons' }">
            <div class="sb-nav-link-icon"><i class="fas fa-search"></i></div>
            Browse Lessons
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>
