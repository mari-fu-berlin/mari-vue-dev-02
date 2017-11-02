import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Home from '@/components/Home';
import Content01 from '@/components/Content-01';
import Subpage1 from '@/components/Subpage-1';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld,
    },
    {
      path: '/startseite',
      name: 'Home',
      component: Home,
    },
    {
      path: '/inhaltsseite-1',
      name: 'Content-01',
      component: Content01,
    },
    {
      path: '/inhaltsseite-1/unterseite-1',
      name: 'Subpage-01',
      component: Subpage1,
    },
  ],
});
