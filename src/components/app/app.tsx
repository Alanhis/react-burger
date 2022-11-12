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
import React from 'react';
import { ProtectedRoute } from '../component-routes/protected-route';
import { UnauthorizationRoute } from '../component-routes/unauthorization-route';
import { Location } from 'history';
import IngredientDetails from '../ingredient-details/ingredient-details';
import Modal from '../modal/modal';
import PageStyle from '../pages/pages.module.css';
export const url = 'https://norma.nomoreparties.space/api';
export default function App() {
  const ModalSwitch = () => {
    const location = useLocation<{
      background?: Location<{} | null | undefined>;
    }>();
    let background = location.state && location.state.background;

    const history = useHistory();
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
            <ProtectedRoute path="/profile">
              <ProfilePage />
            </ProtectedRoute>
            <Route path="/ingredients/:ingredientId" exact={true}>
              <div className={`${PageStyle.ModalPage}`}>
                <p className="text text_type_main-medium pb-6">
                  Детали ингредиента
                </p>
                <IngredientDetails />
              </div>
            </Route>
          </Switch>
          {background && (
            <Route
              path="/ingredients/:ingredientId"
              children={
                <Modal onClose={handleModalClose}>
                  <IngredientDetails />
                </Modal>
              }
            />
          )}
        </div>
      </React.StrictMode>
    );
  };
  return (
    <Router>
      <ModalSwitch />
    </Router>
  );
}
