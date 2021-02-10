import TimelineItem from "./TimelineItem";

const timelineData = [
  {
    songs: [{ name: "GOT MY NUMBER", artists: ["Monsta X"] }],
    date: "September 14, 2020",
    category: {
      tag: "Recommendation",
      backgroundColor: "#ff5446",
    },
  },
  {
    songs: [{ name: "Bad Boy", artists: ["CHUNG HA", "Christopher"] }],
    date: "September 27, 2020",
    category: {
      tag: "Recommendation",
      backgroundColor: "#ff5446",
    },
  },
  {
    songs: [
      { name: "Alexander Hamilton", artists: ["Lin-Manuel Miranda"] },
      { name: "Cabinet Battle #1", artists: ["Lin-Manuel Miranda"] },
      { name: "The Schuyler Sisters", artists: ["Lin-Manuel Miranda"] },
    ],
    date: "November 13, 2020",
    category: {
      tag: "Recommendation",
      backgroundColor: "#ff5446",
    },
  },
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
      color: "#ef36a7",
      backgroundColor: "#9cf0e1",
    },
  },
  {
    songs: [
      { name: "Conversations in the Dark", artists: ["John Legend"] },
      {
        name: "Even If the Sky Is Falling Down",
        artists: ["Candelion", "Cara Dee"],
      },
      { name: "Shine", artists: ["Jagwar Twin"] },
      { name: "Minefields", artists: ["Faouzia", "John Legend"] },
      { name: "Losing Me", artists: ["Gabrielle Aplin", "JP Cooper"] },
      { name: "You & Me", artists: ["James TW"] },
      { name: "When You Love Someone", artists: ["James TW"] },
      { name: "Like Strangers Do", artists: ["AJ Mitchell"] },
    ],
    date: "January 28, 2021",
    category: {
      tag: "Monthly",
    },
  },
  {
    songs: [
      { name: "I Lost a Friend", artists: ["FINNEAS"] },
      {
        name: "Nicknames (feat. gnash)",
        artists: ["Walk Off the Earth", "gnash"],
      },
      { name: "Dandelions", artists: ["Ruth B."] },
      { name: "Always", artists: ["Isak Danielson"] },
      { name: "Not Shy - English Ver.", artists: ["ITZY"] },
    ],
    date: "February 9, 2021",
    category: {
      tag: "Monthly",
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
