import { cilBank } from "@coreui/icons";
import React, { useState } from "react";
import { AppHeader } from "src/components";
import CreateCompany from "./CreateCompany";
import CreateTree from "./CreateTree";
import Toolbar from "./Toolbar";
import List from "./List";
import DTL from "./DTL/index";
import Relation from "./Relation/index";

function index() {
  // 0 => DTL, 1 => Relation
  const [actionType, setActionType] = useState(null);
  return (
    <div>
      <AppHeader title="Компаниуд" icon={cilBank} />
      {/* <CreateCompany /> */}
      <CreateTree />
      <Toolbar />
      <div className="flex flex-row !px-10 !gap-4">
        <div className={actionType === null ? "basis-full" : "basis-3/5"}>
          <List actionType={actionType} setActionType={setActionType} />
        </div>
        {actionType === "DTL" ? (
          <div className="basis-2/5">
            <DTL actionType={actionType} setActionType={setActionType} />
          </div>
        ) : null}
        {actionType === "Relation" ? (
          <div className="basis-2/5">
            <Relation actionType={actionType} setActionType={setActionType} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default index;

