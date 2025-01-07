import { DownCircleOutlined, UpCircleOutlined } from "@ant-design/icons";
import React, { useState } from "react";

const DropDown = () => {
  const [selectedItem, setSelectdItem] = useState("Select an item");
  const [showItems, setShowItems] = useState(false);
  const items = ["Car", "Bike", "Truck", "Bus"];
  return (
    <div className="container">
      {/* dropdown starts here */}
      <div className="dropdown-btn" onClick={() => setShowItems(!showItems)}>
        <button>{selectedItem}</button>
        <div>{showItems ? <UpCircleOutlined /> : <DownCircleOutlined />} </div>
      </div>
      {/* dropdown ends here */}

      {/* items list start here */}
      {showItems && (
        <div className="dropdown-content">
          {items.map((item, index) => (
            <a
              key={index}
              href="#"
              onClick={() => {
                setSelectdItem(item);
                setShowItems(false);
              }}
            >
              {item}
            </a>
          ))}
        </div>
      )}
      {/* items list ends here */}
    </div>
  );
};

export default DropDown;
