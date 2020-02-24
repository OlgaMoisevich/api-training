const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const  SET_USERS = 'SET_USERS';

let initialState = {
    users: [
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
              ...state, users: [...state.users, ...action.users]
            };
        default:
            return state;
    }
};

export const followAC = (userId) => ({type: FOLLOW, 'id': Number(userId)});
export const unfollowAC = (userId) => ({type: UNFOLLOW, 'id': Number(userId)});
export const setUsersAC = (users)=>({type: SET_USERS, 'users': users});

