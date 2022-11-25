import { Route, Redirect, useLocation, RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../services/store';

export function UnauthorizationRoute({
  children,
  ...rest
}: RouteProps & { children?: React.ReactNode }) {
  const data = useSelector((store: RootState) => store);
  const location = useLocation().pathname;

  return (
    <Route
      {...rest}
      render={() =>
        !document.cookie ? (
          location === '/reset-password' ? (
            data.auth.isPasswordReguest ? (
              children
            ) : (
              <Redirect to="/" />
            )
          ) : (
            children
          )
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
}
