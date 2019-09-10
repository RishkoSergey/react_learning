import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, 
         setIsFetching } from '../../redux/users-reducer';
import { connect } from 'react-redux';
import React from 'react';
import Users from './Users';
import * as axios from 'axios';
import preloader from '../../assets/images/preloader.svg';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}
                  &count=${this.props.pageSize}`).then(response => {
            this.props.setIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}
                  &count=${this.props.pageSize}`).then(response => {
            this.props.setIsFetching(false);
            this.props.setUsers(response.data.items);
        })
    }
    render() {
        return <>
            { this.props.isFetching 
                ? <img src={preloader} /> 
                :  <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                          currentPage={this.props.currentPage} users={this.props.users}
                          follow={this.props.follow} unfollow={this.props.unfollow}
                          onPageChanged={this.onPageChanged} /> 
            }
        </>    
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setIsFetching
})(UsersContainer);



