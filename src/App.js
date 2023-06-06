import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/Root';
import ProductsPage from './pages/Products';
import UsersPage from './pages/Users';
import { loader as usersLoader } from './pages/Users';
import { loader as userDetailLoader } from './components/Users/UserDetail';
import { loader as postsLoader } from './components/Posts/PostsList';
import PostsPage from './pages/Posts';
import ToDoPage from './pages/ToDo';
import { checkAuthLoader } from './util/auth';
import SignIn from './pages/SignIn';
import UserDetail from './components/Users/UserDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <ProductsPage /> },
      {
        path: 'users',
        element: <UsersPage />,
        loader: usersLoader,
      },
      {
        path: 'users/:userId',
        id: 'event-detail',
        element: <UserDetail />,
        loader: userDetailLoader,
      },
      {
        path: 'posts',
        id: 'posts',
        element: <PostsPage />,
        loader: postsLoader,
      },
      {
        path: 'todo',
        element: <ToDoPage />,
        loader: checkAuthLoader,
      },
      {
        path: 'sign-in',
        element: <SignIn />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
