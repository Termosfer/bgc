import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
