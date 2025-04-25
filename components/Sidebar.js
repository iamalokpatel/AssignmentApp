import "../app/page.css";
export default function Sidebar() {
  return (
    <>
      <div className="row-span-3 p-4 SideNavigation grid grid-rows-[1fr_100px]">
        <div className="row-start-1 Links">
          <a className="HomeLink" href="">
            Home
          </a>
          <a href=""> Stages & Cheacklists</a>
          <a href=""> Upload Docs</a>
          <a href=""> Praefered Vendors</a>
          <a href=""> Take Stack</a>
          <a href=""> Targets</a>
          <a href=""> Zee Sales Target</a>
          <a href=""> MAI Settings</a>
          <a href="">
            Pending Questions
            <p className="PendingQs">3</p>
          </a>
        </div>
        <button className="row-start-2 mr-36 text-gray-400">Logout</button>
      </div>
    </>
  );
}
