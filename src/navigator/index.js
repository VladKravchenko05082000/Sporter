import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PrivateRoute, SignInScreen } from 'screens';
import NotFoundPage from 'components/error-notfoundpage';

const Navigator = () => {
   return (
      <Routes>
         <Route path="/" element={<SignInScreen />} />
         <Route element={<PrivateRoute />} />
         <Route element={<NotFoundPage />} />
      </Routes>
   );
};

export default Navigator;
