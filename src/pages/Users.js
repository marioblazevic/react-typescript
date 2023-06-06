import { Suspense } from 'react';
import UsersList from '../components/Users/UsersList';
import { useLoaderData, defer, Await } from 'react-router-dom';

const UsersPage = (props) => {
  const { data } = useLoaderData();

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Here you can see all the users:</h1>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={data}>
          {(loadedData) => <UsersList users={loadedData.users} />}
        </Await>
      </Suspense>
    </>
  );
};

async function loadUsers() {
  const response = await fetch('https://dummyjson.com/users?limit=6');
  const resData = await response.json();
  return resData;
}

export function loader() {
  return defer({
    data: loadUsers(),
  });
}

export default UsersPage;
