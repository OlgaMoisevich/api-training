import * as axios from "axios";
const baseURL = 'https://social-network.samuraijs.com/api/1.0/';

const set_auth_data = () => {
    return axios.get(baseURL + `/auth/me`, {withCredentials: true})
};

const set_profile = (userId) => {
    return axios.get(baseURL + `/profile/${userId}`)
};

const get_all_users = (currentPage, pageSize)=>{
    return axios.get(baseURL + `/users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true,
    })
};

const get_on_page_changed = (pageNumber, pageSize)=>{
    return axios.get(baseURL + `/users?page=${pageNumber}&count=${pageSize}`, {
        withCredentials: true,
    })
};

const set_unfollow = (itemId)=>{
    return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${itemId}`, {
        withCredentials: true,
        headers: {'API-KEY':'8635547c-5fc1-4f81-b1fd-19584dd1e0c4'},
    })
};

const set_follow = (itemId)=>{
    return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${itemId}`, {} , {
        withCredentials: true,
        headers: {'API-KEY':'8635547c-5fc1-4f81-b1fd-19584dd1e0c4'},
    })
};

export default {
    set_auth_data,
    set_profile,
    get_all_users,
    get_on_page_changed,
    set_unfollow,
    set_follow,
}
