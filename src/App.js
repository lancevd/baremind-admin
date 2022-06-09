import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sideBar/Sidebar";
// import AdminSidebar from "./components/sideBar/adminSideBar";
import Dashboard from "./pages/dashboard/Dashboard";
import { Body, Container, MainWrapper } from "./styled/Main";
import Topbar from "./components/topbar/Topbar";
import sideBarList from './sidebar'


const App = () => {
  const [navTitle, setNavTitle] = useState("Dashboard");
  return (
    <Router>
      <Container>
        <Sidebar />
        <MainWrapper>
          <Topbar title={navTitle} />
          <Body>
            <Routes>
              <Route
                path="dashboard"
                element={<Dashboard setNavTitle={setNavTitle} />}
              />
              {/* User Route */}
              <Route
                path="/"
                element={<Dashboard setNavTitle={setNavTitle} />}
              />
              {/* <Route
                path="meditation"
                element={<Meditation setNavTitle={setNavTitle} />}
              /> */}
              
            </Routes>
          </Body>
        </MainWrapper>
      </Container>
    </Router>
  );
};

export default App;
