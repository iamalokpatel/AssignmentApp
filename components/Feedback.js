import "../app/page.css";
export default function Feedback() {
  return (
    <>
      <div className="flex-1 text-center feedBack">
        <div className="Insights">
          <h2 className="pl-3 text-sm font-bold !font-Inter">
            Key Insights & FeedBack
          </h2>
          <div className="salesGrowth grid grid-cols-[200px_200px] ">
            <div className="Growth">
              <h1>
                <b className="text-2xl mr-20">10%</b>
              </h1>
              <p className="mb-2 text-sm mr-10">Sales Growth</p>
            </div>
            <div className="Performer ml-18">
              <img alt="Performer" src="/topPerformer.png" className="" />
              <p className="mb-1 !text-xs !mb-8">Top Performer</p>
            </div>
          </div>
          <div className="feedBacks">
            <h2 className="pt-4">Feedback</h2>
            <div className="">
              <ul className="ml-8 pb-2" style={{ listStyleType: "circle" }}>
                <li className="mr-6 text-sm">
                  Franchisees are more detailed training materials.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bottomDiv prospectLeads">
          <h1></h1>
          <div className="leadsCards">
            <h2 className=" font-bold">Perfects Leads</h2>
            <div>
              <img alt="Wade" src="/wade.png" /> <h3>Wade Waren</h3>
              <p className="ml-26 text-sm">Stage:Initial Inquiry</p>
            </div>
            <div>
              <img alt="Ava" src="/ava.png" /> <h3>Ava Wright</h3>
              <p className="ml-28 text-sm">Stage:Initial Inquiry</p>
            </div>
            <div>
              <img alt="Cody" src="/cody.png" /> <h3>Cody Fisher</h3>
              <p className="ml-25 text-sm ">Stage:Initial Inquiry</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
