import { redirect } from 'react-router-dom';

export function getAuthToken() {
  const token = localStorage.getItem('token');

  if (!token) {
    return null;
  }

  return token;
}

export function checkAuthLoader() {
  const token = getAuthToken();
  if (!token) {
    return redirect('/sign-in');
  } else {
    return null;
  }
}
