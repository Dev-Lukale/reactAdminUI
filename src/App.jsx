import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

import styled from "styled-components";
import Home from "./pages/Home";
import UserList from "./pages/UserList";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import User from "./pages/User";
import NewsUser from "./pages/NewsUser";
import ProductsList from "./pages/ProductsList";
import Product from "./pages/Product";
import NewProduct from "./pages/NewProduct";
import UnderWork from "./pages/UnderWork";

const Container = styled.div`
display:flex;
 margin-top:10px;
`
// const Main = styled.div`
// flex:4;

// `

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <Container>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/product/:productId" element={ <Product />} />
          <Route path="/newUser" element={<NewsUser />} />
          <Route path="/newproduct" element={<NewProduct />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="*" element={<UnderWork />} />
        </Routes>
      </Container>
    </BrowserRouter>

  );
}

export default App;
