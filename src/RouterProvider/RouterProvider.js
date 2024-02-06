import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "../Components/Home/Home";
import Layout from "../Components/Layout";
import Layout2 from "../Components/Layout2";
import MainCom from "../Components/D4/Main/Main";
import Githube from "../Components/Github/Githube";
import Service from "../Components/Services/Service";
import MyWork from "../Components/Portfolio/MyWork";
import ContectMe from "../Components/ContactMe/ContectMe";

export default function RouterProvider(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}
        />
          <Route path="/D4Experiments" element={ <Layout2>< MainCom/></Layout2>} />
          <Route path="/github/codepath26" element={<Layout2><Githube/></Layout2> } />
          <Route path="/service" element={ <Layout> <Service/> </Layout>} />
          <Route path="/mywork" element={ <Layout> <MyWork /> </Layout>} />
          <Route path="/contactus" element={ <Layout> <ContectMe /> </Layout>} />
      </Routes>
    </Router>
  )

}
