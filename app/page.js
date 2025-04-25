import "./page.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-[248px_1fr] grid-rows-[50px_1fr_200px] min-h-screen">
        <Sidebar />
        <Navbar />
        <Main />
        <Footer />
      </div>
    </>
  );
}
