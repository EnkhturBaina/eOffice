import React, { useState } from 'react';
import { CaretRightOutlined, CaretDownOutlined } from '@ant-design/icons';
import { Radio, Space } from 'antd';

function CustomSelect() {
   const [value, setValue] = useState(1);

   const onChange = (e) => {
      setValue(e.target.value);
      toggleDropdown();
   };
   const menuData = [
      { id: 1, val: 'Tenplus', img: require('../assets/images/avatars/1.jpg') },
      { id: 2, val: 'Tenplus 2', img: require('../assets/images/avatars/2.jpg') },
      { id: 3, val: 'Tenplus 3', img: require('../assets/images/avatars/3.jpg') }
   ];
   const [isOpen, setOpen] = useState(false);
   const toggleDropdown = () => setOpen(!isOpen);

   return (
      <div className="custom-header-dropdown">
         <div className="custom-header-dropdown-header" onClick={toggleDropdown}>
            {value ? (
               <div>
                  {menuData &&
                     menuData
                        .filter((xxx) => xxx.id == value)
                        .map((fitlered, index) => (
                           <div className="flex items-center" key={index}>
                              <img src={fitlered.img} width={30} height={30} />
                              <span className="ml-1">{fitlered.val}</span>
                           </div>
                        ))}
               </div>
            ) : (
               'Сонгох'
            )}
            {isOpen ? <CaretRightOutlined /> : <CaretDownOutlined />}
         </div>
         <div className={`custom-header-dropdown-body ${isOpen && 'open'}`}>
            <div>
               <Radio.Group onChange={onChange} value={value} className="w-full">
                  <Space direction="vertical" className="w-full">
                     {menuData &&
                        menuData.map((el, index) => {
                           return (
                              <Radio
                                 value={el.id}
                                 key={index}
                                 className="flex-row-reverse !w-full justify-between items-center custom-radio-container"
                                 style={{ height: 35 }}
                              >
                                 <div className="flex flex-row items-center absolute left-0 ">
                                    <img src={el.img} width={32} height={32} />
                                    <span className="ml-1">{el.val}</span>
                                 </div>
                              </Radio>
                           );
                        })}
                  </Space>
               </Radio.Group>
            </div>
         </div>
      </div>
   );
}

export default CustomSelect;
