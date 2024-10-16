import React from 'react'

import { CircleUserRound } from "lucide-react";

function Header() {
  return (
    <header className="bg-white shadow-md p-4">
        <div className="max-w-8xl flex justify-between items-center">
          <h1 className="text-2xl ml-10 font-bold text-gray-800">WhatBytes</h1>

          <div className="flex items-center border-2 shadow-sm p-2 rounded-md space-x-2 mr-10 hover:cursor-pointer">
            <CircleUserRound className="h-8 w-8" />
            <span className="text-black font-bold">Rahil Siddique</span>
          </div>
        </div>
    </header>
  )
}

export default Header
