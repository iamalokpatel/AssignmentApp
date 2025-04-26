import "../app/page.css";
export default function Finance() {
  return (
    <>
      <div className="flex-1  text-center finances ">
        <div className="onboard p-2 grid grid-rows-[80px_10px_1fr]">
          <div className=" topOnboard">
            <h1 className="text-sm font-bold mr-54">Total Financies Onboard</h1>
            <div className="flex items-center gap-2 TotalData">
              <div className="ImagesData">
                <div className="flex gap-5 onboardGross">
                  <b className="text-2xl mt-1 ml-1">14</b>
                  <p className="h-6 mt-2 text-green-500 SuccaseGraph ">
                    &#8605;7.4%
                  </p>
                </div>
              </div>
              <div className="Images mt-4">
                <ul className="flex ml-38">
                  <li>
                    <img
                      width={18}
                      height={18}
                      alt="Wrap1"
                      src="/wrap1.png"
                      className=" mb-1 object-cover flex inline rounded-full"
                    />
                  </li>
                  <li>
                    <img
                      width={18}
                      height={18}
                      alt="Wrap2"
                      src="/wrap2.png"
                      className="mb-1 object-cover flex inline rounded-full"
                    />
                  </li>
                  <li>
                    <img
                      width={18}
                      height={18}
                      alt="Wrap3"
                      src="/wrap3.png"
                      className="mb-1 object-cover flex inline rounded-full"
                    />
                  </li>
                  <li>
                    <img
                      width={18}
                      height={18}
                      alt="Wrap4"
                      src="/wrap4.png"
                      className="mb-1  object-cover flex inline rounded-full"
                    />
                  </li>
                  <li>
                    <p className="rounded-full text-xs">+7</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" middleOnboard grid grid-cols-[110px_75px_170px] gap-2 pl-4 pr-4">
            <div className="col-start-1 bg-sky-700 !h-3 rounded-lg"></div>
            <div className="col-start-2 bg-sky-500 !h-3 rounded-lg"></div>
            <div className="col-start-3 bg-sky-300 !h-3 rounded-lg"></div>
          </div>
          <div className="BottomOnboard">
            <ul
              className=" w-vh ml-10 mt-2 "
              style={{ listStyleType: "circle" }}
            >
              <li className="text-xs mr-25">
                Stage 1 (Initial Inquiry)
                <b className="ml-30 text-base ">02</b>
              </li>
              <li className="text-xs mr-25">
                Stage 2 (Document Submission)
                <b className="ml-18 text-base">07</b>
              </li>
              <li className="text-xs mr-25 ">
                Stage 3 (Training)<b className="ml-37 text-base">05</b>
              </li>
            </ul>
          </div>
        </div>

        <div className="bottomDiv welbeing ">
          <div className="Financial">
            <h1 className="mr-59 text-sm font-semibold mb-3">
              Financial Wellbeing
            </h1>
            <div className="flex">
              <div>
                <h1>
                  <b className="mr-10 text-2xl pt-2">20</b>
                </h1>
                <p className="ml-4 text-xs ">Total Financiees</p>
              </div>
              <div className="ml-50 mt-5">
                <p className="flex text-green-500 h-6 SuccaseGraph">
                  &#8605; 2.1%
                </p>
              </div>
            </div>
          </div>
          <div className="Targets flex">
            <div className="ml-8 mt-2 bg-green-200 w-68 !h-18 p-2 TargetsFirst ">
              <h1>Target </h1>
              <p>
                <b>$500,000</b>
              </p>
            </div>
            <div className="ml-10 mr-8 mt-2 bg-green-200 w-68 !h-18 p-2 TargetsSecond">
              <h1>Current</h1>
              <p>
                <b>$450,000</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
