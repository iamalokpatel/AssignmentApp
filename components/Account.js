import "../app/page.css";
export default function Account() {
  return (
    <>
      <div className="flex-1  pl-1 text-center account">
        <div className="account1">
          <div className="process">
            <h2 className="!ml-12">Account Progress</h2>
            <div className="outerCircle">
              <div className="innerCircle">
                <b className=" Data">85% </b>
              </div>
            </div>
          </div>
          <div className="steps ">
            <div className="completed">
              <h1 className="pt-2 mr-28">
                <b>Steps Completed</b>
              </h1>
              <ul
                className=" w-vh ml-10 mt-2"
                style={{ listStyleType: "circle" }}
              >
                <li>
                  <label className="mr-25" htmlFor="profile">
                    Profile Setup
                  </label>
                  <input
                    className="accent-green-500"
                    type="checkbox"
                    id="profile"
                    name="profile"
                  />
                </li>

                <li>
                  <label className="mr-23" htmlFor="training">
                    Initial Training
                  </label>
                  <input
                    type="checkbox"
                    id="training"
                    name="training"
                    className="accent-green-500"
                  />
                </li>

                <li>
                  <label className="mr-17" htmlFor="documents">
                    Legal Documents
                  </label>
                  <input
                    type="checkbox"
                    id="documents"
                    name="documents"
                    className="accent-green-500"
                  />
                </li>
              </ul>
            </div>
            <div className="remaining ">
              <h1 className="pt-2 mr-26">
                <b>Steps Remaining</b>
              </h1>
              <ul
                className=" w-vh ml-10 mt-2"
                style={{ listStyleType: "circle" }}
              >
                <li>
                  <label className="mr-13" htmlFor="Financial">
                    Financial Integration
                  </label>
                  <input
                    type="checkbox"
                    id="Financial"
                    name="Financial"
                    className="accent-green-500"
                  />
                </li>

                <li>
                  <label className="mr-26" htmlFor="Review">
                    Final Review
                  </label>
                  <input
                    type="checkbox"
                    id="Review"
                    name="Review"
                    className="accent-green-500"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
