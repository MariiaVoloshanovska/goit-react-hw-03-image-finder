import axios from 'axios';

const KEY_API = '27157925-5efc8a27cb1dac55eac7638cc';
axios.defaults.baseURL = 'https://pixabay.com/api';

export function GalleryApi(name, page) {
  return axios.get(
    `/?q=${name}&page=${page}&key=${KEY_API}&image_type=photo&orientation=horizontal&per_page=12`
  );
}
