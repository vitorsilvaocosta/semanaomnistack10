import React from 'react';
import {StatusBar , YellowBox} from 'react-native';

import Routes from './src/routes';

YellowBox.ignoreWarnings(["Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?"]);

// <> and </> é um fragment elimina a utilizacao da div
export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7d40e7"></StatusBar>
      <Routes></Routes>
    </>
  );
}
