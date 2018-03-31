import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-fb749.firebaseio.com/'
});

export default instance;