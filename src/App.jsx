import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/layout/Footer/Index'
import Navbar from './components/layout/Navbar/Index'
import Container from './components/layout/Container/Index'
import Home from './components/pages/Home/Index'
import Projects from './components/pages/Projects/Index'
import NewProject from './components/pages/NewProject/Index'
import Company from './components/pages/Company/Index'
import Contact from './components/pages/Contact/Index'
import Project from './components/pages/Project/Index'

function App() {
  return (
    <Router>
      <Navbar />
        <Container customClass="min-height">
      <Routes>
          <Route  path="/" element={<Home/>} />
        
          <Route path="/projects" element={<Projects/>} />
           
          <Route path="/company"  element={<Company />} />
          
          <Route path="/contact" element={< Contact/>} />
            
          <Route path="/newproject" element={<NewProject/>} />  
           
          <Route path="/project/:id"  element={<Project/>} />
           
      </Routes>
        </Container>
      <Footer />
    </Router>
  )
}

export default App
