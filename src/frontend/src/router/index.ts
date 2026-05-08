import { createRouter, createWebHistory } from 'vue-router';
import MotorListView from '../views/MotorListView.vue';
import MotorDetailsView from '../views/MotorDetailsView.vue';
import MotorAddView from '../views/MotorAddView.vue';


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
      name: 'motor-add',
      component: MotorAddView,
    },

  ],
});

export default router;
