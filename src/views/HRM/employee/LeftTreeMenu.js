import React, { useState, useEffect } from "react";
import { FolderOpenOutlined, FolderOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import Company from "../../../services/company/company";
import companyTreeIType from "../../../references/companyTreeIType.json";
import { openNofi } from "src/features/comman";

// submenu keys of first level
const rootSubmenuKeys = ["sub1", "sub2", "sub4"];
const LeftTreeMenu = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [treeList, setTreeList] = useState([]);
  const [openKeys, setOpenKeys] = useState(["sub1"]);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const getTreeList = async () => {
    setTreeList([]);
    setIsLoading(true);
    await Company.getTree()
      .then((response) => {
        console.log("getTreeList =======>", response);
        if (response.status === 200) {
          setTreeList(response.data?.response?.data);
        }
      })
      .catch((error) => {
        //   console.log("error", error);
        openNofi("warning", "Амжилтгүй", error?.response?.data?.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getTreeList();
  }, []);

  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      style={{
        width: 300,
        margin: 10,
      }}
      items={treeList}
      // expandIcon={({ e }) => {
      //   console.log("e");
      // }}
      expandIcon={(props) => {
        const { isOpen } = props;
        return isOpen ? (
          <FolderOpenOutlined style={{ fontSize: 20 }} />
        ) : (
          <FolderOutlined style={{ fontSize: 20 }} />
        );
      }}
      // expandIcon={({ expanded, onExpand, record }) =>
      //   expanded ? (
      //     <UpOutlined
      //       style={{ float: "right" }}
      //       onClick={(e) => console.log("UpOutlined e")}
      //     />
      //   ) : (
      //     <DownOutlined onClick={(e) => console.log("DownOutlined e")} />
      //   )
      // }
    />
  );
};
export default LeftTreeMenu;
