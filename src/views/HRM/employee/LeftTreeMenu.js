import React, { useState, useEffect } from "react";
import {
  FolderOpenFilled,
  FolderFilled,
  DownOutlined,
} from "@ant-design/icons";
import { ConfigProvider, Tree } from "antd";
import Company from "../../../services/company/company";
import { openNofi } from "src/features/comman";
import { MAIN_COLOR } from "src/constant";
const { DirectoryTree } = Tree;

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

  const onSelect = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {},
          Tree: {
            directoryNodeSelectedBg: "#bcc433",
            nodeSelectedBg: "#bcc433",
          },
        },
      }}
    >
      <DirectoryTree
        showLine
        style={{
          width: 350,
          maxWidth: 400,
          margin: 10,
        }}
        switcherIcon={<DownOutlined style={{ color: "#0095ff" }} />}
        onSelect={onSelect}
        treeData={treeList}
        fieldNames={{ title: "label", key: "id", children: "children" }}
        className="h-max m-2 rounded bg-gray-50 custom-left-tree-menu"
        icon={(props) => {
          const { selected } = props;
          return selected ? (
            <FolderOpenFilled style={{ fontSize: 20, color: MAIN_COLOR }} />
          ) : (
            <FolderFilled
              style={{ fontSize: 20, color: MAIN_COLOR }}
              className=""
            />
          );
        }}
      />
    </ConfigProvider>
  );
};
export default LeftTreeMenu;
