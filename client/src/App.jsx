import {Routes,Route} from 'react-router-dom'

import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import Register from './components/register/Register'
import RecipeCreate from './components/recipe-create/RecipeCreate'

function App() {

  return (
    <div>
      <Header/>

      <main>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={ <Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/recipes/create' element={<RecipeCreate/>}/>
        </Routes>
      </main>

    </div>
  )
}

export default App
