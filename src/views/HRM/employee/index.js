import { cilUser } from "@coreui/icons";
import React from "react";
import { AppHeader } from "src/components";
import Tab1 from "./Tab1/index";
import Stats from "./Stats";
import LeftTreeMenu from "./LeftTreeMenu";

function index() {
  return (
    <div className="flex">
      <LeftTreeMenu />
      <div
        className="w-100 h-100"
        // style={{ backgroundColor: "#f9fbfd" }}
      >
        <AppHeader title="Ажилчид" icon={cilUser} />
        <Stats />
        <div className="!px-10 !my-2">
          <Tab1 />
        </div>
      </div>
    </div>
  );
}

export default index;

