import React from "react";
import SuccessListItem from "./SuccessListItem";

const SuccessList = () => {
  const success_list_items = [
    {
      src: "/img/icon/success_icon01.png",
      title: "Website Development",
      percentage: 95,
    },
    {
      src: "/img/icon/success_icon02.png",
      title: "Mobile App Development",
      percentage: 95,
    },
    {
      src: "/img/icon/success_icon03.png",
      title: "AI & Machine Learning Solutions",
      percentage: 92,
    },
    {
      src: "/img/icon/success_icon04.png",
      title: "ERP & Management Software",
      percentage: 85,
    },
  ];
  

  return (
    <div className="success-list">
      <ul className="list-wrap">
        {success_list_items.map((x, index) => (
          <li key={index}>
            <SuccessListItem item={x} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SuccessList;
