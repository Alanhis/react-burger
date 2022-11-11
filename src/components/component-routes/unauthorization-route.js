import { Route, Redirect, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
export function UnauthorizationRoute({ children, ...rest }) {
    const data = useSelector(store => store);
    const location = useLocation().pathname
    console.log(location)
    return (
        <Route
            {...rest}
            render={() => (
                !data.auth.autorization ?
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