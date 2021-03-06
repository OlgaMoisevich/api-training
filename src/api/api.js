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

const update_user_status = (status) => {
    return axios.put(baseURL + `/profile/status`, {status: status} ,{
        withCredentials: true,
        headers: {'API-KEY': 'c2b2731d-a743-4e80-8839-a61262457b3d'},
    });
};


const get_user_status = (userId) => {
    return axios.get(baseURL + `/profile/status/${userId}`, {} ,{
        withCredentials: true,
        headers: {'API-KEY': 'c2b2731d-a743-4e80-8839-a61262457b3d'},
    });
};

const set_login_api = (email, password, rememberMe = false, captcha = false) => {
    return axios.post(baseURL + `/auth/login`,
        {email, password, rememberMe, captcha},
        {
            withCredentials: true,
            headers: {'API-KEY': 'c2b2731d-a743-4e80-8839-a61262457b3d'},
        }
    )
};

const out_login_api = () => {
    return axios.delete(baseURL + `/auth/login`,
        {},
        {
            withCredentials: true,
            headers: {'API-KEY': 'c2b2731d-a743-4e80-8839-a61262457b3d'},
        }
    )
};

export default {
    set_auth_data,
    set_profile,
    get_all_users,
    get_on_page_changed,
    set_unfollow,
    set_follow,
    update_user_status,
    get_user_status,
    set_login_api,
    out_login_api,
}
