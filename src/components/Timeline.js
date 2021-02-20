import TimelineItem from "./TimelineItem";
import timelineData from "../data/timeline";
import React from "react";
import ConditionalWrapper from "./ConditionalWrapper";

function Timeline() {
  return (
    <div className="container w-full h-full mx-auto">
      <div className="relative h-full overflow-hidden wrap">
        <div className="absolute h-full border-2 border-opacity-50 border-gray left-2/4"></div>
        {timelineData.map((item, i) => {
          return <TimelineItem item={item} i={i} />;
        })}
      </div>
    </div>
  );
}

export default Timeline;

/*


    timelineData.length > 0 && (
      <div className="timeline-container">
        {timelineData.map((data, i) => (
          <TimelineItem data={data} key={i} />
        ))}
      </div>
    )
    */
