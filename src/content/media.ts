import heroWindowHug from "@/assets/site/home-hero-window-hug.webp.asset.json";
import heroMobileWaistupLaugh from "@/assets/site/home-hero-mobile-waistup-laugh-walk-rain.jpg.asset.json";
import bandCyclingMist from "@/assets/site/home-band-cycling-mist.webp.asset.json";
import card1Gallery from "@/assets/site/card1-seen-for-who-you-are-gallery.jpg.asset.json";
import card2Umbrella from "@/assets/site/card2-someone-actually-asks-umbrella.jpg.asset.json";
import card3Phone from "@/assets/site/card3-meet-before-you-meet-phone.jpg.asset.json";
import ctaParkBench from "@/assets/site/home-cta-park-bench.webp.asset.json";
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
import kitchenCooking from "@/assets/site/blog-featured-couple-cooking.webp.asset.json";
import sweater from "@/assets/site/cafe-sweater.jpg.asset.json";
import bench from "@/assets/site/pickleball-bench.jpg.asset.json";
import gameNight from "@/assets/site/game-night-home.jpg.asset.json";
import wordmarkDark from "@/assets/site/Elyxer_wordmark_gold_for_dark_bg.svg.asset.json";
import wordmarkLight from "@/assets/site/Elyxer_wordmark_gold_for_light_bg.svg.asset.json";
import selfieHer from "@/assets/site/selfie-her.png.asset.json";
import selfieHim from "@/assets/site/selfie-him.png.asset.json";
import appIcon from "@/assets/elyxer-logo.png";
import { siFacebook, siInstagram } from "simple-icons";

export const instagramGlyph = siInstagram.path;
export const facebookGlyph = siFacebook.path;

export type VideoSlot = { src?: string; poster: string };
// focus is the object-position that keeps faces in the crop (usually upper third).
export type PhotoSlot = { src: string; focus?: string };

// Uploaded site assets. Keep image posters available if a video is unavailable.
// The three wide home photos are the original uploads, used exactly as
// supplied (no resize, recompression or conversion) on desktop and mobile.
export const media = {
  home: {
    hero: heroWindowHug.url, // home-hero-window-hug.webp (couple hugging by the rain-streaked window)
    heroMobile: heroMobileWaistupLaugh.url, // Exact uploaded portrait photo (couple laughing close under one umbrella on a rainy night street, warm cafe bokeh behind, both faces in the middle third, dark top edge), unmodified; hero remains the fallback.
    band: bandCyclingMist.url, // home-band-cycling-mist.webp (couple cycling on the misty road)
    card1: { src: card1Gallery.url, focus: "55% 40%" }, // card1-seen-for-who-you-are-gallery.jpg
    card2: { src: card2Umbrella.url, focus: "50% 35%" }, // card2-someone-actually-asks-umbrella.jpg
    card3: { src: card3Phone.url, focus: "45% 40%" }, // card3-meet-before-you-meet-phone.jpg
    cta: { src: ctaParkBench.url, focus: "70% 45%" }, // home-cta-park-bench.webp (couple talking on a park bench)
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
    featured: { src: kitchenCooking.url, focus: "48% 35%" }, // blog-featured-couple-cooking.webp (couple cooking in the kitchen)
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
};

// Social profiles. Single source of truth for every brand link on the site.
export const social = {
  instagram: "https://www.instagram.com/elyxer.dating/",
  facebook: "https://www.facebook.com/profile.php?id=61594659215797",
};
