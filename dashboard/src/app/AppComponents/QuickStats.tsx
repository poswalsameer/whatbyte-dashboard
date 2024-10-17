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
                    <div className="
                        md:bg-gray-50 md:flex md:flex-col md:gap-y-2 md:justify-center md:items-start md:rounded-lg md:p-4 md:text-center
                        lg:bg-gray-50 lg:flex lg:flex-col lg:gap-y-2 lg:justify-center lg:items-start lg:rounded-lg lg:p-4 lg:text-center
                        xl:bg-gray-50 xl:flex xl:flex-col xl:gap-y-2 xl:justify-center xl:items-start xl:rounded-lg xl:p-4 xl:text-center
                        2xl:bg-gray-50 2xl:flex 2xl:flex-col 2xl:gap-y-2 2xl:justify-center 2xl:items-start 2xl:rounded-lg 2xl:p-4 2xl:text-center">
                      {/* Image */}
                      <div className="
                        md:w-full md:flex md:gap-x-2 md:justify-start md:items-center
                        lg:w-full lg:flex lg:gap-x-2 lg:justify-start lg:items-center
                        xl:w-full xl:flex xl:gap-x-2 xl:justify-start xl:items-center
                        2xl:w-full 2xl:flex 2xl:gap-x-2 2xl:justify-start 2xl:items-center">
                          
                          <img
                            src="./trophy.png"
                            alt="Trophy"
                            className="  
                            md:h-7 md:w-7 md:object-contain md:border md:bg-gray-200 md:rounded-full
                            lg:h-7 lg:w-7 lg:object-contain lg:border lg:bg-gray-200 lg:rounded-full
                            xl:h-9 xl:w-9 xl:object-contain xl:border xl:bg-gray-200 xl:rounded-full
                            2xl:h-9 2xl:w-9 2xl:object-contain 2xl:border 2xl:bg-gray-200 2xl:rounded-full"
                          />
                          <div className="
                              md:text-base md:font-bold md:text-black
                              lg:text-base lg:font-bold lg:text-black
                              xl:text-2xl xl:font-bold xl:text-black
                              2xl:text-2xl 2xl:font-bold 2xl:text-black">
                          {props.rank}
                          </div>
                      </div>

                      {/* Text */}
                      <div className="
                        md:w-full md:flex md:flex-col md:items-start
                        lg:w-full lg:flex lg:flex-col lg:items-start
                        xl:w-full xl:flex xl:flex-col xl:items-start
                        2xl:w-full 2xl:flex 2xl:flex-col 2xl:items-start">
                        
                        <div className="
                          md:text-xs md:text-gray-500 md:font-bold
                          lg:text-xs lg:text-gray-500 lg:font-bold
                          xl:text-xs xl:text-gray-500 xl:font-bold
                          2xl:text-xs 2xl:text-gray-500 2xl:font-bold">
                          YOUR RANK
                        </div>
                      </div>
                    </div>

                    {/* PERCENTILE */}
                    <div className="
                        md:bg-gray-50 md:flex md:flex-col md:gap-y-2 md:justify-center md:items-start md:rounded-lg md:p-4 md:text-center
                        lg:bg-gray-50 lg:flex lg:flex-col lg:gap-y-2 lg:justify-center lg:items-start lg:rounded-lg lg:p-4 lg:text-center
                        xl:bg-gray-50 xl:flex xl:flex-col xl:gap-y-2 xl:justify-center xl:items-start xl:rounded-lg xl:p-4 xl:text-center
                      2xl:bg-gray-50 2xl:flex 2xl:flex-col 2xl:gap-y-2 2xl:justify-center 2xl:items-start 2xl:rounded-lg 2xl:p-4 2xl:text-center">
                      {/* Image */}
                      <div className="
                          md:w-full md:flex md:gap-x-2 md:justify-start md:items-center
                          lg:w-full lg:flex lg:gap-x-2 lg:justify-start lg:items-center
                          xl:w-full xl:flex xl:gap-x-2 xl:justify-start xl:items-center
                          2xl:w-full 2xl:flex 2xl:gap-x-2 2xl:justify-start 2xl:items-center">
                            
                            <img
                              src="./board.png"
                              alt="Board"
                              className="
                              md:h-7 md:w-7 md:object-contain md:border md:bg-gray-200 md:rounded-full
                              lg:h-7 lg:w-7 lg:object-contain lg:border lg:bg-gray-200 lg:rounded-full
                              xl:h-9 xl:w-9 xl:object-contain xl:border xl:bg-gray-200 xl:rounded-full
                              2xl:h-9 2xl:w-9 2xl:object-contain 2xl:border 2xl:bg-gray-200 2xl:rounded-full"
                            />
                            <div className="
                              md:text-base md:font-bold md:text-black
                              lg:text-base lg:font-bold lg:text-black
                              xl:text-2xl xl:font-bold xl:text-black
                              2xl:text-2xl 2xl:font-bold 2xl:text-black">
                              {props.percentile}%
                            </div>
                      </div>

                      {/* Text */}
                      <div className="
                        md:w-full md:flex md:flex-col md:items-start
                        lg:w-full lg:flex lg:flex-col lg:items-start
                        xl:w-full xl:flex xl:flex-col xl:items-start
                        2xl:w-full 2xl:flex 2xl:flex-col 2xl:items-start">
                        
                        <div className="
                          md:text-xs md:text-gray-500 md:font-bold
                          lg:text-xs lg:text-gray-500 lg:font-bold
                          xl:text-xs xl:text-gray-500 xl:font-bold
                          2xl:text-xs 2xl:text-gray-500 2xl:font-bold">
                          PERCENTILE
                        </div>
                      </div>
                    </div>

                    {/* ANSWER COUNT */}
                    <div className="
                        md:bg-gray-50 md:flex md:flex-col md:gap-y-2 md:justify-center md:items-start md:rounded-lg md:p-4 md:text-center
                        lg:bg-gray-50 lg:flex lg:flex-col lg:gap-y-2 lg:justify-center lg:items-start lg:rounded-lg lg:p-4 lg:text-center
                        xl:bg-gray-50 xl:flex xl:flex-col xl:gap-y-2 xl:justify-center xl:items-start xl:rounded-lg xl:p-4 xl:text-center
                      2xl:bg-gray-50 2xl:flex 2xl:flex-col 2xl:gap-y-2 2xl:justify-center 2xl:items-start 2xl:rounded-lg 2xl:p-4 2xl:text-center">
                      {/* Image */}
                      <div className="
                        md:w-full md:flex md:gap-x-2 md:justify-start md:items-center
                        lg:w-full lg:flex lg:gap-x-2 lg:justify-start lg:items-center
                        xl:w-full xl:flex xl:gap-x-2 xl:justify-start xl:items-center
                        2xl:w-full 2xl:flex 2xl:gap-x-2 2xl:justify-start 2xl:items-center">
                          
                          <img
                            src="./check.png"
                            alt="Check"
                            className="
                            md:h-7 md:w-7 md:object-contain md:border md:bg-gray-200 md:rounded-full
                            lg:h-7 lg:w-7 lg:object-contain lg:border lg:bg-gray-200 lg:rounded-full
                            xl:h-9 xl:w-9 xl:object-contain xl:border xl:bg-gray-200 xl:rounded-full
                            2xl:h-9 2xl:w-9 2xl:object-contain 2xl:border 2xl:bg-gray-200 2xl:rounded-full"
                          />
                          <div className="
                            md:text-base md:font-bold md:text-black
                            lg:text-base lg:font-bold lg:text-black
                            xl:text-2xl xl:font-bold xl:text-black
                            2xl:text-2xl 2xl:font-bold 2xl:text-black">
                            {props.correctAnswers} / 15
                          </div>
                      </div>

                      {/* Text */}
                      <div className="
                        md:w-full md:flex md:flex-col md:items-start
                        lg:w-full lg:flex lg:flex-col lg:items-start
                        xl:w-full xl:flex xl:flex-col xl:items-start
                        2xl:w-full 2xl:flex 2xl:flex-col 2xl:items-start">
                        
                        <div className="
                          md:text-xs md:text-gray-500 md:font-bold
                          lg:text-xs lg:text-gray-500 lg:font-bold
                          xl:text-xs xl:text-gray-500 xl:font-bold
                          2xl:text-xs 2xl:text-gray-500 2xl:font-bold">
                          CORRECT ANSWERS
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  )
}

export default QuickStats
