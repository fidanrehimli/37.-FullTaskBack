import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './layout/Header'
import Home from './pages/Home/Home'
import Category from './pages/Category/Category'
import Latest from './pages/Latest/Latest'
import Blog from './pages/Blog/Blog'
import Pages from './pages/Pages/Pages'
import Contact from './pages/Contact/Contact'
import Form from './pages/Form/Form'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='category' element={<Category />} />
        <Route path='latest' element={<Latest />} />
        <Route path='blog' element={<Blog />} />
        <Route path='pages' element={<Pages />} />
        <Route path='contact' element={<Contact />} />
        <Route path='form' element={<Form/>} />

      </Routes>

    </>
  )
}

export default App
