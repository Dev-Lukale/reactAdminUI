import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

import styled from "styled-components";
import Home from "./pages/Home";

const Container = styled.div`
display:flex;
 margin-top:10px;
`
// const Main = styled.div`
// flex:4;
 
// `

function App() {
  return (
    <>
      <Topbar />
      <Container>
        <Sidebar />
        <Home/>
      </Container>
  
    </>
  );
}

export default App;
