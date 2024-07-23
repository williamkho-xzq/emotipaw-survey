"use client";

import { useState } from "react";
import Head from "next/head";
import DebriefScript from "@/components/debrief-script";
import IntroductionScript from "@/components/introduction-script";
import SurveyLinks from "@/components/survey-links";

const assignGroup = () => {
  const timestamp = new Date().getTime();
  //A => Control group
  //B => Counter balance group

  let threshold = Number(process.env.NEXT_PUBLIC_GROUP_ASSIGNMENT_THRESHOLD);

  let group = timestamp % 4 < threshold ? "A" : "B";

  return group;
};
const group = assignGroup();

export default function Home() {
  const [agreed, setAgreed] = useState(false);
  const [completed, setCompleted] = useState(false);

  // Handler for agreement button click
  const handleAgree = () => {
    setAgreed(true);
  };

  // Handler for survey completion button click
  const handleCompletion = () => {
    setCompleted(true);
  };

  const [step, setStep] = useState(0);

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);

  console.log(group);

  const renderStep = () => {
    switch (step) {
      case 0:
        return <IntroductionScript onAgree={nextStep} />;
      case 1:
        return <SurveyLinks group={group} onComplete={nextStep} />;
      case 2:
        return <DebriefScript group={group} />;
      default:
        return null;
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-100 text-black">
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <Head>
          <title>EmotiPaw: AI Pet Emotion Recognition Study</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="relative py-3 sm:max-w-3xl sm:mx-auto w-full px-4 sm:px-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative bg-white shadow-lg sm:rounded-3xl p-8 sm:p-16">
            <div className="max-w-2xl mx-auto">
              <h1 className="text-3xl font-semibold mb-8 text-center">
                EmotiPaw: AI Pet Emotion Recognition Study
              </h1>

              {renderStep()}

              <div className="mt-8 flex justify-start">
                {step > 0 && (
                  <button
                    onClick={prevStep}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
                  >
                    Back
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
