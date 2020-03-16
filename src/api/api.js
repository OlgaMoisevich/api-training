import * as axios from "axios";
const baseURL = 'https://social-network.samuraijs.com/api/1.0/';

const set_auth_data = () => {
    return axios.get(baseURL + `/auth/me`, {withCredentials: true})
};

const set_profile = (userId) => {
    return axios.get(baseURL + `/profile/${userId}`)
};

const get_all_users = (currentPage, pageSize) => {
    return axios.get(baseURL + `/users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true,
    })
};

const get_on_page_changed = (pageNumber, pageSize) => {
    return axios.get(baseURL + `/users?page=${pageNumber}&count=${pageSize}`, {
        withCredentials: true,
    })
};

const set_unfollow = (itemId) => {
    return axios.delete(baseURL + `follow/${itemId}`, {
        withCredentials: true,
        headers: {'API-KEY': 'c2b2731d-a743-4e80-8839-a61262457b3d'},
    })
};

const set_follow = (itemId) => {
    return axios.post(baseURL + `follow/${itemId}`, {}, {
        withCredentials: true,
        headers: {'API-KEY': 'c2b2731d-a743-4e80-8839-a61262457b3d'},
    })
};

const update_status = (status) => {
    return axios.put(baseURL + `/profile/status`, {status: status} ,{
        withCredentials: true,
        headers: {'API-KEY': 'c2b2731d-a743-4e80-8839-a61262457b3d'},
    });
};

const get_status = (status) => {
    return axios.get(baseURL + `/profile/status/${status}`, {} ,{
        withCredentials: true,
        headers: {'API-KEY': 'c2b2731d-a743-4e80-8839-a61262457b3d'},
    });
};

export default {
    set_auth_data,
    set_profile,
    get_all_users,
    get_on_page_changed,
    set_unfollow,
    set_follow,
    update_status,
    get_status,
}
