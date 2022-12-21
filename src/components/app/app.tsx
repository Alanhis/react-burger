import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  useHistory,
} from 'react-router-dom';
import { MainPage } from '../pages/main-page';
import AppHeader from '../app-header/app-header';
import { LoginPage } from '../pages/login-page';
import { RegistrationPage } from '../pages/registration-page';
import { ForgotPasswordPage } from '../pages/forgot-password-page';
import { ResetPasswordPage } from '../pages/reset-password-page';
import { ProfilePage } from '../pages/profile-page';
import React, { useEffect } from 'react';
import { ProtectedRoute } from '../component-routes/protected-route';
import { UnauthorizationRoute } from '../component-routes/unauthorization-route';
import { Location } from 'history';
import IngredientDetails from '../ingredient-details/ingredient-details';
import Modal from '../modal/modal';
import PageStyle from '../pages/pages.module.css';
import { useAppDispatch } from '../../services/store';
import { fetchData } from '../../services/actions/ingredients';
import { FeedPage } from '../pages/feed-page';
import { FeedElement } from './feed-element/feed-element';
export const url = 'https://norma.nomoreparties.space/api';

export default function App() {
  const ModalSwitch = () => {
    const location = useLocation<{
      background?: Location<{} | null | undefined>;
    }>();
    let background = location.state && location.state.background;
    const dispatch = useAppDispatch();
    useEffect(() => {
      dispatch(fetchData());
    }, []);
    const history = useHistory<History>();
    const handleModalClose = () => {
      history.goBack(); // для react-router 5
    };
    return (
      <React.StrictMode>
        <div className="App">
          <AppHeader />
          <Switch location={background || location}>
            <Route path="/" exact={true}>
              <MainPage />
            </Route>
            <UnauthorizationRoute path="/login" exact={true}>
              <LoginPage />
            </UnauthorizationRoute>
            <UnauthorizationRoute path="/register" exact={true}>
              <RegistrationPage />
            </UnauthorizationRoute>
            <UnauthorizationRoute path="/forgot-password" exact={true}>
              <ForgotPasswordPage />
            </UnauthorizationRoute>
            <UnauthorizationRoute path="/reset-password" exact={true}>
              <ResetPasswordPage />
            </UnauthorizationRoute>
            <ProtectedRoute path={['/profile/orders/', '/profile']} exact>
              <ProfilePage />
            </ProtectedRoute>
            <Route path="/feed" exact>
              <FeedPage />
            </Route>
            <Route path="/ingredients/:ingredientId" exact={true}>
              <div className={`${PageStyle.ModalPage}`}>
                <p className="text text_type_main-medium pb-6">
                  Детали ингредиента
                </p>
                <IngredientDetails />
              </div>
            </Route>
            <Route
              path="/feed/:id"
              exact
              children={
                <div className={`${PageStyle.ModalPage}`}>
                  <FeedElement />
                </div>
              }
            />
            <ProtectedRoute
              path="/profile/orders/:id"
              exact
              children={
                <div className={`${PageStyle.ModalPage}`}>
                  <FeedElement />
                </div>
              }
            />
          </Switch>
          {background && (
            <Route
              path="/ingredients/:ingredientId"
              children={
                <Modal title="Детали ингредиента" onClose={handleModalClose}>
                  <IngredientDetails />
                </Modal>
              }
            />
          )}
          {background && (
            <Route
              path="/feed/:id"
              children={
                <Modal title="" onClose={handleModalClose}>
                  <FeedElement />
                </Modal>
              }
            />
          )}
          {background && (
            <ProtectedRoute
              path="/profile/orders/:id"
              children={
                <Modal title="" onClose={handleModalClose}>
                  <FeedElement />
                </Modal>
              }
            />
          )}
        </div>
      </React.StrictMode>
    );
  };
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ModalSwitch />
    </Router>
  );
}
