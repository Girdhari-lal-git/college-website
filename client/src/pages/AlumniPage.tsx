import AlumniHero from "../components/alumni/AlumniHero";
import AlumniStats from "../components/alumni/AlumniStats";
import AlumniTimeline from "../components/alumni/AlumniTimeline";
import AlumniGallery from "../components/alumni/AlumniGallery";
import AlumniCTA from "../components/alumni/AlumniCTA";

const AlumniPage = () => {
  return (
    <div className="bg-white overflow-hidden">

      <AlumniHero />

      <AlumniStats />

      <AlumniTimeline />

      <AlumniGallery />

      <AlumniCTA />

    </div>
  );
};

export default AlumniPage;