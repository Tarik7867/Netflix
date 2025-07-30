import React from 'react'
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import App from './screens/home/App'
import { MovieDetails } from './screens/movie/MovieDetails'
import LoginModal from './components/ui/LoginModal'
import { Layot } from './components/ui/Layot'

export function MainRoutes(){
    return (
     <Router>
        <Routes>
          <Route element = {<Layot />}>
            <Route
            path='/'
            element={<App/>}
            />
            <Route
            path='/movie/:id'
            element={<MovieDetails/>}
            />
            <Route path="/login"
             element={<LoginModal />}
              />
            </Route>
        </Routes>
    </Router>
    )
}