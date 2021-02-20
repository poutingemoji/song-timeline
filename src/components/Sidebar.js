import artistData from "../data/artists";
import songData from "../data/songs";
import ListItem from "./ListItem";

function Sidebar() {
  return (
    <div className="fixed bottom-0 left-0 flex-col items-center hidden w-2/12 h-screen gap-4 px-6 pt-8 overflow-x-hidden overflow-y-scroll text-center bg-black lg:text-left md:flex lg:items-start">
      <div></div>
      <p className="font-semibold uppercase text-gray-light">Favorite Songs</p>
      {songData.map((song) => (
        <ListItem item={song} />
      ))}
      <p className="font-semibold uppercase text-gray-light">Favorite Artists</p>
      {artistData.map((artist) => (
        <ListItem item={artist} rounded={true} />
      ))}
    </div>
  );
}

export default Sidebar;
