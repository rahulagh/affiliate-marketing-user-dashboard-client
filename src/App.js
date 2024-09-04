import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import Home from './components/user/Home/Home';
import BillingInfoForm from './components/user/BillingInfoForm/BillingInfoForm';
import ProductList from './components/user/ProductsList/ProductsList';
import MarketingStatusDashboard from './components/user/MarketingStatusDashboard/MarketingStatus';
import Header from './components/global/Header';
import SignUpForm from './components/user/SignupForm/SignupForm';
import ConfirmationMessage from './components/user/ConfirmationMsg/ConfirmationMsg';
import { MainContent, AppContainer } from './App.styles';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmitSuccess = () => {
    setShowConfirmation(true);
    setTimeout(() => {
      setShowConfirmation(false);
      setIsLoggedIn(true);
    }, 3000); // Show confirmation for 3 seconds before logging in
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <AppContainer>
          <Header isLoggedIn={isLoggedIn} />
          <MainContent>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/login"
                element={
                  isLoggedIn ? (
                    <Navigate to="/" />
                  ) : showConfirmation ? (
                    <ConfirmationMessage />
                  ) : (
                    <SignUpForm onSubmitSuccess={handleSubmitSuccess} />
                  )
                }
              />
              <Route
                path="/billing"
                element={isLoggedIn ? <BillingInfoForm /> : <Navigate to="/login" />}
              />
              <Route
                path="/products"
                element={isLoggedIn ? <ProductList /> : <Navigate to="/login" />}
              />
              <Route
                path="/marketing"
                element={isLoggedIn ? <MarketingStatusDashboard /> : <Navigate to="/login" />}
              />
            </Routes>
          </MainContent>
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
};

export default App;