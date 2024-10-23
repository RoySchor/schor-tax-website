import React from "react";
import "./ServicePackageCardTemplate.module.css";

const ServicePackageCardTemplate = ({
  title,
  subTitleOne,
  subTitleTwo,
  description,
  listHeader,
  listElements
}) => {
  return (
    <div className="servicePackageCard">
      <div className="leftColumn">
        <h2 className="title">
          <u>{title}</u>
        </h2>

        {subTitleOne && (
          <p>{subTitleOne}</p>
        )}

        {subTitleTwo && (
          <p>{subTitleTwo}</p>
        )}
      </div>

      {(description || listHeader || listElements) && (
        <div className="rightColumn">
          {description && (
            <div className="description">
              {description}
            </div>
          )}

          {listHeader && (
            <div className="listHeader">
              {listHeader}
            </div>
          )}

          {listElements && (
            <ul>
              {listElements.map((item, index) => (
                <li className="listElement" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          )}


        </div>
      )}
    </div>
  );
};

export default ServicePackageCardTemplate;
