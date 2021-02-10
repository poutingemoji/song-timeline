import ConditionalWrapper from "./ConditionalWrapper";

const TimelineItem = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item-content" style={{background: `linear-gradient(
      rgba(24, 24, 24, 0.9),
      rgba(24, 24, 24, 1)
    ), url(${data.backgroundImage})`}}>
      <span
        className="tag"
        style={{
          color: data.category.color || "white",
          background: data.category.backgroundColor || "#1db954",
        }}
      >
        {data.category.tag}
      </span>
      <time>{data.date}</time>

      {data.songs.map((song, i) => (
        <span key={i}>
          <ConditionalWrapper
            condition={song.url}
            wrapper={(children) => (
              <a href={song.url} target="no_blank">
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
      <span className="circle" />
    </div>
  </div>
);

export default TimelineItem;

{
  {
  }
}
