import createStore from 'redux'
import React from 'react'
import './App.css'
import './tailwind.css'
import Header from './Header'
import HomePage from './HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Assessment3 from './Assessment3' // Import React Router
import ResultsPage from './ResultsPage'
import { Provider } from 'react-redux'
import reducer from './reducer' // Import the reducer

// Create a Redux store
const store = createStore(reducer)

function App() {
  return (
    <Provider store={store}>
      <div className='min-h-screen'>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/assessment/:id' element={<Assessment3 />} />
            <Route path='/results/:userName' element={<ResultsPage />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  )
}

export default App
