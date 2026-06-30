import { Navbar } from "../_components/Navbar";
import { StoryHero } from "../_components/story/StoryHero";
import { StoryOrigin } from "../_components/story/StoryOrigin";
import { StoryMission } from "../_components/story/StoryMission";
import { StoryTimeline } from "../_components/story/StoryTimeline";
import { StoryCta } from "../_components/story/StoryCta";
import { Footer } from "../_components/sections/Footer";

export default function StoryPage() {
  return (
    <>
      <Navbar />
      <StoryHero />
      <StoryOrigin />
      <StoryMission />
      <StoryTimeline />
      <StoryCta />
      <Footer />
    </>
  );
}
