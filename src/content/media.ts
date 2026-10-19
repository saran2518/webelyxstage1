import hills from "@/assets/couple-beach-sunset2.png";
import cafe from "@/assets/couple-cafe.jpg";
import camden from "@/assets/couple-camden.jpg";
import kitchen from "@/assets/couple-cooking.png";
import portrait from "@/assets/couple-diverse-bw.png";
import garden from "@/assets/couple-garden.jpg";
import gallery from "@/assets/couple-hero.jpg";
import men from "@/assets/couple-lgbtq-men.jpg";
import park from "@/assets/couple-park.jpg";
import women from "@/assets/couple-women.jpg";
import logo from "@/assets/elyxer-logo.png";
import cartoon from "@/assets/under-age-cartoon.png";

export type VideoSlot = { src?: string; poster: string };

// Replace each fallback below when its named asset is uploaded.
export const media = {
  home: {
    hero: hills, // mountain-sunrise-wide.jpg
    band: camden, // street-food-night.jpg
    card1: gallery, // painter.jpg
    card2: cafe, // phone-laughing.jpg
    card3: { poster: women } as VideoSlot, // video-date-her.mp4
    cta: kitchen, // kitchen-spoon.jpg
  },
  how: {
    s1: gallery, // pottery-wheel.jpg
    s2: [park, cafe, gallery, garden], // park-coffee.jpg, cafe-reading.jpg, bookstore.jpg, pickleball-solo.jpg
    s3: [portrait, camden], // phone-window.jpg, cafe-brick.jpg
    s4: [{ poster: women }, { poster: men }] as VideoSlot[], // video-date-her.mp4, video-date-him.mp4
    s5: portrait, // phone-wall.jpg
  },
  what: {
    vision: hills, // beach-hug.jpg
    mission: cafe, // cafe-board-game.jpg
    story: garden, // cycling.jpg
  },
  blog: {
    featured: gallery, // vinyl-store-curly.jpg
    a1: cafe, // cafe-sweater.jpg
    a2: park, // park-coffee.jpg
    a3: garden, // pickleball-bench.jpg
    a4: kitchen, // game-night-home.jpg
  },
  brand: {
    wordmarkDark: logo, // Elyxer_wordmark_gold_for_dark_bg.svg
    wordmarkLight: logo, // Elyxer_wordmark_gold_for_light_bg.svg
    usesLogoFallback: true,
  },
  earlyAccess: { underage: cartoon },
};