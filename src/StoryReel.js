import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://spng.pngfind.com/pngs/s/680-6802379_america-marvel-panther-comics-poster-black-various-avengers.png"
        profileSrc="https://png.pngitem.com/pimgs/s/2-20473_thor-avengers-fh-avengers-thor-png-transparent-png.png"
        title="Chris Hemsworth"
      />

      <Story
        image="https://png.pngitem.com/pimgs/s/14-141790_spider-man-webs-png-spider-man-marvels-spider.png"
        profileSrc="https://png.pngitem.com/pimgs/s/2-22149_avengers-hulk-hd-png-download.png"
        title="Peter Parker"
      />

      <Story
        image="https://spng.pngfind.com/pngs/s/447-4471848_png-mercrio-avengers-age-of-ultron-heroes-name.png"
        profileSrc="https://png.pngitem.com/pimgs/s/115-1159050_captain-marvel-png-high-quality-image-captain-marvel.png"
        title="Brie Larson"
      />

      <Story
        image="https://spng.pngfind.com/pngs/s/2-22632_free-icons-png-avengers-infinity-war-iron-man.png"
        profileSrc=" https://png.pngitem.com/pimgs/s/366-3663865_ironman-action-photo-iron-man-hd-png-transparent.png"
        title="Tony stark"
      />

      <Story
        image="https://spng.pngfind.com/pngs/s/101-1015130_thor-png-avengers-end-game-iron-man-transparent.png"
        profileSrc="https://png.pngitem.com/pimgs/s/506-5060026_anime-marvel-black-panther-hd-png-download.png"
        title="chadwick Boseman"
      />
    </div>
  );
}

export default StoryReel;
