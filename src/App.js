import Timeline from "./components/Timeline";
import spotifyLogo from "./images/spotify-logo.png";
import artistData from "./data/artists";
import songData from "./data/songs";
import ConditionalWrapper from "./components/ConditionalWrapper";

function App() {
  return (
    <div className="flex flex-wrap md:flex-row-reverse">
      {/*Main Content */}
      {/* 
        <iframe
          src="https://datastudio.google.com/embed/reporting/0b9f3907-a3a9-42c8-8d31-215530b50f8e/page/jnxUB"
          frameBorder="0"
        ></iframe>
      */}

      <div className="w-full md:w-10/12 bg-background">
        <div className="container px-6 pt-16">
          <Timeline></Timeline>
        </div>
      </div>

      {/*Side bar */}
      <div className="fixed bottom-0 w-auto h-0 px-2 text-left bg-black md:w-2/12 md:pt-8 md:top-0 md:left-0 md:h-screen">
        <section className="flex flex-col gap-4 md:relative lg:float-left lg:px-6">
          <h1 className="text-xl font-bold text-white xl:text-2xl">
            poutingemoji's
            <img
              src={spotifyLogo}
              width="170"
              style={{ verticalAlign: "middle" }}
            />
            Timeline
          </h1>
          <hr className="border-foreground"></hr>

          {/*songs*/}
          <p className="font-semibold uppercase text-gray">Current Songs</p>
          {songData.map((song) => (
            <div className="flex items-center">
              <img
                src={song.image}
                width="35"
                style={{ verticalAlign: "middle" }}
                className="rounded-full"
              />
              <ConditionalWrapper
                condition={song.url}
                wrapper={(children) => (
                  <a
                    className="cursor-pointer"
                    href={song.url}
                    target="no_blank"
                    rel="noopener"
                  >
                    {children}
                  </a>
                )}
              >
                <p className="ml-2 text-lg hover:text-white">{song.name}</p>
              </ConditionalWrapper>
            </div>
          ))}

          {/*artists*/}
          <p className="font-semibold uppercase text-gray">Current Artists</p>
          {artistData.map((artist) => (
            <div className="flex items-center">
              <img
                src={artist.image}
                width="35"
                style={{ verticalAlign: "middle" }}
                className="rounded-full"
              />
              <ConditionalWrapper
                condition={artist.url}
                wrapper={(children) => (
                  <a
                    className="cursor-pointer"
                    href={artist.url}
                    target="no_blank"
                    rel="noopener"
                  >
                    {children}
                  </a>
                )}
              >
                <p className="ml-2 text-lg hover:text-white">{artist.name}</p>
              </ConditionalWrapper>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;
