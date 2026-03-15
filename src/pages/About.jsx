// pages/About.jsx
import AboutHero from '../components/about/AboutHero';
import AboutPhilosophy from '../components/about/AboutPhilosophy';
import AboutCrafting from '../components/about/AboutCrafting';
import AboutCTA from '../components/about/AboutCTA';

// Import images
import cloudBg from '../assets/cloud_bg.jpg';
import sunsetWallpaper from '../assets/sunset_wallpaper.jpg';

export default function About() {
  return (
    <div className="min-h-screen bg-[#020617]">
      <AboutHero bgImage={sunsetWallpaper} />
      <AboutPhilosophy phoneImage={cloudBg} />
      <AboutCrafting />
      <AboutCTA />
    </div>
  );
}