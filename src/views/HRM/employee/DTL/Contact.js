import { Button, Divider, Spin } from "antd";
import React, { useState, useEffect } from "react";
import ContactUpdate from "./ContactUpdate";
import UpdateWorkerData from "../../../../services/worker/updateWorkerData";
import { openNofi } from "src/features/comman";

function Contact(props) {
  const [isUpdate, setIsUpdate] = useState(false);
  const [contactData, setContactData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getContact = async () => {
    setContactData([]);
    setIsLoading(true);
    await UpdateWorkerData.getContact({ userId: props?.selectedUserData?.id })
      .then((response) => {
        console.log("getContact =======>", response);
        if (response.status === 200) {
          setContactData(response.data?.response?.data);
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
    //  getContact();
  }, [props?.selectedUserData]);

  return (
    <>
      {isLoading ? (
        <Spin />
      ) : isUpdate ? (
        <ContactUpdate
          selectedUserData={props.selectedUserData}
          getContact={getContact}
          contactData={contactData}
          setIsUpdate={setIsUpdate}
        />
      ) : (
        <div>
          {contactData?.length !== 0 ? (
            contactData?.map((el, index) => {
              return (
                <div key={index}>
                  <Divider className="mt-2 mb-1" />
                  <div className="grid grid-cols-4 gap-2">
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">Овог</span>
                      <span className="text-xs font-bold">-</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">Нэр</span>
                      <span className="text-xs font-bold">-</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">
                        Таны хэн болох
                      </span>
                      <span className="text-xs font-bold">-</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">Ажлын байр</span>
                      <span className="text-xs font-bold">-</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">Ажил</span>
                      <span className="text-xs font-bold">-</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-500">Утас</span>
                      <span className="text-xs font-bold">-</span>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="grid grid-cols-3 gap-2">
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Овог</span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Нэр</span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Таны хэн болох</span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Ажлын байр</span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Ажил</span>
                <span className="text-xs font-bold">-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500">Утас</span>
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

export default Contact;
