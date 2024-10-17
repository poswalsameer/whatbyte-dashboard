import React from 'react'

import { CircleUserRound } from "lucide-react";

function Header() {
  return (
    <header className="bg-white shadow-md p-4">
        <div className="max-w-8xl flex justify-between items-center">
          <h1 className="
              text-lg ml-2 
              sm:text-2xl sm:ml-10 font-bold text-gray-800">WhatBytes</h1>

          <div className="
              flex items-center border-2 shadow-sm p-2 rounded-md space-x-1 mr-2
              sm:flex sm:items-center sm:border-2 sm:shadow-sm sm:p-2 sm:rounded-md sm:space-x-2 sm:mr-10 hover:cursor-pointer">
            <CircleUserRound className="h-4 w-4 sm:h-8 sm:w-8" />
            <span className="text-black font-bold text-sm sm:text-lg">Rahil Siddique</span>
          </div>
        </div>
    </header>
  )
}

export default Header
