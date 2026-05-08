import { createRouter, createWebHistory } from 'vue-router';
import MotorListView from '../views/MotorListView.vue';
import MotorDetailsView from '../views/MotorDetailsView.vue';
<<<<<<< HEAD
import MotorFormView from '../views/MotorFormView.vue';
=======
import MotorAddView from '../views/MotorAddView.vue';

>>>>>>> wersja_2.0

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MotorListView,
    },
    {
      path: '/motor/:id',
      name: 'motor-details',
      component: MotorDetailsView,
      props: true,
    },
    {
      path: '/add',
<<<<<<< HEAD
      name: 'add-motor',
      component: MotorFormView,
    },
    {
      path: '/edit/:id',
      name: 'edit-motor',
      component: MotorFormView,
      props: true,
    },
=======
      name: 'motor-add',
      component: MotorAddView,
    },

>>>>>>> wersja_2.0
  ],
});

export default router;
