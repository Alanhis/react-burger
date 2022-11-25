import { Route, Redirect, useLocation } from 'react-router-dom';

import { ReactNode } from 'react';
interface Props {
  children?: ReactNode;
  path: string;
}
export function ProtectedRoute({ children, ...rest }: Props) {
  const location = useLocation().pathname;
  console.log('protected');
  return (
    <Route
      {...rest}
      render={() =>
        localStorage.getItem('accessToken') ? (
          children
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        )
      }
    />
  );
}
