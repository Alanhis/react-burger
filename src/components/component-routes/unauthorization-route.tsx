import { Route, Redirect, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ReactNode } from 'react';
import { RootState } from '../../services/store';
interface Props {
  children?: ReactNode;
  path: string;
  exact?: boolean;
}
export function UnauthorizationRoute({ children, ...rest }: Props) {
  const data = useSelector((store: RootState) => store);
  const location = useLocation().pathname;
  console.log('unprotected');
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
