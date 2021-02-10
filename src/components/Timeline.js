import TimelineItem from "./TimelineItem";

const timelineData = [
  {
    songs: [
      { name: "Julia", artists: ["Lauv"] },
      { name: "Dreaming Alone", artists: ["Against the Current", "Taka"] },
      { name: "GOT MY NUMBER", artists: ["Monsta X"] },
      { name: "Drunk Enough to Say That I Love You", artists: ["PLVTINUM"] },
      { name: "Ridin Solo (Arvfz Remix)", artists: ["Njomza"] },
    ],
    date: "December 30, 2020",
    category: {
      tag: "Wrapped",
      color: "#1db954",
    },
  },
  {
    songs: [
      { name: "I Lost a Friend", artists: ["FINNEAS"] },
      {
        name: "Nicknames (feat. gnash)",
        artists: ["Walk Off the Earth, gnash"],
      },
      { name: "Dandelions", artists: ["Ruth B."] },
      { name: "Always", artists: ["Isak Danielson"] },
      { name: "Not Shy - English Ver.", artists: ["ITZY"] },
    ],
    date: "February 9, 2021",
    category: {
      tag: "Monthly",
      color: "#1db954",
    },
  },
];

const Timeline = () =>
  timelineData.length > 0 && (
    <div className="timeline-container">
      {timelineData.map((data, i) => (
        <TimelineItem data={data} key={i} />
      ))}
    </div>
  );

export default Timeline;
