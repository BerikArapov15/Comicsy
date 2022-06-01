import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/navbar/Navbar";
import AuthContextProvider from "./contexts/AuthContextProvider";
import CartContextProvider from "./contexts/CartContextProvider";
import CrudContextProvider from "./contexts/CrudContextProvider";
import MainRoutes from "./Routes/MainRoutes";

function App() {
    return (
      <>
      <AuthContextProvider>
      <CrudContextProvider>
      <CartContextProvider>
        <Navbar/>
        <MainRoutes/>
        <Footer/>
      </CartContextProvider>
      </CrudContextProvider>
      </AuthContextProvider>
      </>
    );
  }
  
  export default App;