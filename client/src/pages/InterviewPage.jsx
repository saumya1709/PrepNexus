import React, { useState } from "react";
import Step1_SetUp from "../components/Step1_SetUp";
import Step2_Interview from "../components/Step2_Interview";
import Step3_Report from "../components/Step3_Report";

function InterviewPage() {
    const [step,setstep] = useState(1)
    const [interviewData,setInterviewData] = useState(null)
    return (
        <div className="min-h-screen bg-gray-50">
            {step===1 && (
                <Step1_SetUp onStart={(data)=>{
                    setInterviewData(data);
                setstep(2)}}/>
            )}
            {step===2 && (
                <Step2_Interview interviewData={interviewData}
                onFinish={(report)=>{setInterviewData(report);
                    setstep(3)
                }}/>
            )}
            {step===3 && (
                <Step3_Report />
            )}
            
        </div>
    )
}

export default InterviewPage