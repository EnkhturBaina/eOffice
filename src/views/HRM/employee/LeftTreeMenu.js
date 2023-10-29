import React, { useState, useEffect } from "react";
import { FolderOpenOutlined, FolderOutlined } from "@ant-design/icons";
import { ConfigProvider, Menu } from "antd";
import Company from "../../../services/company/company";
import companyTreeIType from "../../../references/companyTreeIType.json";
import { openNofi } from "src/features/comman";

const LeftTreeMenu = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [treeList, setTreeList] = useState([]);

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
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            // itemSelectedColor: "#ff4d4f",
          },
        },
      }}
    >
      <Menu
        mode="inline"
        style={{
          width: 350,
          maxWidth: 400,
          margin: 10,
        }}
        items={treeList}
        expandIcon={(props) => {
          const { isOpen } = props;
          return isOpen ? (
            <FolderOpenOutlined style={{ fontSize: 20, color: "" }} />
          ) : (
            <FolderOutlined style={{ fontSize: 20 }} />
          );
        }}
      />
    </ConfigProvider>
  );
};
export default LeftTreeMenu;
