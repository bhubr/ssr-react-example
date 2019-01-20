// shared/routes.js
import Home from './Home';
import Grid from './Grid';
import PostList from './PostList';
import PostSingle from './PostSingle';
import { fetchPopularRepos, fetchAllPosts, fetchSinglePost } from 'api';

const routes =  [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/popular/:id',
    component: Grid,
    fetchInitialData: (path = '') => fetchPopularRepos(
      path.split('/').pop()
    )
  },
  {
    path: '/posts',
    exact: true,
    component: PostList,
    fetchInitialData: (path = '') => fetchAllPosts()
  },
  {
    path: '/posts/:id',
    component: PostSingle,
    fetchInitialData: (path = '') => fetchSinglePost(
      Number(path.split('/').pop())
    )
  }
];

export default routes;
