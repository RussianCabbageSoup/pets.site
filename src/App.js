import React from "react";
import { Routes, Route } from "react-router-dom";
import Full_page_1 from "./components/first page/full_page_1";
import Full_page_2 from "./components/second page/full_page_2";
import MyPage from "./components/personalAccPage/MyPage";
import AnimalPage from "./components/AnimalPageFiles/AnimalPage";

function App() {      
  return ( 
    <div>
      <Routes>                                                                                        
        <Route path={'/'} element={<Full_page_1/>}/>
        <Route path={'/foundAnimal'} element={<Full_page_2/>}/>
        <Route path={'/myPage'} element={<MyPage/>}/>
        <Route path={'/animal/:id'} element={<AnimalPage/>}></Route>
      </Routes>    
    </div>                                                    
  );                                                                                                  
}                                                                                                  
                                                                                                  
export default App;                                                                                                  
