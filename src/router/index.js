import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import AddTodo from '../components/AddTodo.vue';
import ViewTodo from '../components/ViewTodo.vue';
import RecycleBin from '../components/RecycleBin.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/add-todo',
    name: 'AddTodo',
    component: AddTodo,
  },
  {
    path: '/view-todo/:id',
    name: 'ViewTodo',
    component: ViewTodo,
  },
  {
    path: '/recycle-bin',
    name: 'RecycleBin',
    component: RecycleBin,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
