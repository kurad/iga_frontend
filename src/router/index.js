// import ViewHome from '../views/Home/HomeView.vue'
// import Home from '../views/Home/Home.vue'
import HomePage from '../views/Home/HomeViewPage.vue'
import Login from '../views/LoginForm.vue'
import Register from '../views/Register.vue'
import AdminLayout from '../views/layout/adminLayout.vue'
import SubjectComponent from '../views/SubjectComponent.vue'
import SchoolComponent from '../views/SchoolComponent.vue'
import LessonComponent from '../views/LessonComponent.vue'
import LessonDetails from '../views/LessonDetails.vue'
import Levels from '../views/Levels.vue'
import UnitComponent from '../views/Units/UnitsComponent.vue'
import Dashboard from '../components/Dashboard.vue'
import StudentDashboard from '../components/StudentDashboard.vue'
import TeacherDashboard from '../components/Dashboard.vue'
import studentLayout from '../views/student_view/studentLayout.vue'
import LayoutStudent from '../views/student_view/LayoutStudent.vue'
import teacherLayout from '../views/teachers_view/teacherLayout.vue'
import StaffRegister from '../views/StaffRegister.vue'

import StudentSubject from '../views/student_view/SubjectComponent.vue'
import StudentUnits from '../views/student_view/UnitsComponent.vue'
import StudentLesson from '../views/student_view/LessonComponent.vue'
import LessonDetails_st from '../views/student_view/LessonDetails.vue'
import Topics from '../views/student_view/Topics.vue'

import TeacherSubject from '../views/teachers_view/SubjectComponent.vue'
import TeacherUnits from '../views/teachers_view/UnitsComponent.vue'
import TeacherLesson from '../views/teachers_view/LessonComponent.vue'
import LessonDetails_t from '../views/teachers_view/LessonDetails.vue'
import BrowseLesson from '../views/teachers_view/BrowseLessonComponent.vue'
import Users from '../views/Users.vue'






  import { createRouter, createWebHistory } from "vue-router";


const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },

    {
        path: '/register',
        name: 'register',
        component: Register
      },
    
    {
      path: '/admin',
      name: 'admin',
      component: AdminLayout,
      meta: {
        requiresAuth: true,
        is_admin: true
    },
      children: [
        {path: '/subjects', name: 'subjects', component: SubjectComponent },
        { path:'/levels', name: 'levels', component: Levels},
        { path:'/schools', name: 'schools', component: SchoolComponent},
        { path: '/subjects/:id', name: 'units',  component: UnitComponent },
        { path: '/unit/topics/{id}', name: 'unit.lessons',  component: LessonComponent },
        { path: '/dashboard', name: 'dashboard',  component: Dashboard },
        { path: '/lessons', name: 'lessons',  component: LessonComponent },
        { path: '/lesson/:id', name: 'lesson.details',  component: LessonDetails },
        { path: '/staff/register', name: 'staff.register',  component: StaffRegister },
        { path: '/users', name: 'users',  component: Users },
      ],
    },

    {
    path: '/student',
    name: 'student',
    component: LayoutStudent,
    meta: {
      requiresAuth: true,
      is_student: true
  },
    children: [
      {path: '/student/subjects', name: 'student.subjects', component: StudentSubject },
    //   { path:'/levels', name: 'levels', component: Levels},
    //   { path:'/schools', name: 'schools', component: SchoolComponent},
      { path: '/student/subjects/:id', name: 'student.units',  component: StudentUnits },
    //   { path: '/unit/topics/{id}', name: 'unit.lessons',  component: LessonComponent },
      { path: '/student/dashboard', name: 'student.dashboard',  component: StudentDashboard },
      { path: '/student/lessons', name: 'student.lessons',  component: StudentLesson },
      { path: '/student/lesson/:id', name: 'student.lesson.details',  component: LessonDetails_st },
      { path: '/subject/topics', name: 'subject.topics',  component: Topics },
    ]
  },

  {
  path: '/teacher',
  name: 'teacher',
  component: teacherLayout,
  meta: {
    requiresAuth: true,
    is_teacher: true
},
  children: [
    {path: '/teacher/subjects', name: 'teacher.subjects', component: TeacherSubject },
    { path: '/teacher/unit/:id', name: 'teacher.units',  component: TeacherUnits },
    { path: '/teacher/unit/topics/{id}', name: 'teacher.unit.lessons',  component: LessonComponent },
    { path: '/teacher/dashboard', name: 'teacher.dashboard',  component: TeacherDashboard },
    { path: '/teacher/lessons', name: 'teacher.lessons',  component: TeacherLesson },
    { path: '/teacher/lesson/:id', name: 'teacher.lesson.details',  component: LessonDetails_t },
    { path: '/teacher/browse/lessons', name: 'browse.lessons',  component: BrowseLesson },
  ]
}

]
const router = createRouter({
    history: createWebHistory(),
    routes

})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
      if (localStorage.getItem('token') == null) {
          next({
              path: '/login',
              params: { nextUrl: to.fullPath }
          })
      } else {
          let user = JSON.parse(localStorage.getItem('user'))
          if (to.matched.some(record => record.meta.is_admin)) {
              if (user.is_admin == 1) {
                  next()
              }
              else {
                  next({ name: 'login' })
              }
          }
          else if (to.matched.some(record => record.meta.is_student)) {
              if (user.is_admin == 0) {
                  next()
              }
              else {
                  next({ name: 'login' })
              }
          }

          else if (to.matched.some(record => record.meta.is_teacher)) {
            if (user.is_admin == 2) {
                next()
            }
            else {
                next({ name: 'login' })
            }
        }
          next()
      }
  } else {
      next()
  }
})

export default router