import hills from "@/assets/site/mountain-sunrise-wide.jpg.asset.json";
import camden from "@/assets/site/street-food-night.jpg.asset.json";
import painter from "@/assets/site/painter.jpg.asset.json";
import laughing from "@/assets/site/phone-laughing.jpg.asset.json";
import kitchen from "@/assets/site/kitchen-spoon.jpg.asset.json";
import pottery from "@/assets/site/pottery-wheel.jpg.asset.json";
import park from "@/assets/site/park-coffee.jpg.asset.json";
import reading from "@/assets/site/cafe-reading.jpg.asset.json";
import bookstore from "@/assets/site/bookstore.jpg.asset.json";
import surfing from "@/assets/site/surfing.jpg.asset.json";
import window from "@/assets/site/phone-window.jpg.asset.json";
import brick from "@/assets/site/cafe-brick.jpg.asset.json";
import wall from "@/assets/site/phone-wall.jpg.asset.json";
import beach from "@/assets/site/beach-hug.jpg.asset.json";
import boardGame from "@/assets/site/cafe-board-game.jpg.asset.json";
import cycling from "@/assets/site/cycling.jpg.asset.json";
import vinyl from "@/assets/site/vinyl-store-curly.jpg.asset.json";
import sweater from "@/assets/site/cafe-sweater.jpg.asset.json";
import bench from "@/assets/site/pickleball-bench.jpg.asset.json";
import gameNight from "@/assets/site/game-night-home.jpg.asset.json";
import wordmarkDark from "@/assets/site/Elyxer_wordmark_gold_for_dark_bg.svg.asset.json";
import wordmarkLight from "@/assets/site/Elyxer_wordmark_gold_for_light_bg.svg.asset.json";
import videoHer from "@/assets/site/video-date-her.mp4.asset.json";
import videoHim from "@/assets/site/video-date-him.mp4.asset.json";
import women from "@/assets/couple-women.jpg";
import men from "@/assets/couple-lgbtq-men.jpg";
import cartoon from "@/assets/under-age-cartoon.png";

export type VideoSlot = { src?: string; poster: string };

// Uploaded site assets. Keep image posters available if a video is unavailable.
export const media = {
  home: {
    hero: hills.url, // mountain-sunrise-wide.jpg
    band: camden.url, // street-food-night.jpg
    card1: painter.url, // painter.jpg
    card2: laughing.url, // phone-laughing.jpg
    card3: { src: videoHer.url, poster: women } as VideoSlot, // video-date-her.mp4
    cta: kitchen.url, // kitchen-spoon.jpg
  },
  how: {
    s1: pottery.url, // pottery-wheel.jpg
    s2: [park.url, reading.url, bookstore.url, surfing.url], // park-coffee.jpg, cafe-reading.jpg, bookstore.jpg, surfing.jpg
    s3: [window.url, brick.url], // phone-window.jpg, cafe-brick.jpg
    s4: [{ src: videoHer.url, poster: women }, { src: videoHim.url, poster: men }] as VideoSlot[], // video-date-her.mp4, video-date-him.mp4
    s5: wall.url, // phone-wall.jpg
  },
  what: {
    vision: beach.url, // beach-hug.jpg
    mission: boardGame.url, // cafe-board-game.jpg
    story: cycling.url, // cycling.jpg
  },
  blog: {
    featured: vinyl.url, // vinyl-store-curly.jpg
    a1: sweater.url, // cafe-sweater.jpg
    a2: park.url, // park-coffee.jpg
    a3: bench.url, // pickleball-bench.jpg
    a4: gameNight.url, // game-night-home.jpg
  },
  brand: {
    wordmarkDark: wordmarkDark.url, // Elyxer_wordmark_gold_for_dark_bg.svg
    wordmarkLight: wordmarkLight.url, // Elyxer_wordmark_gold_for_light_bg.svg
    usesLogoFallback: false,
  },
  earlyAccess: { underage: cartoon },
};