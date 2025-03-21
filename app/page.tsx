// NOTE Components
import Image from '@/components/Image';
import Navbar from '@/components/Navbar';
import Main from '@/components/Main';
import AboutMe from '../components/AboutMe';
import Projects from '@/components/Projects';
// NOTE Data
import data from '../public/data/info.json'

export default function Home() {

  const { navbar, main, aboutMe, projects } = data['en']

  return (
    <div className="relative w-full min-h-screen overflow-auto py-[5%] md:py-[2%]">
      <Image 
        src="shadow" 
        customClass="w-[70%] h-auto absolute left-[-20%] top-[-22%]" 
      />
      <Navbar 
        navbar={navbar} 
      />
      <Main 
        main={main} 
      />
      <AboutMe 
        aboutMe={aboutMe}
      />
      <Projects 
        projects={projects}
      />
    </div>
  );
}
