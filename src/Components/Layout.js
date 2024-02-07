import About from "./AboutMe/About";
import ContectMe from "./ContactMe/ContectMe";
import Home from "./Home/Home";
import MyWork from "./Portfolio/MyWork";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Service from "./Services/Service";


const Layout = ({ children }) => {
  return (
    <>
    <div className="w-full relative ">
      <Header home="home"  about="about" services="services" portfolio="portfolio" contact="contact" />
      <main>
        <Home />
        <About />
        <Service />
        <MyWork />
        <ContectMe />
      </main>
      <Footer />
    </div>
    </>
  );
};

export default Layout;
