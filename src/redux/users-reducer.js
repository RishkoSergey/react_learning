const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: [
        {id: 1, name: 'Gangster', city: 'Karaganda', followed: true, 
        status: 'I am not the richest, smartest or most talented person in the world, but I succeed because I keep going and going and going',
        photo: 'https://www.meme-arsenal.com/memes/f47cf328dc07b527192f75ef1aea1ad2.jpg'},

        {id: 2, name: 'Hustler', city: 'Astana', followed: false, 
        status: 'Life ain\'t about how hard you hit. It\'s about how hard you can get hit and keep moving forward',
        photo: 'http://1000chertej.ru/wp-content/uploads/2017/09/19/22203/Bezrodnyj-1.jpg'},
        
        {id: 3, name: 'Mafiozi', city: 'Almaty', followed: true, 
        status: 'Success is usually the culmination of controlling failure', 
        photo: 'https://pixanews.com/wp-content/uploads/2015/01/CahCats-pixanews-2-13.jpg'}
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, 
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
                return {
                    ...state, 
                    users: state.users.map(u => {
                        if (u.id === action.userId){
                            return {...u, followed: false}
                        }
                        return u;
                    })
                } 
        case SET_USERS:
            return {...state, users: [...state.users, action.users]}
        default: return state;
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users});

export default usersReducer;