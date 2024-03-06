import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Header from "./Components/Header";
import "./App.css";
import Shape from "./Components/Shape";
import Marquee from "./Components/Marquee";
import ShapeBody from "./Components/ShapeBody";

function App() {
  const scrollRef = useRef(null);
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    const featuredProjectsCont = document.querySelector(".featuredProjects");
    const img = document.querySelector(".fixedImg");
    featuredProjectsCont.addEventListener("mouseenter", () => {
      img.style.display = "block";
    });

    featuredProjectsCont.addEventListener("mouseleave", () => {
      img.style.display = "none";
    });

    const option1 = document.querySelector("#opt1");
    const option2 = document.querySelector("#opt2");
    const option3 = document.querySelector("#opt3");
    const option4 = document.querySelector("#opt4");
    const option5 = document.querySelector("#opt5");
    const option6 = document.querySelector("#opt6");

    option1.addEventListener("mouseenter", () => {
      const image = option1.getAttribute("data-image");
      img.style.backgroundImage = `url('${image}')`;
    });
    option2.addEventListener("mouseenter", () => {
      const image = option2.getAttribute("data-image");
      img.style.backgroundImage = `url('${image}')`;
    });
    option3.addEventListener("mouseenter", () => {
      const image = option3.getAttribute("data-image");
      img.style.backgroundImage = `url('${image}')`;
    });
    option4.addEventListener("mouseenter", () => {
      const image = option4.getAttribute("data-image");
      img.style.backgroundImage = `url('${image}')`;
    });
    option5.addEventListener("mouseenter", () => {
      const image = option5.getAttribute("data-image");
      img.style.backgroundImage = `url('${image}')`;
    });
    option6.addEventListener("mouseenter", () => {
      const image = option6.getAttribute("data-image");
      img.style.backgroundImage = `url('${image}')`;
    });
  }, []);
  return (
    <>
      <div className="fixedImg hidden h-[62vh] w-[24vmax] rounded-xl left-[50%] top-[18%] fixed z-10"></div>
      <div ref={scrollRef}>
        {/* Section 1 */}
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
            <img
              src="https://images.unsplash.com/photo-1682687219800-bba120d709c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="rounded-[1.5vmax] h-screen w-[95%] relative z-[2]"
            ></img>
          </div>
          <Shape />
        </div>
        {/* Section 2 */}
        <div className="min-h-screen w-full bg-[#EFEAE3] font-nunitoSans font-extrabold py-[5vmax] relative">
          <Marquee />
          <div className="w-full h-[80vh] flex items-center py-[2vmax] px-[7vmax] justify-between">
            <h1 className="text-[4vmax] px-3vmax w-[60%] leading-[3.5vmax] relative z-10">
              We are a group of design-driven, goal-focused creators, producers,
              and designers who believe that the details make all the
              difference.
            </h1>
            <div className="w-[20%] mt-[28vmax]">
              <img
                src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15d1_Holding_thumb-p-500.jpg"
                alt="not available"
                className="rounded-2xl"
              />
              <p className="font-light py-[3vmax]">
                We love to create, we love to solve, we love to collaborate, and
                we love to turn amazing ideas into reality. We're here to
                partner with you through every step of the process and know that
                relationships are the most important things we build.
              </p>
            </div>
          </div>
          <ShapeBody />
        </div>
        {/* Section 3 */}
        <div className="min-h-[100vh] bg-[#EFEAE3] w-full py-[3vmax]">
          <div className="font-semibold text-[1.1vmax] flex justify-start items-center gap-2 px-[2.8vmax] py-[3.5vmax]">
            <div className="h-[0.5vmax] w-[0.5vmax] bg-[#fe330a] rounded-full inline-block"></div>
            <h1>FEATURED PROJECTS</h1>
          </div>
          <div className="featuredProjects">
            <div
              data-image="https://images.unsplash.com/photo-1704799191531-085f46e6221c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              id="opt1"
              className="group h-[7.5vmax] relative flex items-center cursor-pointer border-b-[1px] border-[#a7a3a3b5] overflow-auto"
            >
              <div className="h-full w-full bg-[#FF9831] absolute top-[-100%] group-hover:top-0 transition-all duration-[0.3s]"></div>
              <h1 className="text-[3.2vmax] px-[2.5vmax] font-bold relative z-10">
                50th Anniversary
              </h1>
            </div>
            <div
              data-image="https://source.unsplash.com/qTkASxtpxmc/600x400"
              id="opt2"
              className="group h-[7.5vmax] relative flex items-center cursor-pointer border-b-[1px] border-[#a7a3a3b5] overflow-auto"
            >
              <div className="h-full w-full bg-[#FF9831] absolute top-[-100%] group-hover:top-0 transition-all duration-[0.3s]"></div>
              <h1 className="text-[3.2vmax] px-[2.5vmax] font-bold relative z-10">
                Play New Kidvision
              </h1>
            </div>
            <div
              data-image="https://images.unsplash.com/photo-1682687221323-6ce2dbc803ab?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/600x600"
              id="opt3"
              className="group h-[7.5vmax] relative flex items-center cursor-pointer border-b-[1px] border-[#a7a3a3b5] overflow-auto"
            >
              <div className="h-full w-full bg-[#FF9831] absolute top-[-100%] group-hover:top-0 transition-all duration-[0.3s]"></div>
              <h1 className="text-[3.2vmax] px-[2.5vmax] font-bold relative z-10">
                Air Force 12021
              </h1>
            </div>
            <div
              data-image="https://images.unsplash.com/photo-1709566805289-881acfe97bbc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              id="opt4"
              className="group h-[7.5vmax] relative flex items-center cursor-pointer border-b-[1px] border-[#a7a3a3b5] overflow-auto"
            >
              <div className="h-full w-full bg-[#FF9831] absolute top-[-100%] group-hover:top-0 transition-all duration-[0.3s]"></div>
              <h1 className="text-[3.2vmax] px-[2.5vmax] font-bold relative z-10">
                SOHO NYC
              </h1>
            </div>
            <div
              data-image="https://images.unsplash.com/photo-1708848504369-55f60bc664e2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              id="opt5"
              className="group h-[7.5vmax] relative flex items-center cursor-pointer border-b-[1px] border-[#a7a3a3b5] overflow-auto"
            >
              <div className="h-full w-full bg-[#FF9831] absolute top-[-100%] group-hover:top-0 transition-all duration-[0.3s]"></div>
              <h1 className="text-[3.2vmax] px-[2.5vmax] font-bold relative z-10">
                NYFW Popup
              </h1>
            </div>
            <div
              data-image="https://images.unsplash.com/photo-1704559920243-ef2b536da968?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              id="opt6"
              className="group h-[7.5vmax] relative flex items-center cursor-pointer border-b-[1px] border-[#a7a3a3b5] overflow-auto"
            >
              <div className="h-full w-full bg-[#FF9831] absolute top-[-100%] group-hover:top-0 transition-all duration-[0.3s]"></div>
              <h1 className="text-[3.2vmax] px-[2.5vmax] font-bold relative z-10">
                SOHO 2023
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
