// Router:
  import { createRouter, createWebHistory } from 'vue-router'
//

// Components:
  import Popup from '../components/Popup.vue'
//

// Views:
  import HomeView from '../views/HomeView.vue'
  import AboutView from '../views/AboutView.vue'
  import ProjectsView from '../views/ProjectsView.vue'
  import ContactView from '../views/ContactView.vue'
  import PrivacyView from '../views/PrivacyView.vue'
  import ErrorView from '../views/ErrorView.vue'
//

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default: HomeView,
      },
      props: {
        activePage: 'Home'
      },
    },
    {
      path: '/about',
      name: 'About me',
      components: {
        default: AboutView,
      },
      props: {
        activePage: 'About Me'
      }
    },
    {
      path: '/projects',
      name: 'Projects',
      components: {
        default: ProjectsView,
                Popup,
      },
      props: {
        activePage: 'Projects'
      },
    },
    {
      path: '/contact',
      name: 'Contact',
      components: {
        default: ContactView,
      },
      props: {
        activePage: 'Contact'
      },
    },
    {
      path: '/privacystatement',
      name: 'PrivacyStatement',
      components: {
        default: PrivacyView
      }
    },
    {
      path: '/:pathMatch(.*)',
      name: '404 not Found',
      components: {
        default: ErrorView
      }
    }
  ]
})

export default router