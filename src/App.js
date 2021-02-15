import Timeline from "./components/Timeline";
import spotifyLogo from "./images/spotify-logo.png";
import artistData from "./data/artists"
import songData from "./data/songs";
import ConditionalWrapper from "./components/ConditionalWrapper"

function App() {
  return (
    <div className="flex md:flex-row-reverse flex-wrap">
      {/*Main Content */}
      <iframe
        src="https://datastudio.google.com/embed/reporting/0b9f3907-a3a9-42c8-8d31-215530b50f8e/page/jnxUB"
        frameborder="0"
      ></iframe>

      <div className="w-full md:w-10/12 bg-background">
        <div className="container pt-16 px-6">
          <Timeline></Timeline>
        </div>
      </div>

      {/*Side bar */}
      <div className="h-0 w-auto md:w-2/12 bg-black px-2 text-left fixed bottom-0 md:pt-8 md:top-0 md:left-0 md:h-screen">
        <section className="md:relative lg:float-left lg:px-6 flex flex-col gap-4">
          <h1 className="text-white font-bold text-xl xl:text-2xl">
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
          <p className="uppercase font-semibold text-gray">Current Songs</p>
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
                <p className="hover:text-white  ml-2 text-lg">{song.name}</p>
              </ConditionalWrapper>
            </div>
          ))}

          {/*artists*/}
          <p className="uppercase font-semibold text-gray">Current Artists</p>
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
                <p className="hover:text-white  ml-2 text-lg">{artist.name}</p>
              </ConditionalWrapper>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;
