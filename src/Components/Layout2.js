import Header2 from "./Header/Header2/Header";


const Layout2 = ({ children }) => {
  return (
    <>
      <div>
        {/* <Header   home="/"  about="/about" services="/services" portfolio="/portfolio" contact="/contact"  /> */}
        <Header2/>
        <main className="dark:bg-gray-800">{children}</main>
      </div>
    </>
  );
};

export default Layout2;
