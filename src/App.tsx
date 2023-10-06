import { Counter } from './features/counter/Counter'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Login from './features/components/login'
// import Loading from './features/toolkit/loading/Loading'
// import Model from './features/model/model'

function App() {
  return (
    <>
      <Routes>
      <Route path='product' element={<Product/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='reginster' element={<Reginster/>}/>        
      </Routes>
    </>
  )
}

export default App
