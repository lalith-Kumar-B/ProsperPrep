import React from 'react'
import {Routes,Route,useParams} from 'react-router-dom';
import ContactFormPhone from './components/forms/ContactFormPhone.jsx'
import HomePage from './pages/HomePage.jsx'
import SearchVid from './pages/SearchVid.jsx';
import Quiz from './pages/Quiz.jsx';
import FinNews from './pages/FinNews.jsx';
import Recommendation from './pages/Recommendation.jsx';
function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/SearchVid' element={<SearchVid/>}/>
            <Route path='/Quiz' element={<Quiz/>}/>
            <Route path='/FinNews' element={<FinNews />}/>
            <Route path='/Recommendation' element={<Recommendation/>}/>
            <Route path='/Contact' element={<ContactFormPhone display={"block"}/>} />
        </Routes>
    </div>
  )
}

export default AllRoutes