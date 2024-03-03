import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Header from "./Components/Header";
import "./App.css";
import Shape from "./Components/Shape";

function App() {
  const scrollRef = useRef(null);
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    // return scroll.destroy();
  }, []);
  return (
    <>
      <div ref={scrollRef}>
        <div className="relative min-h-screen w-full bg-[#EFEAE3] overflow-hidden">
          <Header />
          <div className="flex justify-center h-[75vh] w-full">
            <div className="border-b-2 pb-[4vmax] border-[#a7a3a3b5] font-nunitoSans w-[95%] flex items-end justify-between">
              <div className="w-[27vmax] text-[1.7vmax]">
                <h1 className="leading-[1.8vmax] font-extrabold">
                  Sundown is a multi-disciplinary studio focused on creating
                  unique, end-to-end experiences and environments.
                </h1>
              </div>
              <div>
                <h1 className="text-[10vmax] text-right font-extrabold leading-[8vmax]">
                  SPACES <br /> THAT <br />
                  INSPIRE
                </h1>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center py-[3vmax]">
            <video
              autoPlay
              loop
              muted
              src="https://player.vimeo.com/progressive_redirect/playback/915350257/rendition/1080p/file.mp4?loc=external&signature=768f26c5396775e76c340cb808a897a724e78acb8231106dd94af9d732695176"
              className="rounded-[1.5vmax] w-[95%] relative z-[2]"
            ></video>
          </div>
          <Shape />
        </div>

        <div className="min-h-screen w-full bg-[#EFEAE3] font-nunitoSans font-extrabold py-[5vmax]">
          <div className="text-[8vmax] whitespace-nowrap overflow-x-auto no-scrollbar">
            <div className="whitespace-nowrap inline-block animate-movingscroller">
              <h1 className="inline-block">EXPERIENCES</h1>
              <div className="h-[4vmax] w-[4vmax] bg-[#fe330a] rounded-full inline-block my-[1vmax] mx-[2vmax]"></div>
              <h1 className="inline-block">CONTENT</h1>
              <div className="h-[4vmax] w-[4vmax] bg-[#fe330a] rounded-full inline-block my-[1vmax] mx-[2vmax]"></div>
              <h1 className="inline-block">ENVIRONTMENT</h1>
              <div className="h-[4vmax] w-[4vmax] bg-[#fe330a] rounded-full inline-block my-[1vmax] mx-[2vmax]"></div>
            </div>
            <div className="whitespace-nowrap inline-block animate-movingscroller">
              <h1 className="inline-block">EXPERIENCES</h1>
              <div className="h-[4vmax] w-[4vmax] bg-[#fe330a] rounded-full inline-block my-[1vmax] mx-[2vmax]"></div>
              <h1 className="inline-block">CONTENT</h1>
              <div className="h-[4vmax] w-[4vmax] bg-[#fe330a] rounded-full inline-block my-[1vmax] mx-[2vmax]"></div>
              <h1 className="inline-block">ENVIRONTMENT</h1>
              <div className="h-[4vmax] w-[4vmax] bg-[#fe330a] rounded-full inline-block my-[1vmax] mx-[2vmax]"></div>
            </div>
            <div className="whitespace-nowrap inline-block animate-movingscroller">
              <h1 className="inline-block">EXPERIENCES</h1>
              <div className="h-[4vmax] w-[4vmax] bg-[#fe330a] rounded-full inline-block my-[1vmax] mx-[2vmax]"></div>
              <h1 className="inline-block">CONTENT</h1>
              <div className="h-[4vmax] w-[4vmax] bg-[#fe330a] rounded-full inline-block my-[1vmax] mx-[2vmax]"></div>
              <h1 className="inline-block">ENVIRONTMENT</h1>
              <div className="h-[4vmax] w-[4vmax] bg-[#fe330a] rounded-full inline-block my-[1vmax] mx-[2vmax]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
