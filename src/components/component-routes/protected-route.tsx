import { Route, Redirect } from 'react-router-dom';

import { ReactNode } from 'react';
interface Props {
  children?: ReactNode;
  path: string;
}
export function ProtectedRoute({ children, ...rest }: Props) {
  return (
    <Route
      {...rest}
      render={() =>
        localStorage.getItem('accessToken') ? (
          children
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}
