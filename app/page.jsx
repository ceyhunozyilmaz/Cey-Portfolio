import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* TEXT */}
          <div className="text-center xl:text-left order-2  xl:order-none">
            <span className="text-xl">Frontend Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm
              <br /> <span className="text-accent">Ceyhun Özyılmaz</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Hello! I am Ceyhun Özyılmaz, a professional Frontend Developer.
              crafting applications with web technologies. My passion for
              learning and growth enables me to enhance my skills with each new
              project.
            </p>
            {/* BTN & SOCİALS */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/CeyhunOzyilmaz.pdf" download>
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Socials />
              </div>
            </div>
          </div>
          {/* PHOTO */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
