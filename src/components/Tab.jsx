import React from "react";
import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

export const Section3 = () => {
  const [key, setKey] = useState("home");
  return (
    <div>
      <section className="py-sm-5 py-4">
        <div className="container">
          <div className="tab-container">
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3"
            >
              <Tab eventKey="home" title="Description" className="tab-buttons fs-m-md fw-normal ff-poppins lh-125">
                <p className=" fs-m-md fw-normal ff-poppins lh-185 text-light-black1">
                  {" "}
                  Sed nec ultricies felis, vitae facilisis ipsum. Morbi id
                  turpis euismod, rhoncus tortor quis, lobortis sapien. Sed
                  imperdiet nulla in leo ullamcorper, in finibus elit porta. Sed
                  eget congue neque, mattis finibus neque. In vel dolor ac augue
                  pretium suscipit. Ut nec massa in ligula vestibulum mattis.
                  Suspendisse imperdiet lorem eleifend nisi euismod, vel
                  consequat ipsum luctus. Morbi auctor vulputate hendrerit.
                  Etiam vel lectus tortor. Pellentesque non pharetra mi. Cura{" "}
                </p>
              </Tab>
              <Tab eventKey="profile" className="fs-m-md fw-normal ff-poppins lh-125" title="Additional Information">
                <p className=" fs-m-md fw-normal ff-poppins lh-185 text-light-black1"> {" "}
                  Sed nec ultricies felis, vitae facilisis ipsum. Morbi id
                  turpis euismod, rhoncus tortor quis, lobortis sapien. Sed
                  imperdiet nulla in leo ullamcorper, in finibus elit porta. Sed
                  eget congue neque, mattis finibus neque. In vel dolor ac augue
                  pretium suscipit. Ut nec massa in ligula vestibulum mattis.
                  Suspendisse imperdiet lorem eleifend nisi euismod, vel
                  consequat ipsum luctus. Morbi auctor vulputate hendrerit.
                  Etiam vel lectus tortor. Pellentesque non pharetra mi. Cura{" "}</p>
              </Tab>
              <Tab eventKey="contact" className="fs-m-md fw-normal ff-poppins lh-125" title="Reviews (1)">
                <p class=" fs-m-md fw-normal ff-poppins lh-185 text-light-black1"> {" "}
                  Sed nec ultricies felis, vitae facilisis ipsum. Morbi id
                  turpis euismod, rhoncus tortor quis, lobortis sapien. Sed
                  imperdiet nulla in leo ullamcorper, in finibus elit porta. Sed
                  eget congue neque, mattis finibus neque. In vel dolor ac augue
                  pretium suscipit. Ut nec massa in ligula vestibulum mattis.
                  Suspendisse imperdiet lorem eleifend nisi euismod, vel
                  consequat ipsum luctus. Morbi auctor vulputate hendrerit.
                  Etiam vel lectus tortor. Pellentesque non pharetra mi. Cura{" "}</p>
              </Tab>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section3;