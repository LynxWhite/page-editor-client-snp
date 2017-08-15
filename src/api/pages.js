import axios from 'axios';

export function getPages(){
    return axios.get('/getPages')
        .then(res => res.data);
}