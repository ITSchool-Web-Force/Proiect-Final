import MyNavbar from "./MyNavbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div>
      <MyNavbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
