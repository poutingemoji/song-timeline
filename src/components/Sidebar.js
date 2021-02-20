import artistData from "../data/artists";
import songData from "../data/songs";
import ConditionalWrapper from "./ConditionalWrapper"
console.log(artistData)
const artistAndSongData = [songData, artistData]
function Sidebar() {
  return (
    <div
      className="fixed bottom-0 left-0 flex-col hidden w-2/12 h-screen gap-4 px-6 pt-8 overflow-x-hidden overflow-y-scroll text-center bg-black lg:text-left md:flex"
      style={{ scrollbarColor: "dark" }}
    >
      <div></div>
      {/*songs*/}
      <p className="font-semibold uppercase text-gray-light">Current Songs</p>
      {songData.map((song) => (
        <div className="flex items-center">
          <img
            src={song.image}
            style={{ verticalAlign: "middle" }}
            className="h-14 w-14 lg:w-8 lg:h-8"
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
            <p className="hidden ml-2 text-base lg:block text-gray-light hover:text-white 2xl:text-lg">
              {song.name}
            </p>
          </ConditionalWrapper>
        </div>
      ))}

      {/*artists*/}
      <p className="font-semibold uppercase text-gray-light">Current Artists</p>
      {artistData.map((artist) => (
        <div className="flex items-center">
          <img
            src={artist.image}
            width="35"
            style={{ verticalAlign: "middle" }}
            className="rounded-full h-14 w-14 lg:w-8 lg:h-8"
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
            <p className="hidden ml-2 text-base lg:block text-gray-light hover:text-white 2xl:text-lg">
              {artist.name}
            </p>
          </ConditionalWrapper>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
