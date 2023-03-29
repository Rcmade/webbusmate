import Image from "next/image";
import { Download, Features, SectionWrapper } from "../../src/components";
import Link from "next/link";

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Track your bus from your home without calling any person"
        description="Share the app to your friends who board before you to track your bus"
        showBtn
        mockupImg={"/assets/home_hero.png"}
        banner="banner"
        priority={true}
        className={""}
      />
      {/* <SectionWrapper
        title="Smart User Interface Marketplace"
        description="Experience a buttery UI of ProNef NFT Marketplace. Smooth constant colors of a fluent UI design."
        mockupImg={"/assets/home_cards.png"}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Deployment"
        description="ProNef is built using Expo which runs natively on all users' devices. You can easily get your app into people's hands"
        mockupImg={"/assets/feature.png"}
        reverse
      />
      <SectionWrapper
        title="Creative way to showcase the store"
        description="The app contains two screens. The first screen lists all NFTs while the second one shows the details of a specific NFT."
        mockupImg={"/assets/mockup.png"}
        banner="banner02"
      />
      <Download /> */}
      <div className="px-4 py-2 justify-around items-center bg-primary flex w-full banner04">
        <p
          className={` my-5 md:my-10 flex gap-x-5 items-center font-IBMPlex font-light text-white text-xl md:text-3xl lg:text-4xl md:leading-16 `}
        >
          Made with
          <span className="bold">
            <Image
              src="/assets/RcmadeLogo.jpg"
              alt="Team Rcmade"
              className={` rounded-full object-contain`}
              width={50}
              height={50}
            />
          </span>
        </p>
        <div className="text-gray-900 flex gap-x-4 ">
          <Link href="/content/privacy">Privacy Policy</Link>
          <Link href="/content/contact">Contact</Link>
        </div>
      </div>
    </>
  );
};

export default App;
