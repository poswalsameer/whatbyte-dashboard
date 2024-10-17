import React from 'react'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";

interface incomingProps{
    isUpdateModalOpen: boolean;
    setIsUpdateModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    handleUpdateStats: (e: React.FormEvent<HTMLFormElement>) => void;
    rank: number;
    setRank: React.Dispatch<React.SetStateAction<number>>
    percentile: number;
    setPercentile: React.Dispatch<React.SetStateAction<number>>
    correctAnswers: number;
    setCorrectAnswers: React.Dispatch<React.SetStateAction<number>>
}

function TestUpdate(props : incomingProps) {
  return (
    <div className="flex border-2 rounded-md p-6 space-x-4 items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <img
                      src="./html5.png"
                      alt="HTML5 Logo"
                      className="w-12 h-12"
                    />
                    <div>
                      <h3 className="md:text-base xl:text-lg font-semibold">
                        Hyper Text Markup Language
                      </h3>
                      <p className=" md:text-xs lg:text-sm xl:text-md text-gray-700">
                        Questions: 08 | Duration: 15 mins | Submitted on 5 June
                        2021
                      </p>
                    </div>
                  </div>

                  <Dialog
                    open={props.isUpdateModalOpen}
                    onOpenChange={props.setIsUpdateModalOpen}
                  >
                    <DialogTrigger asChild>
                      <Button className="md:h-10 md:w-24 xl:h-12 xl:w-32 bg-blue-950 hover:bg-blue-900 font-bold">
                        Update
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px]">
                      <DialogHeader className='my-3'>
                        <DialogTitle className='text-2xl'>Update Scores</DialogTitle>
                      </DialogHeader>
                      <form onSubmit={props.handleUpdateStats} className="space-y-4">

                        <div className="flex justify-center items-center space-x-5">
                          <Label htmlFor="rank" className='w-[50%] font-bold'>Update your Rank: </Label>
                          <Input
                            id="rank"
                            type="number"
                            value={props.rank}
                            onChange={(e) =>
                              props.setRank(Math.max(1, parseInt(e.target.value)))
                            }
                            min="1"
                            className='w-[50%] focus:outline-none focus:border-2 focus:border-blue-700 border border-gray-300'
                          />
                        </div>

                        <div className="flex justify-center items-center space-x-5">
                          <Label htmlFor="percentile" className='w-[50%] font-bold'>Update your Percentile: </Label>
                          <Input
                            id="percentile"
                            type="number"
                            value={props.percentile}
                            onChange={(e) =>
                              props.setPercentile(
                                Math.min(
                                  100,
                                  Math.max(0, parseInt(e.target.value))
                                )
                              )
                            }
                            min="0"
                            max="100"
                            className='w-[50%] font-bold focus:outline-none focus:border-2 focus:border-blue-700 border border-gray-300'
                          />
                        </div>
                        <div className="flex justify-center items-center space-x-5">
                          <Label htmlFor="correctAnswers" className='w-[50%] font-bold'>
                            Update your current score:
                          </Label>
                          <Input
                            id="correctAnswers"
                            type="number"
                            value={props.correctAnswers}
                            onChange={(e) =>
                                props.setCorrectAnswers(
                                Math.min(
                                  15,
                                  Math.max(0, parseInt(e.target.value))
                                )
                              )
                            }
                            min="0"
                            max="15"
                            className='w-[50%] font-bold focus:outline-none focus:border-2 focus:border-blue-700 border border-gray-300'
                          />
                        </div>
                        <Button type="submit" className='font-bold bg-blue-950 hover:bg-blue-900'>Save changes</Button>
                      </form>
                    </DialogContent>
                  </Dialog>

                </div>
  )
}

export default TestUpdate
