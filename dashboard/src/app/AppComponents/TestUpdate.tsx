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
    <div className="flex border-2 rounded-md p-6 items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src="./html5.png"
                      alt="HTML5 Logo"
                      className="w-12 h-12"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">
                        Hyper Text Markup Language
                      </h3>
                      <p className="text-md text-gray-700">
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
                      <Button className="h-12 w-32 bg-blue-950 hover:bg-blue-900 font-bold">
                        Update
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Update Statistics</DialogTitle>
                        <DialogDescription>
                          Update your rank, percentile, and correct answers
                          here. Click save when you're done.
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={props.handleUpdateStats} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="rank">Rank</Label>
                          <Input
                            id="rank"
                            type="number"
                            value={props.rank}
                            onChange={(e) =>
                              props.setRank(Math.max(1, parseInt(e.target.value)))
                            }
                            min="1"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="percentile">Percentile</Label>
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
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="correctAnswers">
                            Correct Answers
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
                          />
                        </div>
                        <Button type="submit">Save changes</Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
  )
}

export default TestUpdate
