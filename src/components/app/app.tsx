import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MainPage } from '../pages/main-page';
import AppHeader from '../app-header/app-header';
import { LoginPage } from '../pages/login-page';
import { RegistrationPage } from '../pages/registration-page';
import { ForgotPasswordPage } from '../pages/forgot-password-page';
import { ResetPasswordPage } from '../pages/reset-password-page';
import { ProfilePage } from '../pages/profile-page';
import React from 'react';
import { ProtectedRoute } from '../protected-route/protected-route';
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
            <Route path="/login" exact={true}>
              <LoginPage />
            </Route>
            <Route path="/register" exact={true}>
              <RegistrationPage />
            </Route>
            <Route path="/forgot-password" exact={true}>
              <ForgotPasswordPage />
            </Route>
            <Route path="/reset-password" exact={true}>
              <ResetPasswordPage />
            </Route>
            <ProtectedRoute path="/profile">
              <ProfilePage />
            </ProtectedRoute>
          </Switch>
        </div>
      </React.StrictMode>
    </Router>
  );
}
