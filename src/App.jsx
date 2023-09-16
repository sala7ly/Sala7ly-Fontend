import "./index.css";
import Nav from "./components/Navbar/Nav";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Sinup from "./pages/Signup/Sinup";
import Login from "./pages/Login/Login";
import ClientProfileShow from "./pages/client/clientprofile/ClientProfileShow";
import ClientProfileEdit from "./pages/client/clientprofile/ClientProfileEdit";
import { BrowserRouter, Routes, Route ,useParams  } from "react-router-dom";
import Services from './pages/client/Services';
import  AuthProvider  from './Data/AuthContext';
import  IdProvider  from './Data/IdContext';
import  UserProvider  from './Data/UserContext';


function App ()
{
  return (
    <>
    <UserProvider>
    <IdProvider>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Nav />}>
            <Route exact path="/" element={<Home />} />{" "}
            <Route exact path="/signup" element={<Sinup />} />
            <Route exact path="/login" element={<Login />} />
          </Route>
          <Route path="/:clientId" element={<ClientWrapper />} />
          <Route path="/:clientId/edit" element={<ClientProfileEdit />} />
          <Route path="/:clientId/services" element={<Services />} />
        </Routes>
      </BrowserRouter>
      </AuthProvider>
      </IdProvider>
      </UserProvider>
      <Footer />
    </>
  );
}
function ClientWrapper() {
  const { clientId } = useParams();

  return <ClientProfileShow clientId={clientId} />;
}


export default App;

