
import ResponsiveLayout from "@/Components/bento-grid/ResponsiveLayout";
import Header from '../Components/Header/Header'
// import Banner from '../Components/Body/banner'
import Ourmission from '../Components/Body/ourmission'
import Realprofile from '../Components/Body/Realprofile'
import Speeddating from '@/Components/Body/speeddating'
import Appdownload from '../Components/Body/appdownload'
import Connection from '../Components/Body/connection'
import Footer from '../Components/Footer/Footer'
import { HeroImageSection } from "@/Components/hero-image-section";
import { SuccesStories } from "@/Components/success-stories";
import { FAQ } from "@/Components/faq";


export default function Home() {
  
  return (
    <div className="min-h-screen min-w-screen flex justify-start items-center flex-col">
      <Header/>

      <HeroImageSection />

      <Ourmission/>

      <Realprofile/>

      <Speeddating/>

      <ResponsiveLayout />

      <SuccesStories />

      <FAQ />
    
      <Appdownload/>

      <Connection/>

      <Footer/>
      
    </div>
 
  );
}
