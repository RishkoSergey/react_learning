import React from 'react';
import style from './Users.module.css';
import User from './User/User';

const Users = (props) => {
    console.log(props.users);
    let usersElements = props.users.map(u => <User name = {u.name} city = {u.city} followed = {u.followed}
                                                   id = {u.id} status = {u.status} photo = {u.photo}
                                                   follow = {props.follow} unfollow = {props.unfollow} />);                                              
    return (
        <div>
            {usersElements}
        </div>
    )
}

export default Users;