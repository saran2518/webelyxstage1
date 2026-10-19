import heroHilltop from "@/assets/site/home-hero-hilltop.jpg.asset.json";
import bandCafeRain from "@/assets/site/home-band-cafe-rain.jpg.asset.json";
import heroPortrait from "@/assets/site/home-hero-hilltop-portrait.jpg";
import bandPortrait from "@/assets/site/home-band-cafe-rain-portrait.jpg";
import painter from "@/assets/site/painter.jpg.asset.json";
import laughing from "@/assets/site/phone-laughing.jpg.asset.json";
import ctaKitchen from "@/assets/site/home-cta-kitchen.jpg.asset.json";
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

// Uploaded site assets. Keep image posters available if a video is unavailable.
// home.hero and home.band hold couples on the right of the frame: those two
// slots are cropped at 70% horizontal in Index.tsx so faces stay in frame.
export const media = {
  home: {
    hero: heroHilltop.url, // home-hero-hilltop.jpg
    heroMobile: heroPortrait, // home-hero-hilltop-portrait.jpg (tall phone version)
    band: bandCafeRain.url, // home-band-cafe-rain.jpg
    bandMobile: bandPortrait, // home-band-cafe-rain-portrait.jpg (tall phone version)
    card1: painter.url, // painter.jpg
    card2: laughing.url, // phone-laughing.jpg
    card3: selfieHer.url, // selfie-her.png
    cta: ctaKitchen.url, // home-cta-kitchen.jpg
  },
  how: {
    s1: pottery.url, // pottery-wheel.jpg
    s2: [park.url, reading.url, bookstore.url, surfing.url], // park-coffee.jpg, cafe-reading.jpg, bookstore.jpg, surfing.jpg
    s3: [window.url, brick.url], // phone-window.jpg, cafe-brick.jpg
    s4: [selfieHer.url, selfieHim.url], // selfie-her.png, selfie-him.png
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
    a2: cubbonPark.url, // blog-cubbon-park.jpg
    a3: bench.url, // pickleball-bench.jpg
    a4: gameNight.url, // game-night-home.jpg
  },
  brand: {
    icon: appIcon, // elyxer-logo.png
    wordmarkDark: wordmarkDark.url, // Elyxer_wordmark_gold_for_dark_bg.svg
    wordmarkLight: wordmarkLight.url, // Elyxer_wordmark_gold_for_light_bg.svg
    usesLogoFallback: false,
  },
  earlyAccess: { underage: cartoon },
};
