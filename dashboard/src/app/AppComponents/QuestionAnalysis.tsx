import React from 'react'
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

interface incomingProps{
    correctAnswers: number;
    questionAnalysisData: {name: string, value: number}[]
}

function QuestionAnalysis( props : incomingProps ) {

  const COLORS = ["#007bff", "#cae4ff"];

  return (
    <div className="bg-white p-6 rounded-lg shadow">

      <div className="flex justify-between items-center mb-4">
        <h4 className="text-lg font-semibold">
          Question Analysis
        </h4>
        <span className="text-blue-600 font-semibold">
          {props.correctAnswers}/15
        </span>
      </div>

      <div className="flex flex-col gap-y-4 items-center justify-center mb-4">

        {
          props.correctAnswers === 15 ? (
            <div className='font-bold text-sm'>
              You scored {props.correctAnswers} questions correct out of 15. Keep it up!!
            </div>
          ) : 
          (
            <div className='font-bold text-sm'>
              You scored {props.correctAnswers} questions correct out of 15. However, it still needs some improvement.
            </div>
          )
        }

        <div className="w-48 h-48">
          
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={props.questionAnalysisData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                fill="#8884d8"
                paddingAngle={0}
                dataKey="value"
              >
              {props.questionAnalysisData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

        </div>

      </div>

    </div>
  )
}

export default QuestionAnalysis
