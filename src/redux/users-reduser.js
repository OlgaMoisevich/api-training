const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
    users: [
        {
            id: '1',
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQG-8YvBQ8-fLzhFkEBkryb4BzeHmhtdabVl1FpwzxwV0MfDhTi',
            followed: true,
            fullName: 'Aleks',
            status: 'I am a boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: '1',
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQG-8YvBQ8-fLzhFkEBkryb4BzeHmhtdabVl1FpwzxwV0MfDhTi',
            followed: true,
            fullName: 'Aleks',
            status: 'I am a boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: '1',
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQG-8YvBQ8-fLzhFkEBkryb4BzeHmhtdabVl1FpwzxwV0MfDhTi',
            followed: true,
            fullName: 'Aleks',
            status: 'I am a boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: '1',
            photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQG-8YvBQ8-fLzhFkEBkryb4BzeHmhtdabVl1FpwzxwV0MfDhTi',
            followed: true,
            fullName: 'Aleks',
            status: 'I am a boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
    ],
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;
    }
};

export const followAC = () => ({type: FOLLOW});
export const unfollowAC = (text) => ({type: UNFOLLOW});

