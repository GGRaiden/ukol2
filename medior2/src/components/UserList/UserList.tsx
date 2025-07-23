'use client';

import { ReactElement } from 'react';
import { IUser, useUser } from '@/types/user';
import UserCard from './components/UserCard';
import style from './UserList.module.css';

interface IUserListProps {
  users: IUser[];
}

const UserList = ({ users }: IUserListProps): ReactElement => {
  const { setCurrentUser } = useUser();

  const handleUserClick = (user: IUser): void => {
    setCurrentUser(user);
  };

  return (
    <div className={style.userList}>
      <h2 className={style.title}>Users</h2>
      <div className={style.cards}>
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onUserClick={handleUserClick}
          />
        ))}
      </div>
    </div>
  );
};

export default UserList;
