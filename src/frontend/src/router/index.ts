import { createRouter, createWebHistory } from 'vue-router';
import MotorListView from '../views/MotorListView.vue';
import MotorDetailsView from '../views/MotorDetailsView.vue';
import MotorFormView from '../views/MotorFormView.vue';

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
      name: 'add-motor',
      component: MotorFormView,
    },
    {
      path: '/edit/:id',
      name: 'edit-motor',
      component: MotorFormView,
      props: true,
    },
  ],
});

export default router;
