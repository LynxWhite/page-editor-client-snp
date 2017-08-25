import axios from 'axios';

export function getPages(){
    return axios.get('/getPages')
        .then(res => res.data);
}

export function getPageData(id){
    return axios.post('/getPageData', {id:id})
        .then(res => res.data);
}

export function savePage(page, id) {
    return axios.post('savePage', {id: id, data: page})
        .then(res => res.data);
}

export function deletePage(id) {
    return axios.post('deletePage', {id: id})
        .then(res => res.data);
}