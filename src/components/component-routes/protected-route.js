import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export function ProtectedRoute({ children, ...rest }) {
    const data = useSelector(store => store);
    return (
        <Route
            {...rest}
            render={() => (
                localStorage.getItem('refreshToken') ? (children) : (<Redirect to='/login' />)
            )
            }
        />
    );
} 