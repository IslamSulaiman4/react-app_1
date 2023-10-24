import Footer from "./Footer";
import Navbar from "./Navbar";
import Products from "./Products";


export default function App(){
  return(
    <>
<div className="container">
    <Navbar />
    <Products />
    <Footer  />
</div>
    </>
  );
}