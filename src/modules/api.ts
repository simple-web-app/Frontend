import Axios from 'axios';
import { ref, inject, Ref } from 'vue';

export const api = Axios.create({
  baseURL: '/api',
});

export const useApi = (endpoint: string) => {
  const loading = ref(false);
  const data = ref();
  const error = ref();

  const token = inject('currentToken') as Ref<string>;

  const get = () => {
    loading.value = true;
    error.value = undefined;
    return api.get(endpoint, {
      headers: {
        Authorization: token.value,
      },
    })
      .then((res) => {
        data.value = res.data;
      })
      .catch((err) => {
        error.value = err;
      })
      .finally(() => {
        loading.value = false;
      });
  };
  const getWithQueries = (queries: URLSearchParams) => {
    loading.value = true;
    error.value = undefined;
    return api.get(`${endpoint}?${queries.toString()}`, {
      headers: {
        Authorization: token.value,
      },
    })
      .then((res) => {
        data.value = res.data;
      })
      .catch((err) => {
        error.value = err;
      })
      .finally(() => {
        loading.value = false;
      });
  };
  const post = (postData: any) => {
    loading.value = true;
    error.value = undefined;
    return api.post(endpoint, postData, {
      headers: {
        Authorization: token.value,
      },
    })
      .then((res) => {
        data.value = res.data;
      })
      .catch((err) => {
        error.value = err;
      })
      .finally(() => {
        loading.value = false;
      });
  };

  return {
    loading, data, error, get, getWithQueries, post,
  };
};
