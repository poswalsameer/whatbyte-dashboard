import React from 'react'

function SyllabusAnalysis() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">

      <h4 className="text-lg font-semibold mb-4">
        Syllabus Wise Analysis
      </h4>
                
      <div className="space-y-4">

        <div className="flex flex-col gap-y-2">

          <span className="text-gray-700 font-medium">
            HTML Tools, Forms, History
          </span>

          <div className="flex gap-x-5 justify-between items-center mb-1">
            <progress id="file" value="80" max="100" className="w-full h-[0.6rem] progressBar"></progress>
            <span className="text-[#007bff] font-bold">80%</span>
          </div>

        </div>

        <div className="flex flex-col gap-y-2">

          <span className="text-gray-700 font-medium">
            Tags & References in HTML
          </span>

          <div className="flex gap-x-5 justify-between items-center mb-1">
            <progress id="file" value="60" max="100" className="w-full h-[0.6rem] orangeProgressBar"></progress>
            <span className="text-[#ffa600] font-bold">60%</span>
          </div>
                  
        </div>

        <div className="flex flex-col gap-y-2">

          <span className="text-gray-700 font-medium">
            Tables & References in HTML
          </span>

          <div className="flex gap-x-5 justify-between items-center mb-1">
            <progress id="file" value="24" max="100" className="w-full h-[0.6rem] redProgressBar"></progress>
            <span className="text-[#ff3f3f] font-bold">24%</span>
          </div>

        </div>

        <div className="flex flex-col gap-y-2">

          <span className="text-gray-700 font-medium">
            Tables & CSS in Basics
          </span>

          <div className="flex gap-x-5 justify-between items-center mb-1">
            <progress id="file" value="96" max="100" className="w-full h-[0.6rem] greenProgressBar"></progress>
            <span className="text-[#19a219] font-bold">96%</span>
          </div>

        </div>

      </div>
    </div>
  )
}

export default SyllabusAnalysis
