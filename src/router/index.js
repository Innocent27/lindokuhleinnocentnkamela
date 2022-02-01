import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Resume from '../views/Resume.vue'
import Skills from '../views/Skills.vue'
import Projects from '../views/projects/Projects.vue'
import ProjectsDetails from '../views/projects/Projectsdetails.vue' 
import Testimonials from '../views/Testimonials.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills
  },  
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/projects/:id',
    name: 'ProjectsDetails',
    component: ProjectsDetails,
    props: true
  },
  {
    path: '/testimonials',
    name: 'Testimonials',
    component: Testimonials
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router