import About from "./AboutMe/About";
import ContectMe from "./ContactMe/ContectMe";
import Home from "./Home/Home";
import MyWork from "./Portfolio/MyWork";
import Footer from "./RootComponents/Footer";
import Header from "./RootComponents/Header";
import Service from "./Services/Service";

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <Header />
      <main>
        <Home />
        <About />
        <Service />
        <MyWork />
        <ContectMe />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
