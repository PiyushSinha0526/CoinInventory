"use client";
import React, { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

const Hero: React.FC = () => {
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const heroElement = heroRef.current;
        const handleEventScroll = () => {
            if (heroElement) {
                const scrollPosition = window.scrollY;
                const scrollOffset = 100;
                if (scrollPosition > scrollOffset) {
                    heroElement.classList.add("scrolled");
                } else {
                    heroElement.classList.remove("scrolled");
                }
            }
        };
        window.addEventListener("scroll", handleEventScroll);
        return () =>
            window.removeEventListener("scroll", handleEventScroll);
    }, []);
    return (
        <div className="pb-20 px-4">
            <div className="container mx-auto text-center">
                <h1 className="text-5xl md:text-8xl lg:text=[105px] pb-6 gradient-title">
                    Smart Finance Management <br /> with CoinInventory
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                    Track, manage, and optimize your expenses with ease.
                </p>
                <div className="flex justify-center space-x-4">
                    <Link href="/dashboard">
                        <Button size={"lg"} className="px-8">
                            Get Started
                        </Button>
                    </Link>
                    <Link href="/www.google.com">
                        <Button size={"lg"} variant={"outline"} className="px-8">
                            Demo
                        </Button>
                    </Link>
                </div>
                <div className="hero-image-wrapper">
                    <div ref={heroRef} className="hero-image">
                        <Image
                            src={"/hero.webp"}
                            alt={"hero"}
                            width={1280}
                            height={720}
                            className={"rounded-lg shadow-2xl border mx-auto"}
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
