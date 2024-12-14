import StudentContext from "./NameContext"
import StudentList from "./StudentList"
import FavouriteStudent from "./FavouriteStudent"
import { BrowserRouter, Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import "./index.css"

function App()
{
  return(
    <div>
      <BrowserRouter>
      <StudentContext>
      <Routes>
        <Route path="/" element={<StudentList/>}/>
        <Route path="/favourite" element={<FavouriteStudent/>}/>
        <Route path="/back" element ={<StudentList/>} />
        </Routes>
        </StudentContext>
      </BrowserRouter>
    </div>
        
         
      
  )
}

export default App