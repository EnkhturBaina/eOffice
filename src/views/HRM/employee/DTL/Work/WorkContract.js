import { Button, Divider, Spin } from "antd";
import React, { useState, useEffect } from "react";
import UpdateWorkerData from "../../../../../services/worker/updateWorkerData";
import { openNofi } from "src/features/comman";
import WorkContractUpdate from "./WorkContractUpdate";
import dayjs from "dayjs";
import ReferenceService from "src/services/upload/ReferenceService";
import { EyeOutlined } from "@ant-design/icons";

function WorkContract(props) {
  const [isUpdate, setIsUpdate] = useState(false);
  const [contractData, setContractData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getContract = async () => {
    setContractData([]);
    setIsLoading(true);
    await UpdateWorkerData.getContract({ userId: props?.selectedUserData?.id })
      .then((response) => {
        // console.log("get Contract =======>", response);
        if (response.status === 200) {
          setContractData(response.data?.response?.data);
        }
      })
      .catch((error) => {
        console.log("error", error);
        openNofi("warning", "Амжилтгүй", error?.response?.data?.message);
      })
      .finally(() => {
        setIsUpdate(false);
        setIsLoading(false);
      });
  };
  const getFile = async (file_id) => {
    return await ReferenceService.getImage(file_id).then((response) => {
      // console.log("RES", response);
      const file = new Blob([response.data], {
        type: response.data.type,
      });
      const fileUrl = URL.createObjectURL(file);
      return fileUrl;
    });
  };

  const onPreview = async (fileId) => {
    await getFile(fileId).then((response) => {
      window.open(response);
    });
  };

  useEffect(() => {
    getContract();
  }, [props?.selectedUserData]);

  return (
    <>
      {isLoading ? (
        <Spin />
      ) : isUpdate ? (
        <WorkContractUpdate
          selectedUserData={props.selectedUserData}
          getContract={getContract}
          contractData={contractData[0]}
          setIsUpdate={setIsUpdate}
        />
      ) : (
        <div>
          <div className="mt-2">
            <span className="main-color font-bold">Хөдөлмөрийн гэрээ</span>
          </div>
          {contractData?.length !== 0 ? (
            contractData?.map((el, index) => {
              return (
                <div key={index}>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">
                        Гэрээний дугаар
                      </span>
                      <span className="text-xs font-bold">{el.number}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">Тайлбар</span>
                      <span className="text-xs font-bold">
                        {el.description}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">
                        Эхлэх огноо
                      </span>
                      <span className="text-xs font-bold">
                        {dayjs(el.startDate).format("YYYY-MM-DD")}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">
                        Дуусах огноо
                      </span>
                      <span className="text-xs font-bold">
                        {dayjs(el.endDate).format("YYYY-MM-DD")}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">Хавсралт</span>
                      <span className="text-xs font-bold">
                        <Button
                          onClick={() => {
                            onPreview(el.file);
                          }}
                          size="small"
                          className="flex items-center"
                        >
                          <EyeOutlined />
                          Харах
                        </Button>
                      </span>
                    </div>
                  </div>
                  <Divider className="mt-2 mb-1" />
                </div>
              );
            })
          ) : (
            <div className="grid grid-cols-3 gap-2">
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Гэрээний дугаар</span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Тайлбар</span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Эхлэх огноо</span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Дуусах огноо</span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Хавсралт</span>
                <span className="text-xs font-bold">-</span>
              </div>
            </div>
          )}
          <div className="flex justify-end !mt-12">
            <Button
              onClick={() => {
                setIsUpdate(true);
              }}
            >
              Засах
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default WorkContract;
