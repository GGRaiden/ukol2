import { ReactElement } from 'react';
import { Home, MainText, UserList } from '@/components';
import { IUser } from '@/types/user';
import publicRuntimeConfig from '@/utils/config';

const fetchUsers = async (): Promise<IUser[]> => {
  const response = await fetch(publicRuntimeConfig.usersUrl);

  if (!response.ok) {
    throw new Error('Nepodařilo se načíst uživatele');
  }

  return response.json();
};

const Page = async (): Promise<ReactElement> => {
  const users = await fetchUsers();

  return (
    <>
      <Home />
      <MainText />
      <UserList users={users} />
    </>
  );
};

export default Page;
