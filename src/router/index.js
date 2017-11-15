import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Content01 from '@/components/Content-01';
import Subpage1 from '@/components/Subpage-1';
import Raeume from '@/components/Raeume';
import Page from '@/components/Page';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Startseite',
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
    {
      path: '/plans',
      name: 'Raeume',
      component: Raeume,
    },
    {
      path: '/page',
      name: 'Page',
      component: Page,
    },
  ],
});
