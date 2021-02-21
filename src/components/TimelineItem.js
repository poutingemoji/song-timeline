import ConditionalWrapper from "./ConditionalWrapper";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const TimelineItem = ({ item, i }) => (
  <div
    className={`flex ${
      i % 2 == 0 ? "flex-row-reverse" : ""
    } items-center justify-between w-full mb-8 ${
      i % 2 == 0 ? "text-right" : ""
    }`}
  >
    <div className="order-1 w-5/12 md:w-13/28"></div>
    <div className="z-20 flex items-center order-1 w-3 h-3 ml-1 rounded-full shadow-xl bg-celadon"></div>

    <ConditionalWrapper
      condition={item.description}
      wrapper={(children) => (
        <Tippy content={item.description}>{children}</Tippy>
      )}
    >
      <div
        className="order-1 w-5/12 px-6 py-4 rounded-lg shadow-xl md:w-13/28"
        style={{
          background: `linear-gradient(
      rgba(24, 24, 24, 0.9),
      rgba(24, 24, 24, 0.9)
    ), url(${item.backgroundImage})`,
        }}
      >
        <h3 className="mb-3 text-lg font-bold text-white sm:text-xl hover:wavy">{`${
          monthNames[item.date.getMonth()]
        } ${item.date.getDate()}, ${item.date.getFullYear()}`}</h3>

        {item.songs.map((song, i) => (
          <span key={i} className="text-sm sm:text-base">
            <ConditionalWrapper
              condition={song.url}
              wrapper={(children) => (
                <a href={song.url} target="no_blank" rel="noopener">
                  {children}
                </a>
              )}
            >
              <h3 className={`text-white ${song.url ? "hover:underline" : ""}`}>
                {song.name}
              </h3>
            </ConditionalWrapper>
            <p className="hidden text-gray-light sm:block">
              {song.artists.join(", ")}
            </p>
          </span>
        ))}
      </div>
    </ConditionalWrapper>
  </div>
);

export default TimelineItem;
