import { Route,Routes } from 'react-router-dom'
import About from '../../pages/About'
import Portfolio from '../../Portfolio'
import Contact from '../../pages/Contact'
import Project from '../../pages/Project'
// import Skills from '../../pages/Skills'
import GetAllProjects from '../projects/GetAllProjects'
import ReactProject from '../projects/ReactProject'

import SkillsPage from '../../pages/Skills'


function AppRouter() {
  return (
    <Routes>
        <Route path='/' element={<Portfolio/>} />
        <Route path="/about" element={<About />}/>
        <Route path='/contact' element={<Contact />} />
        <Route path='/project' element={<Project/>} />
        <Route path='/skills' element={<SkillsPage />} />
        <Route path='/project/all' element={<GetAllProjects />} />
        <Route path='/project/react' element={<ReactProject />} />
        {/* <Route path='/conduct' element/> */}
    </Routes>
   
  )
}

export default AppRouter