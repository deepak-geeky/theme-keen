import React, { PureComponent } from "react";
import { AreaChart, Area, ResponsiveContainer, Tooltip } from "recharts";
import splineData from "../../../utils/splineData";

const data = splineData;

export default class SplineArea extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width={'99%'} height={300}>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 0,
            left: 0,
            bottom: 0
          }}
        >
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
