import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createClient, Provider } from 'urql';
const client = createClient({
    url:'http://localhost:4000/graphql',
  });