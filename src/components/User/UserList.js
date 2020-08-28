import React from 'react';
import { useSelector } from 'react-redux';
import UserCard from './UserCard';

const UserList = () => {

	const users = useSelector((state) => state.data.data);

	let content =  users.map((user, index) => (
		<UserCard key={index} user={user} />
	));
    return content;
}

export default UserList;