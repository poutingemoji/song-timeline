import biggerLove from "../images/albums/bigger-love.jpg";
import tearsOfGold from "../images/albums/tears-of-gold.jpg";
import minefields from "../images/albums/minefields.jpg";
import howItAllWorksOut from "../images/albums/how-it-all-works-out.jpg";
import fetch from "node-fetch";

const songs = [
  {
    name: "Minefields",
    image: minefields,
    url: "https://www.youtube.com/watch?v=jKIEUdAMtrQ",
  },
  {
    name: "All of Me",
    image: biggerLove,
    url: "https://www.youtube.com/watch?v=450p7goxZqg",
  },
  {
    name: "Conversations in the Dark",
    image: biggerLove,
    url: "https://www.youtube.com/watch?v=qUD2GxTeVcI",
  },
  {
    name: "Tears of Gold",
    image: tearsOfGold,
    url: "https://www.youtube.com/watch?v=XszK-TDzMnQ",
  },
  {
    name: "How It all Works Out",
    image: howItAllWorksOut,
    url: "https://www.youtube.com/watch?v=NjN4rOBZV2s",
  },
];

/*
fetch(
  "https://api.spotify.com/v1/tracks?ids=3n3Ppam7vgaVa1iaRUc9Lp%2C3twNvmDtFQtAd5gMKedhLD",
  {
    headers: {
      Authorization: `Bearer ${process.env.SPOTIFY_TOKEN}`,
    },
  }
)
  .then((res) => res.json())
  .then((playlist) => console.log(playlist));*/


fetch(
  "https://api.spotify.com/v1/tracks?ids=3n3Ppam7vgaVa1iaRUc9Lp%2C3twNvmDtFQtAd5gMKedhLD",
  {
    headers: {
      Authorization: `Bearer ${process.env.SPOTIFY_TOKEN}`,
    },
  }
)
  .then((res) => res.json())
  .then((playlist) => console.log(playlist));
  
export default songs