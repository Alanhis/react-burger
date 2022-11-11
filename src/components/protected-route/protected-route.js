import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
export function ProtectedRoute({ children, ...rest }) {
    const data = useSelector(store => store);
    return (
        <Route
            {...rest}
            render={() => (
                data.auth.autorization ? (children) : (<Redirect to='/login' />)
            )
            }
        />
    );
} 