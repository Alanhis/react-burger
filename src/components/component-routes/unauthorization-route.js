import { Route, Redirect, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
export function UnauthorizationRoute({ children, ...rest }) {
    const data = useSelector(store => store);
    const location = useLocation().pathname

    return (
        <Route
            {...rest}
            render={() => (
                !localStorage.getItem('accessToken') ?
                    (
                        (location === '/reset-password'
                            ? (data.auth.isPasswordReguest ? (children) : (<Redirect to='/' />))
                            : (children))
                    )
                    :
                    (<Redirect to='/' />)
            )
            }
        />
    );
} 