import { Button, Divider, Spin } from "antd";
import React, { useState, useEffect } from "react";
import UpdateWorkerData from "../../../../../services/worker/updateWorkerData";
import { openNofi } from "src/features/comman";
import WorkScheduleUpdate from "./WorkScheduleUpdate";
import ReferenceService from "src/services/upload/ReferenceService";
import { EyeOutlined } from "@ant-design/icons";

function WorkSchedule(props) {
  const [isUpdate, setIsUpdate] = useState(false);
  const [scheduleData, setScheduleData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getFnc = async () => {
    setScheduleData([]);
    setIsLoading(true);
    await UpdateWorkerData.getDescription({
      userId: props?.selectedUserData?.id,
      type: 0,
    })
      .then((response) => {
        console.log("getContact =======>", response);
        if (response.status === 200) {
          setScheduleData(response.data?.response?.data);
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

  useEffect(() => {
    getFnc();
  }, [props?.selectedUserData]);

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
  return (
    <>
      {isLoading ? (
        <Spin />
      ) : isUpdate ? (
        <WorkScheduleUpdate
          selectedUserData={props.selectedUserData}
          getFnc={getFnc}
          scheduleData={scheduleData[0]}
          setIsUpdate={setIsUpdate}
        />
      ) : (
        <div>
          <div className="mt-2">
            <span className="main-color font-bold">Ажил үүргийн хуваарь</span>
          </div>
          {scheduleData?.length !== 0 ? (
            scheduleData?.map((el, index) => {
              return (
                <div key={index}>
                  <div className="grid grid-cols-1 gap-2">
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">Хуваарь</span>
                      <span className="text-xs font-bold">{el.text}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">Хавсралт</span>
                      <span className="text-xs font-bold">
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
                      </span>
                    </div>
                  </div>
                  <Divider className="mt-2 mb-1" />
                </div>
              );
            })
          ) : (
            <div className="grid grid-cols-1 gap-2">
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Хуваарь</span>
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

export default WorkSchedule;
