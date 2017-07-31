import React from "react";
import { Group } from "@vx/group";
import { scaleTime, scaleLinear } from "@vx/scale";
import { AreaClosed } from "@vx/shape";
import { AxisLeft, AxisBottom } from "@vx/axis";
import { LinearGradient } from "@vx/gradient";
import { extent, max } from "d3-array";

const Graph = ({ names }) => {
  const data = names.slice(0).sort((a, b) => b.year - a.year);
  const width = 600;
  const height = 600;

  const x = d => new Date(d.year, 0);
  const y = d => d.occurrences;

  const margin = {
    top: 60,
    bottom: 60,
    left: 80,
    right: 80
  };
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  let xScale;
  let yScale;

  if (data.length === 1) {
    xScale = scaleTime({
      range: [0, xMax],
      domain: [new Date(data[0].year - 8, 0), new Date(data[0].year, 0)]
    });
    yScale = scaleLinear({
      range: [yMax, 0],
      domain: [0, max(data, y)]
    });
  } else {
    xScale = scaleTime({
      range: [0, xMax],
      domain: extent(data, x)
    });
    yScale = scaleLinear({
      range: [yMax, 0],
      domain: extent(data, y)
    });
  }

  return (
    <div style={{ width: "600px", margin: "auto" }}>
      <svg width={width} height={height}>
        <LinearGradient from="#209cff" to="#68e0cf" id="gradient" />

        <Group top={margin.top} left={margin.left}>
          <AreaClosed
            data={data}
            xScale={xScale}
            yScale={yScale}
            x={x}
            y={y}
            fill={"url(#gradient)"}
            stroke={""}
          />ƒ
          <AxisLeft
            scale={yScale}
            top={0}
            left={0}
            label={"Occurrences"}
            stroke={"#1b1a1e"}
            tickTextFill={"#1b1a1e"}
          />
          <AxisBottom
            scale={xScale}
            top={yMax}
            label={"Years"}
            stroke={"#1b1a1e"}
            tickTextFill={"#1b1a1e"}
          />
        </Group>
      </svg>
    </div>
  );
};

export default Graph;
