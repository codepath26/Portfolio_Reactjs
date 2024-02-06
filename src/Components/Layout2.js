import Header from "./Header/Header";

const Layout2 = ({ children }) => {
  return (
    <>
      <div>
        <Header />
        <main className="dark:bg-gray-800">{children}</main>
      </div>
    </>
  );
};

export default Layout2;
