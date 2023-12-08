
import Header2 from "./D4/Header2/Header";




const Layout2 = ({ children }) => {
  return (
    <>
    <div>
      <Header2 />
      <main className="dark:bg-gray-800">
        {
          children
        }
      </main>
    </div>

    </>
  );
};

export default Layout2;
