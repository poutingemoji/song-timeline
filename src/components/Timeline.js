import TimelineItem from "./TimelineItem";
import monstaXAllAboutLuv from "../images/monsta-x-all-about-luv.jpg"
import chungHaBadBoy from "../images/chung-ha-bad-boy.jpg";
import linManuelMirandaHamilton from "../images/lin-manuel-miranda-hamilton.jpg";
import lauvHowImFeeling from "../images/lauv-how-im-feeling.jpg"
import johnLegendBiggerLove from "../images/john-legend-bigger-love.jpg";
import walkOffTheEarthNicknames from "../images/walk-off-the-earth-nicknames.jpg"

const timelineData = [
  {
    songs: [
      {
        name: "GOT MY NUMBER",
        artists: ["Monsta X"],
        url: "https://www.youtube.com/watch?v=6VUPNB_-kKc",
      },
    ],
    date: "September 14, 2020",
    backgroundImage: monstaXAllAboutLuv,
    category: {
      tag: "Recommendation",
      backgroundColor: "#ff5446",
    },
  },
  {
    songs: [
      {
        name: "Bad Boy",
        artists: ["CHUNG HA", "Christopher"],
        url: "https://www.youtube.com/watch?v=JXgiOvHU0AY",
      },
    ],
    date: "September 27, 2020",
    backgroundImage: chungHaBadBoy,
    category: {
      tag: "Recommendation",
      backgroundColor: "#ff5446",
    },
  },
  {
    songs: [
      {
        name: "Alexander Hamilton",
        artists: [
          "Leslie Odom Jr.",
          "Anthony Ramos",
          "Daveed Diggs",
          "Okieriete Onaodowan",
          "Phillipa Soo",
          "Original Broadway Cast of Hamilton",
        ],
        url: "https://www.youtube.com/watch?v=VhinPd5RRJw",
      },
      {
        name: "Cabinet Battle #1",
        artists: ["Christopher Jackson", "Daveed Diggs", "Okieriete Onaodowan"],
        url: "https://www.youtube.com/watch?v=dSYW61XQZeo",
      },
      {
        name: "The Schuyler Sisters",
        artists: [
          "Renée Elise Goldsberry",
          "Phillipa Soo",
          "Jasmine Cephas-Jones",
          "Leslie Odom Jr.",
          "Original Broadway Cast of Hamilton",
        ],
        url: "https://www.youtube.com/watch?v=UeqKF_NF1Qs",
      },
    ],
    date: "November 13, 2020",
    backgroundImage: linManuelMirandaHamilton,
    category: {
      tag: "Recommendation",
      backgroundColor: "#ff5446",
    },
  },
  {
    songs: [
      {
        name: "Julia",
        artists: ["Lauv"],
        url: "https://www.youtube.com/watch?v=0PTU4kGj5JI",
      },
      {
        name: "Dreaming Alone",
        artists: ["Against the Current", "Taka"],
        url: "https://www.youtube.com/watch?v=XIFU8APnPSk",
      },
      {
        name: "GOT MY NUMBER",
        artists: ["Monsta X"],
        url: "https://www.youtube.com/watch?v=6VUPNB_-kKc",
      },
      {
        name: "Drunk Enough to Say That I Love You",
        artists: ["PLVTINUM"],
        url: "https://www.youtube.com/watch?v=3L01nwZl48Q",
      },
      {
        name: "Ridin Solo (Arvfz Remix)",
        artists: ["Njomza"],
        url: "https://www.youtube.com/watch?v=_1johXhbdKU",
      },
    ],
    date: "December 30, 2020",
    backgroundImage: lauvHowImFeeling,
    category: {
      tag: "Wrapped",
      color: "#ef36a7",
      backgroundColor: "#9cf0e1",
    },
  },
  {
    songs: [
      {
        name: "Conversations in the Dark",
        artists: ["John Legend"],
        url: "https://www.youtube.com/watch?v=qUD2GxTeVcI",
      },
      {
        name: "Even If the Sky Is Falling Down",
        artists: ["Candelion", "Cara Dee"],
        url: "https://www.youtube.com/watch?v=HsN_8j5xSXI",
      },
      {
        name: "Shine",
        artists: ["Jagwar Twin"],
        url: "https://www.youtube.com/watch?v=8w-VYdUL3t8",
      },
      {
        name: "Minefields",
        artists: ["Faouzia", "John Legend"],
        url: "https://www.youtube.com/watch?v=jKIEUdAMtrQ",
      },
      {
        name: "Losing Me",
        artists: ["Gabrielle Aplin", "JP Cooper"],
        url: "https://www.youtube.com/watch?v=BPD84itI-x4",
      },
      {
        name: "You & Me",
        artists: ["James TW"],
        url: "https://www.youtube.com/watch?v=OTOmQmOFeVo",
      },
      {
        name: "When You Love Someone",
        artists: ["James TW"],
        url: "https://www.youtube.com/watch?v=0Bf3CJZ4hvg",
      },
      {
        name: "Like Strangers Do",
        artists: ["AJ Mitchell"],
        url: "https://www.youtube.com/watch?v=MDSzV2Ymq2A",
      },
    ],
    date: "January 28, 2021",
    backgroundImage: johnLegendBiggerLove,
    category: {
      tag: "Monthly",
    },
  },
  {
    songs: [
      {
        name: "I Lost a Friend",
        artists: ["FINNEAS"],
        url: "https://www.youtube.com/watch?v=3mMVcCMO_Ng",
      },
      {
        name: "Nicknames (feat. gnash)",
        artists: ["Walk Off the Earth", "gnash"],
        url: "https://www.youtube.com/watch?v=r2KHf9Dq8P4",
      },
      {
        name: "Dandelions",
        artists: ["Ruth B."],
        url: "https://www.youtube.com/watch?v=W8a4sUabCUo",
      },
      {
        name: "Always",
        artists: ["Isak Danielson"],
        url: "https://www.youtube.com/watch?v=YZdyIgst-S4",
      },
      {
        name: "Not Shy - English Ver.",
        artists: ["ITZY"],
        url: "https://www.youtube.com/watch?v=tvTdg7sgsgU",
      },
    ],
    date: "February 9, 2021",
    backgroundImage: walkOffTheEarthNicknames,
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
