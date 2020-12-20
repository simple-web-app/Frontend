import Axios from 'axios';
import { ref } from 'vue';

export const api = Axios.create({
  baseURL: '/api',
});

export const useApi = (endpoint: string) => {
  const loading = ref(true);
  const data = ref();
  const error = ref();

  const get = () => api.get(endpoint)
    .then((res) => {
      data.value = res.data;
    })
    .catch((err) => {
      error.value = err;
    })
    .finally(() => {
      loading.value = false;
    });

  return {
    loading, data, error, get,
  };
};
