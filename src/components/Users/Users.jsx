import React from 'react';
import style from './Users.module.css';
import User from './User/User';
import userPhoto from '../../assets/images/user.png';

const Users = (props) => {
    let pages = [];
    for (let i = 1; i < Math.ceil(props.totalUsersCount / props.pageSize); i++) {
        pages.push(i);
    }

    return (
        <div>
            <div className={style.pages}>
                {
                    pages.map(p => {
                        return <span className={props.currentPage === p && style.selectedPage}
                                     onClick={() => { props.onPageChanged(p) }}>{p}</span>
                    })
                }
            </div>
            {
                props.users.map(u => <User name={u.name} city={'u.city'} followed={u.followed}
                    id={u.id} status={'u.status'} photo={u.photos.small != null ? u.photos.small : userPhoto}
                    follow={props.follow} unfollow={props.unfollow} />)
            }
        </div>
    )
}

export default Users;

    // if (props.users.length === 0){
    //     props.setUsers([
    //             {id: 1, name: 'Gangster', city: 'Karaganda', followed: true, 
    //             status: 'I am not the richest, smartest or most talented person in the world, but I succeed because I keep going and going and going',
    //             photo: 'https://www.meme-arsenal.com/memes/f47cf328dc07b527192f75ef1aea1ad2.jpg'},

    //             {id: 2, name: 'Hustler', city: 'Astana', followed: false, 
    //             status: 'Life ain\'t about how hard you hit. It\'s about how hard you can get hit and keep moving forward',
    //             photo: 'http://1000chertej.ru/wp-content/uploads/2017/09/19/22203/Bezrodnyj-1.jpg'},

    //             {id: 3, name: 'Mafiozi', city: 'Almaty', followed: true, 
    //             status: 'Success is usually the culmination of controlling failure', 
    //             photo: 'https://pixanews.com/wp-content/uploads/2015/01/CahCats-pixanews-2-13.jpg'}]
    //     );
    // }