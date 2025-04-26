import "../app/page.css";
import Image from "next/image";
export default function Navbar() {
  return (
    <>
      <div className="col-start-2 row-start-1 flex items-center justify-center navigationBar">
        <div className="flex ml-auto gap-4 mr-8 mb-2">
          <button className="mt-3 ">&#10049;</button>
          <Image
            className="w-10 h-10 rounded-full  LogoImage  mt-3"
            src="/logo.png"
            alt="LogoImage"
          />
        </div>
      </div>
    </>
  );
}
