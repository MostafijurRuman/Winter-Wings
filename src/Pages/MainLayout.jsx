import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Nav from "../Components/NavBar/Nav";


export default function MainLayout() {
  return (
    <>
         <header>
            <Nav></Nav>
         </header>

         <main>
            <Outlet></Outlet>
         </main>

         <footer>
            <Footer></Footer>
         </footer>
    </>
  )
}
