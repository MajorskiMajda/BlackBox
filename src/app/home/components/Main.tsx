"use client";

import { ReactNode } from 'react';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export default function MainPage(props: {
    image: string | StaticImport;
    text: string;
    tex: string;
    subH: ReactNode | string;
    opis?: string;
    gap?: string;
    imgsize?: number;
    subHColor?: string;
    className?: string;
    className2?: string;
    hideImageOnMobile?: boolean;
    textSizeClass?: string;
    subHSizeClass?: string;
    priority?: boolean;
}) {
    const words = props.text.split(" ");
    const purpleWords = ["Povećajte", "profit!", "?"];

    return (
        <div
            className={`flex z-2 ${props.className2 || ''} ${props.gap || ''} flex-col md:flex-row items-center justify-evenly pl-8 pr-8 pb-8 pt-3 lg:pl-16 lg:pr-16`}
        >
            {/* Text Section */}
            <div className="flex flex-col items-center justify-center min-h-fit w-full md:w-6/12">
                <div className={`w-full md:w-4/4 ${props.tex || 'text-center'} lg:text-left lg:w-4/4`}>
                    {/* Title Section */}
                    <div
                        className={`font-semibold leading-[1.3] lg:mb-4 lg:p-0 pt-4 pb-4 ${
                            props.textSizeClass || ' sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl'
                        }`}
                    >
                        {words.map((word, index) => {
                            if (purpleWords.includes(word)) {
                                return (
                                    <span key={index} className="text-[#da26ff]">
                                        {word}{' '}
                                    </span>
                                );
                            }
                            return (
                                <span key={index} className="text-white">
                                    {word}{' '}
                                </span>
                            );
                        })}
                    </div>
                    {/* Description */}
                    <div
                        className={`font-normal mb-4 text-lg sm:text-3xl md:text-3xl lg:text-3xl `}
                    >
                        {props.opis}
                    </div>
                    {/* Subtitle */}
                    <div
                        className={`font-light text-neutral-300 mb-4 ${
                            props.subHSizeClass || 'text-base sm:text-3xl md:text-3xl lg:text-2xl'
                        } lg:text-left`}
                    >
                        {props.subH}
                    </div>
                </div>
            </div>

            {/* Image Section */}
            <div
                className={`lg:ml-8 lg:w-/4 md:w-6/12 sm:w-full flex justify-center  md:mt-0 
                    ${props.className || ''} 
                    ${props.hideImageOnMobile ? 'hidden sm:block' : ''}`}
            >
                <Image
                    className="rounded-md"
                    src={props.image}
                    width={props.imgsize ? Number(props.imgsize) : 700}
                    height={300}
                    objectFit="contain"
                    alt="Image"
                    priority={props.priority}
                />
            </div>
        </div>
    );
}