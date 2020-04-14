import React, { useCallback, useState } from 'react'
import axios from 'axios';
import './App.css';
import NewsPage from './pages/NewsPage';
import {Route} from 'react-router-dom'

function App() {
  return (
    <Route path="/:category?" component={NewsPage} />
      )
}

export default App;
