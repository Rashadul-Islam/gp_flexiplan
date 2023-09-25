import React from "react";

const ShowPackageInfo = ({ state, showPackage, setShowPackage }) => {
  return (
    <div className="fixed bg-[rgba(35,33,33,0.5)] inset-0 z-50 flex items-center justify-center">
      <div className="flex flex-col justify-center items-center w-[350px] md:w-[400px] lg:w-[400px] h-[350px] bg-white shadow-md rounded-md">
        <div>
          <p className="text-[18px] font-semibold text-center mb-3">
            Your package information
          </p>
          <table className="min-w-full border text-center text-sm font-light">
            <thead className="border-b font-medium">
              <tr>
                <th
                  scope="col"
                  className="border-r md:px-10 lg:px-10 px-6 py-1"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="border-r md:px-10 lg:px-10 px-6 py-1 dark:border-neutral-500"
                >
                  Details
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="whitespace-nowrap border-r md:px-10 lg:px-10 px-6 py-1 dark:border-neutral-500">
                  Validity
                </td>
                <td className="whitespace-nowrap border-r md:px-10 lg:px-10 px-6 py-1 dark:border-neutral-500">
                  {state?.longevity} Days
                </td>
              </tr>
              <tr className="border-b">
                <td className="whitespace-nowrap border-r md:px-10 lg:px-10 px-6 py-1 dark:border-neutral-500">
                  Internet
                </td>
                <td className="whitespace-nowrap border-r md:px-10 lg:px-10 px-6 py-1 dark:border-neutral-500">
                  {state?.data > 500
                    ? state?.data / 1024 + " GB"
                    : state?.data + " MB"}
                </td>
              </tr>
              <tr className="border-b">
                <td className="whitespace-nowrap border-r md:px-10 lg:px-10 px-6 py-1 dark:border-neutral-500">
                  4G Only
                </td>
                <td className="whitespace-nowrap border-r md:px-10 lg:px-10 px-6 py-1 dark:border-neutral-500">
                  {state?.fourg > 500
                    ? state?.fourg / 1024 + " GB"
                    : state?.fourg + " MB"}
                </td>
              </tr>
              <tr className="border-b">
                <td className="whitespace-nowrap border-r md:px-10 lg:px-10 px-6 py-1 dark:border-neutral-500">
                  Minutes
                </td>
                <td className="whitespace-nowrap border-r md:px-10 lg:px-10 px-6 py-1 dark:border-neutral-500">
                  {state?.voice} Minutes
                </td>
              </tr>
              <tr className="border-b">
                <td className="whitespace-nowrap border-r md:px-10 lg:px-10 px-6 py-1 dark:border-neutral-500">
                  Bioscope
                </td>
                <td className="whitespace-nowrap border-r md:px-10 lg:px-10 px-6 py-1 dark:border-neutral-500">
                  {state?.bioscope > 0
                    ? state?.bioscope / 1024 + " GB"
                    : state?.bioscope + " MB"}
                </td>
              </tr>
              <tr className="border-b">
                <td className="whitespace-nowrap border-r md:px-10 lg:px-10 px-6 py-1 dark:border-neutral-500">
                  SMS
                </td>
                <td className="whitespace-nowrap border-r md:px-10 lg:px-10 px-6 py-1 dark:border-neutral-500">
                  {state?.sms}
                </td>
              </tr>
              <tr className="border-b">
                <td className="whitespace-nowrap border-r md:px-10 lg:px-10 px-6 py-1 dark:border-neutral-500">
                  Missed Call Alert
                </td>
                <td className="whitespace-nowrap border-r md:px-10 lg:px-10 px-6 py-1 dark:border-neutral-500">
                  {state?.mca === 0 ? "Off" : "On"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button
          onClick={() => setShowPackage(!showPackage)}
          className="border border-blue-500 px-6 py-1.5 text-[14px] mt-4 rounded-md hover:bg-blue-500 hover:text-white"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ShowPackageInfo;
