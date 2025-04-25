import "../app/page.css";
import Account from "./Account";
import Finance from "./Finance";
import Feedback from "./Feedback";

export default function Main() {
  return (
    <>
      <main className="col-start-2 row-start-2 m-6 bg-white Main">
        <div className="flex gap-4 h-400px mainContent">
          <Account />
          <Finance />
          <Feedback />
        </div>
      </main>
    </>
  );
}
