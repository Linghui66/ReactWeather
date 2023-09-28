import { ReactElement } from "react";
import {Routes,Route} from 'react-router-dom'
import Home from "../views/Home";
import Detail from "../views/Detail";
export default function Router():ReactElement{
  return (
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/detail" element ={<Detail/>}></Route>
    </Routes>
  )
}
