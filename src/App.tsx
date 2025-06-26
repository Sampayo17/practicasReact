import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  Mybox from '../src/components/Mybox'
import './App.css'
import Menu from './components/Menu'
import Test from './components/Test'



function App() {

  return (
    <>
    <div className='bg-blue-700'>
    <BrowserRouter>
  
    <Menu/>
    <Routes>
      <Route  path='/' element={<Mybox title='Lista de personajes'/>}>
       
      </Route>
       <Route  path='test' element={<Test></Test>}>
   
      </Route>
    </Routes>
    </BrowserRouter>
    </div>
    </>
    
  )
}

export default App

