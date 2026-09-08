import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LearningManagementSystem from "@/components/LearningManagementSystem";
import CorporateTrainings from "@/components/CorporateTrainings";
import PersonalizedTraining from "@/components/PersonalizedTraining";
import CapacityDevelopment from "@/components/CapacityDevelopment";
import ManagementDevelopmentProgram from "@/components/ManagementDevelopmentProgram";
import TransformationHub from "@/components/TransformationHub";
import TrainingConsultant from "@/components/TrainingConsultant";
import ConsultationCta from "@/components/ConsultationCta";
import Testimonials from "@/components/Testimonials";
import GetInTouch from "@/components/GetInTouch";
import Footer from "@/components/Footer";



function Home() {

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LearningManagementSystem />
        <CorporateTrainings />
        <PersonalizedTraining />
        <CapacityDevelopment />
        <ManagementDevelopmentProgram />
        <TransformationHub />
        <TrainingConsultant />
        <ConsultationCta />
        <Testimonials />
        <GetInTouch />
      </main>
      <Footer />
    </>
  );
}





export default Home








