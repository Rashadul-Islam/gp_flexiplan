import BubbleCoose from "@/components/BubbleCoose";
import McaToggle from "@/components/McaToggle";
import { plans } from "@/utlis/bubble_map";
import { reducer, initialState } from "@/state/planState";
import { useReducer, useState } from "react";
import ShowPackageInfo from "@/components/ShowPackageInfo";

export default function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [showPackage, setShowPackage] = useState(false);

  return (
    <div
      className={`w-full relative overflow-hidden ${
        showPackage ? "h-screen" : "h-full"
      }`}
    >
      <div className="lg:w-[500px] md:w-[500px] w-[90%] mx-auto">
        <h1 className="text-[36px] font-light pt-[30px] text-center lg:text-left">
          FlexiPlan
        </h1>
        <p className="hidden md:block lg:block text-[18px] mt-[15px]">
          Make your own plan and enjoy great savings! Only for GP Customers
        </p>
        <BubbleCoose
          title="Validity"
          bubles={plans?.bubles?.longevity}
          defaultValue={state?.longevity}
          unit="Days"
          name="longevity"
          dispatch={dispatch}
        />
        <hr />
        <BubbleCoose
          title="Internet"
          subTitle="Regular"
          bubles={plans?.bubles?.data}
          condition={5}
          dataText={["MB", "GB"]}
          defaultValue={state?.data}
          disabledData={plans?.eligibility[`day_${state?.longevity}`]?.data}
          name="data"
          dispatch={dispatch}
        />
        <hr />
        <BubbleCoose
          title="4G Internet"
          subTitle="4G Only"
          bubles={plans?.bubles?.fourg}
          condition={1}
          dataText={["MB", "GB"]}
          extraQualification="4G enabled handset + SIM required"
          defaultValue={state?.fourg}
          disabledData={plans?.eligibility[`day_${state?.longevity}`]?.fourg}
          name="fourg"
          dispatch={dispatch}
        />
        <hr />
        <BubbleCoose
          title="Minutes"
          bubles={plans?.bubles?.voice}
          extraQualification="Any Local Number"
          defaultValue={state?.voice}
          unit="Minutes"
          name="voice"
          dispatch={dispatch}
        />
        <hr />
        <BubbleCoose
          title="Bioscope"
          bubles={plans?.bubles?.bioscope}
          condition={1}
          dataText={["MB", "GB"]}
          extraQualification="Only used to watch Bioscope"
          defaultValue={state?.bioscope}
          disabledData={plans?.eligibility[`day_${state?.longevity}`]?.bioscope}
          name="bioscope"
          dispatch={dispatch}
        />
        <hr />
        <BubbleCoose
          title="SMS"
          bubles={plans?.bubles?.sms}
          defaultValue={state?.sms}
          unit="SMS"
          disabledData={plans?.eligibility[`day_${state?.longevity}`]?.sms}
          name="sms"
          dispatch={dispatch}
        />
        <hr />
        <McaToggle name={"mca"} dispatch={dispatch} defaultValue={state?.mca} />
        <button
          onClick={() => setShowPackage(!showPackage)}
          className="mt-5 mb-10 text-center border border-blue-200 px-3 py-1.5 rounded-md shadow-md hover:bg-blue-200"
        >
          Buy Now !!
        </button>
      </div>
      {showPackage && (
        <ShowPackageInfo
          showPackage={showPackage}
          setShowPackage={setShowPackage}
          state={state}
        />
      )}
    </div>
  );
}
