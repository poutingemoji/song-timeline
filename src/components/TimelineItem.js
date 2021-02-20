import ConditionalWrapper from "./ConditionalWrapper";
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
    <div className="order-1 w-5/12"></div>
    <div className="z-20 flex items-center order-1 w-3 h-3 rounded-full shadow-xl bg-celadon"></div>
    <div
      className="order-1 w-5/12 px-6 py-4 rounded-lg shadow-xl"
      style={{
        background: `linear-gradient(
      rgba(24, 24, 24, 0.80),
      rgba(24, 24, 24, 1)
    ), url(${item.backgroundImage})`,
      }}
    >
      <h3 className="mb-3 text-lg font-bold text-white 2xl:text-xl">{`${
        monthNames[item.date.getMonth()]
      } ${item.date.getDate()}, ${item.date.getFullYear()}`}</h3>

      {item.songs.map((song, i) => (
        <span key={i} className="text-sm 2xl:text-base">
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
          <p className="text-gray-light">{song.artists.join(", ")}</p>
        </span>
      ))}
    </div>
  </div>
);

export default TimelineItem;

/*
    <span
        className="tag"
        style={{
          color: data.category.color || "white",
          background: data.category.backgroundColor || "#1db954",
        }}><
      ><time>{data.date}</time>
        {data.category.tag}
      </span>
      

    
{data.songs.map((song, i) => (
        <span key={i}>
          <ConditionalWrapper
            condition={song.url}
            wrapper={(children) => (
              <a href={song.url} target="no_blank" rel="noopener">
                {children}
              </a>
            )}
          >
            <h4>{song.name}</h4>
          </ConditionalWrapper>
          <p>{song.artists.join(", ")}</p>
        </span>
      ))}

      {data.text?.length > 0 && <p>{data.text}</p>}
      */
