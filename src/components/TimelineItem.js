const TimelineItem = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <span className="tag" style={{ background: data.category.color }}>
        {data.category.tag}
      </span>
      <time>{data.date}</time>

      {data.songs.map((song, i) => (
        <span key={i}>
          <h4>{song.name}</h4> <p>{song.artists.join(", ")}</p>
        </span>
      ))}

      {data.text?.length > 0 && <p>{data.text}</p>}
      {data.link && (
        <a href={data.link.url} target="_blank" rel="noopener noreferrer">
          {data.link.text}
        </a>
      )}
      <span className="circle" />
    </div>
  </div>
);

export default TimelineItem;
