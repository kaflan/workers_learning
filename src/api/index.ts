import axios from 'axios';

axios.defaults.baseURL = 'https://jsonbox.io/box_8c86840d08b420ca7a1f';

const listOrItem = (id: string = '') => axios.get(`/${id}`);

const addedItemToList = (body: JSON) => axios.post('/', body);

const updatedRecord = (id: string, body: JSON) => axios.put(`/${id}`, body);

const removeItem = (id:string) => axios.delete(`/${id}`);

export default {
  listOrItem,
  addedItemToList,
  updatedRecord,
  removeItem,
};
