import "../app/page.css";
export default function Navbar() {
  return (
    <>
      <div className="col-start-2 row-start-1 flex items-center justify-center navigationBar">
        <div className="flex ml-auto gap-4 mr-8 mb-2">
          <button className="mt-3 ">&#10049;</button>
          <img
            width={40}
            height={40}
            className="rounded-full  LogoImage  mt-3"
            src="/logo.png"
            alt="LogoImage"
          />
        </div>
      </div>
    </>
  );
}
