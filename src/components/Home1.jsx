import React from "react";
import web from "../Pictures/img2.png";
import PrimaryButton from "./PrimaryButton";
import '../App.css'


function Home1({id="home", name = "Grow your business with", imgsrc = web }) {
    return (
        <>
            <section id={id??""} className="flex  justify-center items-center">
                <div className="flex flex-col sm:flex-row sm:px-10 px-3">
                    <div className="text-2xl sm:text-xl p-5 lg:pt-0  flex justify-center flex-col">
                        <h1>
                            {name}
                            <strong className="brand-name"> Karimji.tech </strong>
                        </h1>

                        <h2 className="my-3">
                            We're a small and young but focussed and professional team of talented developers that helps your
                            business to skyrocket!
                        </h2>

                        <div className="mt-3">
                            <PrimaryButton text={"Get started!"}/>
                        </div>
                    </div>

                    <div className="flex justify-center items-center header-img">
                        <img
                            src={imgsrc}
                            className="animated"
                            alt="HomeImg"
                            style={{    animation:" up-down 2s ease-in-out infinite alternate-reverse both"}}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home1;
