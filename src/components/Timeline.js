import TimelineItem from "./TimelineItem";
import timelineData from "../data/timeline";

function Timeline() {
  return (
    <div className="container w-full h-full">
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