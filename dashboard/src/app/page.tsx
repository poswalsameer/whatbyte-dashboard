"use client";

import React, { useState } from "react";
import Header from "./AppComponents/Header";
import Sidebar from "./AppComponents/Sidebar";
import TestUpdate from "./AppComponents/TestUpdate";
import QuickStats from "./AppComponents/QuickStats";
import SyllabusAnalysis from "./AppComponents/SyllabusAnalysis";
import QuestionAnalysis from "./AppComponents/QuestionAnalysis";
import BarGraph from "./AppComponents/BarGraph";

const comparisonData = [
  { name: "0", you: 5 },
  { name: "5", you: 12 },
  { name: "10", you: 15 },
  { name: "15", you: 21 },
  { name: "20", you: 18 },
  { name: "25", you: 26 },
  { name: "30", you: 26 },
  { name: "35", you: 32 },
  { name: "40", you: 40 },
  { name: "45", you: 120 },
  { name: "50", you: 105 },
  { name: "55", you: 54 },
  { name: "60", you: 47 },
  { name: "65", you: 39 },
  { name: "70", you: 31 },
  { name: "75", you: 25 },
  { name: "80", you: 19 },
  { name: "85", you: 14 },
  { name: "90", you: 11 },
  { name: "95", you: 6 },
  { name: "100", you: 2 },

];

export default function SkillTestDashboard() {
  const [rank, setRank] = useState(1);
  const [percentile, setPercentile] = useState(30);
  const [correctAnswers, setCorrectAnswers] = useState(10);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  const handleUpdateStats = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsUpdateModalOpen(false);
  };

  const questionAnalysisData = [
    { name: "Correct", value: correctAnswers },
    { name: "Incorrect", value: 15 - correctAnswers },
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-100">

      <Header />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        
        {/* Main content */}
        <main className=" flex-1 p-4 md:p-8 overflow-y-auto">
          <div className="flex justify-between items-center mt-2 mb-8">
            <h2 className="text-xl font-semibold">Skill Test</h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
             
              <div className="bg-white p-6 rounded-lg shadow mb-8">
                {/* FIRST BLOCK */}
                <TestUpdate 
                  isUpdateModalOpen={isUpdateModalOpen} 
                  setIsUpdateModalOpen={setIsUpdateModalOpen}
                  handleUpdateStats={handleUpdateStats} 
                  rank={rank} 
                  setRank={setRank}
                  percentile={percentile}
                  setPercentile={setPercentile} 
                  correctAnswers={correctAnswers}
                  setCorrectAnswers={setCorrectAnswers}
                />

                {/* Quick Statistics */}
                <QuickStats 
                  rank={rank}
                  percentile={percentile}
                  correctAnswers={correctAnswers}
                />

                {/* Line Graph */}
                <BarGraph 
                  percentile={percentile}
                  comparisonData={comparisonData}
                />

              </div>
            </div>

            <div className="lg:w-1/3 space-y-8">
              {/* Syllabus Wise Analysis */}
              <SyllabusAnalysis />

              {/* Question Analysis */}
              <QuestionAnalysis 
                correctAnswers={correctAnswers}
                questionAnalysisData={questionAnalysisData}
                />

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
