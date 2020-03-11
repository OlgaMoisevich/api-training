import Api from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const SET_DEFAULT_BUTTON = 'SET_DEFAULT_BUTTON';


let initialState = {
    users: [
        //статические данные
        // {
        //     id: '1',
        //     photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQG-8YvBQ8-fLzhFkEBkryb4BzeHmhtdabVl1FpwzxwV0MfDhTi',
        //     followed: true,
        //     fullName: 'Svetlana M.',
        //     status: 'I am so pretty',
        //     location: {city: 'Minsk', country: 'Belarus,'}
        // },
        // {
        //     id: '2',
        //     photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQG-8YvBQ8-fLzhFkEBkryb4BzeHmhtdabVl1FpwzxwV0MfDhTi',
        //     followed: false,
        //     fullName: 'Andrew T.',
        //     status: 'I like football!!!',
        //     location: {city: 'Minsk', country: 'Belarus,'}
        // },
        // {
        //     id: '3',
        //     photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQG-8YvBQ8-fLzhFkEBkryb4BzeHmhtdabVl1FpwzxwV0MfDhTi',
        //     followed: true,
        //     fullName: 'Dmitry K.',
        //     status: 'I am looking for a Job right now...',
        //     location: {city: 'Minsk', country: 'Belarus,'}
        // },
        // {
        //     id: '4',
        //     photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQG-8YvBQ8-fLzhFkEBkryb4BzeHmhtdabVl1FpwzxwV0MfDhTi',
        //     followed: false,
        //     fullName: 'Aleks',
        //     status: 'I am a boss',
        //     location: {city: 'Minsk', country: 'Belarus,'}
        // },
    ],
    totalUsersCount: 20,
    pageSize: 5,
    currentPage:1,
    isFetching: false,
    defaultButton: [],
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((item) => {
                    if (action.id === item.id) {
                        return {...item, followed: false};
                    }
                    return item;
                }),
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((item) => {
                    if (action.id === item.id) {
                        return {...item, followed: true};
                    }
                    return item;
                })
            };
        case SET_USERS:
            return {
              ...state, users: [...action.users]
              // ...state, users: [...state.users, ...action.users]
            };
        case SET_TOTAL_USERS_COUNT:
        return {
          ...state, totalUsersCount: action.totalCount,
        };
        case SET_CURRENT_PAGE:
        return {
          ...state, currentPage: action.currentPage,
        };
        case SET_IS_FETCHING:
        return {
            ...state, isFetching: action.isFetch,
        };
        case SET_DEFAULT_BUTTON:
            // debugger
        return {
            ...state, defaultButton: action.bool?
            [...state.defaultButton, action.userId]: state.defaultButton.filter(item=>item !== action.userId),
        };
        default:
            return state;
    }
};

export const setFollow = (userId) => ({type: FOLLOW, 'id': Number(userId)});
export const setUnFollow = (userId) => ({type: UNFOLLOW, 'id': Number(userId)});
export const setUsers = (users)=>({type: SET_USERS, 'users': users});
export const setTotalUsersCount = (totalCount)=>({type: SET_TOTAL_USERS_COUNT, 'totalCount': totalCount});
export const setCurrentPage = (page)=>({type: SET_CURRENT_PAGE, 'currentPage': page});
export const setIsFetching =(isFetch)=>({type: SET_IS_FETCHING, 'isFetch': isFetch});
export const setDefaultButton =(bool, userId)=>({type: SET_DEFAULT_BUTTON, 'bool': bool, 'userId': userId});


export const getUsersThunkCreator = (currentPage, pageSize, totalUsersCount) => {
    return (dispatch) => {
        dispatch(setIsFetching(true));
        Api.get_all_users(currentPage, pageSize).then(response => {
            dispatch(setIsFetching(false));
            dispatch(setUsers(response.data.items));
            if (!totalUsersCount) {
                dispatch(setTotalUsersCount(response.data.totalCount));
            }
        });
    }
};

export const getOnPageChangeThunkCreator = (pageNumber, pageSize, totalUsersCount) => {
    return (dispatch) => {
        dispatch(setIsFetching(true));
        dispatch(setCurrentPage(pageNumber));
        Api.get_on_page_changed(pageNumber, pageSize).then(response => {
            dispatch(setIsFetching(false));
            dispatch(setUsers(response.data.items));
            if (!totalUsersCount) {
                dispatch(setTotalUsersCount(response.data.totalCount));
            }
        });
    }
};

export const followThunkCreator = (event, itemId) => {
    return (dispatch) => {
        dispatch(setDefaultButton(true, itemId));
        event.persist();
        Api.set_unfollow(itemId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setFollow(event.target.dataset.id));
            }
        }).catch(response => response);
        setTimeout(() => {
            dispatch(setDefaultButton(false, itemId));
        }, 15000)
    }
};

export const unfollowThunkCreator = (event, itemId) => {
    return (dispatch) => {
        dispatch(setDefaultButton(true, itemId));
        event.persist();
        Api.set_unfollow(itemId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUnFollow(event.target.dataset.id))
            }
        }).catch(response => response);
        setTimeout(() => {
            dispatch(setDefaultButton(false, itemId));
        }, 15000)
    }
};

