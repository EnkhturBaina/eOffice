import { Button, Divider, Spin } from "antd";
import React, { useState, useEffect } from "react";
import UpdateWorkerData from "../../../../../services/worker/updateWorkerData";
import { openNofi } from "src/features/comman";
import socialsType from "../../../../../references/socialsType.json";
import SocialWelfareUpdate from "./SocialWelfareUpdate";

function SocialWelfare(props) {
  const [isUpdate, setIsUpdate] = useState(false);
  const [socialData, setSocialData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getSocials = async () => {
    setSocialData([]);
    setIsLoading(true);
    await UpdateWorkerData.getSocials({ userId: props?.selectedUserData?.id })
      .then((response) => {
        console.log("get Socials =======>", response);
        if (response.status === 200) {
          setSocialData(response.data?.response?.data);
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
    getSocials();
  }, [props?.selectedUserData]);

  const getName = (val) => {
    return socialsType.map((item, index) => {
      if (item.value === val) {
        return <span key={index}>{item.label}</span>;
      }
    });
  };
  return (
    <>
      {isLoading ? (
        <Spin />
      ) : isUpdate ? (
        <SocialWelfareUpdate
          selectedUserData={props.selectedUserData}
          getSocials={getSocials}
          socialData={socialData}
          setIsUpdate={setIsUpdate}
        />
      ) : (
        <div>
          <div className="mt-2">
            <span className="main-color font-bold">Нийгмийн халамж</span>
          </div>
          {socialData?.length !== 0 ? (
            socialData?.map((el, index) => {
              return (
                <div key={index}>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">
                        Мөнгөний төрөл
                      </span>
                      <span className="text-xs font-bold">
                        {getName(el.unit)}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">Тушаалын №</span>
                      <span className="text-xs font-bold">{el.number}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">
                        Халамжийн төрөл
                      </span>
                      <span className="text-xs font-bold">{el.type}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">
                        Олгосон шалтгаан тайлбар
                      </span>
                      <span className="text-xs font-bold">{el.reason}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">Мөнгөн дүн</span>
                      <span className="text-xs font-bold">{el.money}</span>
                    </div>
                  </div>
                  <Divider className="mt-2 mb-1" />
                </div>
              );
            })
          ) : (
            <div className="grid grid-cols-3 gap-2">
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Мөнгөний төрөл</span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Тушаалын №</span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Халамжийн төрөл</span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">
                  Олгосон шалтгаан тайлбар
                </span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Мөнгөн дүн</span>
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
              Нэмэх
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default SocialWelfare;
