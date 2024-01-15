import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider, Heading } from '@chakra-ui/react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <Heading>Tic tac toe Gamee</Heading>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
