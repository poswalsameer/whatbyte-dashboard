import React from 'react'
import { BarChart2, BookOpen, Home } from "lucide-react";

function Sidebar() {
  return (
    <aside className="w-56 bg-white shadow-md hidden md:block">
          <nav className="pr-5">
            <ul className="space-y-1">
              <li>
                <a
                  href="#"
                  className="flex items-center font-bold space-x-2 text-gray-700 hover:bg-gray-100 rounded-r-full p-4"
                >
                  <Home className="w-5 h-5" />
                  <span>Dashboard</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center font-bold space-x-2 text-blue-800 hover:bg-gray-100 rounded-r-full p-4 bg-gray-200"
                >
                  <BarChart2 className="w-5 h-5" />
                  <span>Skill Test</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center font-bold space-x-2 text-gray-700 hover:bg-gray-100 rounded-r-full p-4"
                >
                  <BookOpen className="w-5 h-5" />
                  <span>Internship</span>
                </a>
              </li>
            </ul>
          </nav>
        </aside>
  )
}

export default Sidebar
