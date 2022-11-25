import { Route, Redirect, useLocation, RouteProps } from 'react-router-dom';

import { ReactNode } from 'react';

export function ProtectedRoute({
  children,
  ...rest
}: RouteProps & { children?: React.ReactNode }) {
  const location = useLocation().pathname;

  return (
    <Route
      {...rest}
      render={() =>
        document.cookie ? (
          children
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        )
      }
    />
  );
}
