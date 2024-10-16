import React from 'react'

interface incomingProps{
    rank: number;
    percentile: number;
    correctAnswers: number;
}

function QuickStats(props: incomingProps) {
  return (
    <div className="border-2 rounded-md p-4">
                  <div className="flex p-2 font-bold">Quick Statistics</div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                    {/* RANK */}
                    <div className="bg-gray-50 flex gap-x-3 justify-center items-center rounded-lg p-4 text-center">
                      {/* Image */}
                      <div className="w-1/4 sm:w-1/3 flex justify-center items-center">
                        <img
                          src="./trophy.png"
                          alt="Trophy"
                          className="h-12 w-12 object-contain border bg-gray-200 rounded-full"
                        />
                      </div>

                      {/* Text */}
                      <div className="w-2/3 flex flex-col items-start">
                        <div className="text-2xl font-bold text-black">
                          {props.rank}
                        </div>
                        <div className="text-xs text-gray-500 font-bold">
                          YOUR RANK
                        </div>
                      </div>
                    </div>

                    {/* PERCENTILE */}
                    <div className="bg-gray-50 flex gap-x-3 justify-center items-center rounded-lg p-4 text-center">
                      {/* Image */}
                      <div className="w-1/4 sm:w-1/3 flex justify-center items-center">
                        <img
                          src="./board.png"
                          alt="Board"
                          className="h-12 w-12 object-contain border bg-gray-200 rounded-full"
                        />
                      </div>

                      {/* Text */}
                      <div className="w-2/3 flex flex-col items-start">
                        <div className="text-2xl font-bold text-black">
                          {props.percentile}%
                        </div>
                        <div className="text-xs text-gray-500 font-bold">
                          PERCENTILE
                        </div>
                      </div>
                    </div>

                    {/* ANSWER COUNT */}
                    <div className="bg-gray-50 flex gap-x-3 justify-center items-center rounded-lg p-4 text-center">
                      {/* Image */}
                      <div className="w-1/4 sm:w-1/3 flex justify-center items-center">
                        <img
                          src="./check.png"
                          alt="Check"
                          className="h-12 w-12 object-contain border bg-gray-200 rounded-full"
                        />
                      </div>

                      {/* Text */}
                      <div className="w-2/3 flex flex-col items-start">
                        <div className="text-2xl font-bold text-black">
                          {props.correctAnswers} / 15
                        </div>
                        <div className="text-xs text-gray-500 font-bold">
                          CORRECT ANSWERS
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  )
}

export default QuickStats
