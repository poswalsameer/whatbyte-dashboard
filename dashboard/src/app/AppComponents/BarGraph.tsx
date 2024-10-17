import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";


interface incomingProps{
    percentile: number;
    comparisonData: { name: string; you: number; }[]
}

function BarGraph(props: incomingProps) {
  return (
    <div className=" border-2 rounded-md p-4 my-5">

      <h4 className="text-lg font-bold mb-2">
        Comparison Graph
      </h4>

      <p className="text-base font-bold text-gray-600 mb-4">
        You scored {props.percentile}% percentile which is lower than the average
        percentile 72% of all the engineers who took this assessment
      </p>
    
      <div className="h-64 w-full">

        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={props.comparisonData}>
            <XAxis
              dataKey="name"
              interval={Math.floor(props.comparisonData.length / 4)}
            />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="you"
              stroke="#8884d8"
              name="Your Score"
            />
          </LineChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default BarGraph;
