// shared/api.js
import axios from 'axios';


export const fetchPopularRepos = (language = 'all') => {
  const encodedURI = encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories&per_page=10`);

  return axios.get(encodedURI)
    .then(res => res.data)
    .then(repos => repos.items)
    .catch(error => {
      console.warn(error)
      return null
    });
};

export const fetchAllPosts = () => {
  return axios.get('/api/posts')
    .then(res => res.data)
    .catch(error => {
      console.warn(error)
      return null
    });
}

export const fetchSinglePost = (id) => {
  return axios.get(`/api/posts/${id}`)
    .then(res => res.data)
    .catch(error => {
      console.warn(error)
      return null
    });
}