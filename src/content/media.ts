import bandWindowHug from "@/assets/site/home-band-window-hug.webp.asset.json";
import bandCafeRain from "@/assets/site/home-band-cafe-rain.jpg.asset.json";
import bandPortrait from "@/assets/site/home-band-cafe-rain-portrait.jpg";
import painter from "@/assets/site/painter.jpg.asset.json";
import laughing from "@/assets/site/phone-laughing.jpg.asset.json";
import ctaRooftop from "@/assets/site/home-cta-rooftop.png.asset.json";
import pottery from "@/assets/site/pottery-wheel.jpg.asset.json";
import park from "@/assets/site/park-coffee.jpg.asset.json";
import cubbonPark from "@/assets/site/blog-cubbon-park.jpg.asset.json";
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
import selfieHer from "@/assets/site/selfie-her.png.asset.json";
import selfieHim from "@/assets/site/selfie-him.png.asset.json";
import cartoon from "@/assets/under-age-cartoon.png";
import appIcon from "@/assets/elyxer-logo.png";

export type VideoSlot = { src?: string; poster: string };
// focus is the object-position that keeps faces in the crop (usually upper third).
export type PhotoSlot = { src: string; focus?: string };

// Uploaded site assets. Keep image posters available if a video is unavailable.
// home.hero and home.band hold couples on the right of the frame: those two
// slots are cropped at 70% horizontal in Index.tsx so faces stay in frame.
export const media = {
  home: {
    hero: bandWindowHug.url, // home-band-window-hug.webp (desktop and mobile)
    band: bandCafeRain.url, // home-band-cafe-rain.jpg
    bandMobile: bandPortrait, // home-band-cafe-rain-portrait.jpg
    card1: { src: painter.url, focus: "70% 30%" }, // painter.jpg
    card2: { src: laughing.url, focus: "50% 30%" }, // phone-laughing.jpg
    card3: { src: selfieHer.url, focus: "50% 28%" }, // selfie-her.png
    cta: { src: ctaRooftop.url, focus: "50% 30%" }, // home-cta-rooftop.png (rooftop night photo, background figure removed)
  },
  how: {
    s1: { src: pottery.url, focus: "65% 20%" }, // pottery-wheel.jpg
    s2: [
      { src: park.url, focus: "40% 30%" }, // park-coffee.jpg
      { src: reading.url, focus: "55% 30%" }, // cafe-reading.jpg
      { src: bookstore.url, focus: "45% 30%" }, // bookstore.jpg
      { src: surfing.url, focus: "55% 35%" }, // surfing.jpg
    ],
    s3: [
      { src: window.url, focus: "60% 28%" }, // phone-window.jpg
      { src: brick.url, focus: "45% 45%" }, // cafe-brick.jpg
    ],
    s4: [
      { src: selfieHer.url, focus: "50% 28%" }, // selfie-her.png
      { src: selfieHim.url, focus: "45% 22%" }, // selfie-him.png
    ],
    s5: { src: wall.url, focus: "40% 40%" }, // phone-wall.jpg
  },
  what: {
    vision: { src: beach.url, focus: "55% 55%" }, // beach-hug.jpg
    mission: { src: boardGame.url, focus: "55% 40%" }, // cafe-board-game.jpg
    story: { src: cycling.url, focus: "60% 45%" }, // cycling.jpg
  },
  blog: {
    featured: { src: vinyl.url, focus: "45% 40%" }, // vinyl-store-curly.jpg
    a1: { src: sweater.url, focus: "45% 45%" }, // cafe-sweater.jpg
    a2: { src: cubbonPark.url, focus: "70% 50%" }, // blog-cubbon-park.jpg
    a3: { src: bench.url, focus: "55% 40%" }, // pickleball-bench.jpg
    a4: { src: gameNight.url, focus: "55% 40%" }, // game-night-home.jpg
  },
  brand: {
    icon: appIcon, // elyxer-logo.png
    wordmarkDark: wordmarkDark.url, // Elyxer_wordmark_gold_for_dark_bg.svg
    wordmarkLight: wordmarkLight.url, // Elyxer_wordmark_gold_for_light_bg.svg
    usesLogoFallback: false,
  },
  earlyAccess: { underage: cartoon },
};
