import {Routes,Route, Router} from 'react-router-dom'

import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import Register from './components/register/Register'
import RecipeCreate from './components/recipe-create/RecipeCreate'
import RecipeList from './components/recipe-list/RecipeList'
import RecipeDetails from './components/recipe-details/RecipeDetails'
import Logout from './components/logout/Logout'
import { AuthContextProvider } from './context/AuthContext'
import RecipeEdit from './components/recipe-edit/RecipeEdit'

function App() {

  return (
    <AuthContextProvider>
      <Header/>

      <main>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={ <Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/recipe' element={<RecipeList/>}/>
            <Route path='/recipe/:recipeId/details' element={<RecipeDetails/>}/>
            <Route path='//recipe/:recipeId/edit' element={<RecipeEdit/>}/>
            <Route path='/recipes/create' element={<RecipeCreate/>}/>
            <Route path='/logout' element={<Logout/>}/>
        </Routes>
      </main>

    </AuthContextProvider>
  )
}

export default App
