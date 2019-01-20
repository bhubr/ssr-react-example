// shared/api.js
import axios from 'axios';
import posts from './data/posts';

export const fetchPopularRepos = (language = 'all') => {
  const encodedURI = encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories&per_page=10`);

  return axios.get(encodedURI)
    .then(res => res.data)
    .then(repos => repos.items)
    .catch(error => {
      console.warn(error);
      return null;
    });
};

export const fetchAllPosts = () => {
  return Promise.resolve(posts);
}

export const fetchSinglePost = (id) => {
  const post = posts.find(p => p.id === id);
  return Promise.resolve(post);
}