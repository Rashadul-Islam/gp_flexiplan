import React from "react";

const McaToggle = ({name, dispatch, defaultValue}) => {
  return (
    <div className="w-full flex mt-7 mb-7">
      <div className="w-[30%]">
        <h3 className="text-[22px]">Missed Call Alert</h3>
        <p className="text-[20px] text-[#76c779]">Validity: 30 days</p>
      </div>
      <div className="flex justify-end w-[70%]">
        <div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={defaultValue}
              onChange={() =>
                dispatch({
                  type: "TOGGLE",
                  payload: { name: name},
                })
              }
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300 rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default McaToggle;
