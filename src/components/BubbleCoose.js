import React from "react";

const BubbleCoose = ({
  bubles,
  title,
  subTitle,
  condition,
  dataText,
  extraQualification,
  defaultValue,
  unit,
  name,
  dispatch,
  disabledData,
}) => {
  return (
    <div className="w-full flex mt-7 mb-7">
      <div className="w-[30%]">
        <h3 className="text-[22px]">{title}</h3>
        {subTitle && <p className="text-[18px]">{subTitle}</p>}
        <p className="text-[20px] text-[#76c779]">
          {condition
            ? defaultValue > 1024
              ? defaultValue / 1024 + " GB"
              : defaultValue + " MB"
            : defaultValue + " " + unit}
        </p>
        {extraQualification && (
          <p className="text-[16px] text-[#767676] mt-[12px]">
            {extraQualification}
          </p>
        )}
      </div>
      <div className="flex flex-wrap w-[65%] gap-[20px] ml-[35px]">
        {bubles?.map((buble, index) => (
          <button
            key={index}
            className={`h-[56px] w-[56px] rounded-full border border-[rgba(0,0,0,.12)] flex items-center justify-center shadow-sm ${
              buble === defaultValue ? "bg-[#76c779] text-white" : ""
            } hover:bg-[#76c779] hover:text-white disabled:cursor-not-allowed disabled:bg-[#F5F5F5] disabled:text-black`}
            onClick={() =>
              dispatch({
                type: "INPUT",
                payload: { name: name, value: buble },
              })
            }
            disabled={disabledData && !disabledData?.includes(buble)}
          >
            <p className="text-center text-[11px]">
              {dataText && condition
                ? index >= condition
                  ? buble / 1024 + dataText[1]
                  : buble + dataText[0]
                : buble}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BubbleCoose;
