import artistData from "../data/artists";
import songData from "../data/songs";
import ListItem from "./ListItem";

function Sidebar() {
  return (
    <div className="fixed bottom-0 left-0 flex-col items-center hidden w-2/12 gap-4 px-6 py-6 overflow-x-hidden overflow-y-scroll text-center bg-black h-15/16 lg:text-left md:flex lg:items-start">
      <p className="font-semibold uppercase text-gray-light">Favorite Songs</p>
      {songData.map((song, i) => (
        <ListItem key={i} item={song} />
      ))}
      <p className="font-semibold uppercase text-gray-light">
        Favorite Artists
      </p>
      {artistData.map((artist, i) => (
        <ListItem key={i} item={artist} rounded={true} />
      ))}
    </div>
  );
}

export default Sidebar;
