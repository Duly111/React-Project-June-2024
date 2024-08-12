import {Routes,Route} from 'react-router-dom'

import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import Register from './register/Register'

function App() {

  return (
    <div>
      <Header/>

      <main>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={ <Login/>}/>
            <Route path='/register' element={<Register/>}/>
        </Routes>
      </main>

    </div>
  )
}

export default App
