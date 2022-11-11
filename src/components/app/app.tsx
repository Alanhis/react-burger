import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
export const url = 'https://norma.nomoreparties.space/api';

export default function App() {
  return (
    <Router>
      <React.StrictMode>
        <div className="App">
          <AppHeader />
          <Switch>
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
          </Switch>
        </div>
      </React.StrictMode>
    </Router>
  );
}
