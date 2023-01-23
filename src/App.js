import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignIn from './components/SignIn';
import GlobalStyle from './globalStyles';
import Home from './pages';
import { UserAuthContextProvider } from './contexts/AuthContext'
import AfterLogin from './pages/AfterLogin';
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import StakeMainPage from './pages/stakePages';
const activeChainId = ChainId.BinanceSmartChainTestnet;

function App() {
  return (
      <Router>
        <ThirdwebProvider
                desiredChainId={activeChainId}>
        <UserAuthContextProvider>
          <GlobalStyle />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path='/home' element={<AfterLogin />} />
            <Route path='/staking' element={<StakeMainPage/>}/>
          </Routes>
        </UserAuthContextProvider>
        </ThirdwebProvider>
      </Router>
      


  );
}

export default App;
