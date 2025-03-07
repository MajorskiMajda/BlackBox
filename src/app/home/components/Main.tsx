'use client';

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
    priority?: boolean;

}) {


    const words = props.text.split(" ");
    console.log(words);

    const purpleWords = ["Povećajte", "profit!"];
    


    return (
        <div className={`flex z-2 ${props.className2 || ''} ${props.gap || ''} flex-col-reverse md:flex-row items-center justify-evenly lg:pl-16 lg:pr-16 p-8`}>
            {/* Image Section */}
            <div
                className={`lg:ml-8 lg:mt-12 lg:w-2/4 md:w-10/12 sm:w-full flex justify-center md:mt-0 
                    ${props.className || ''} 
                    ${props.hideImageOnMobile ? 'hidden sm:block' : ''} // Hide on mobile if prop is true
                `}
            >
                <Image
                    className="rounded-md"
                    src={props.image}
                    width={props.imgsize ? Number(props.imgsize) : 800} // Default image size
                    height={900}
                    objectFit="contain"
                    alt="Image"
                    priority={props.priority}

                />
            </div>

            {/* Text Section */}
            <div className="flex flex-col items-center justify-center min-h-fit w-full md:w-6/12">
                <div className={`w-full md:w-2/4 ${props.tex || 'text-center'} lg:text-left lg:w-4/4`}>
                    {/* Title Section */}
                    <div className={`font-semibold  leading-[1.3] lg:mb-4 lg:p-0 pt-4 pb-4 ${props.textSizeClass || 'lg:text-8xl text-6xl md:text-5xl text-3xl text-left'}`}>
                    {words.map((word, index) => {
                            // If the word is one of the purple words, style it purple
                            if (purpleWords.includes(word)) {
                                return (
                                    <span key={index} className="text-[#da26ff]">{word} </span>
                                );
                            }
                            return (
                                <span key={index} className="text-white">{word} </span>
                            );
                        })}
                    </div>
                    <div
                        className={`font-light  text-neutral-300 mb-4 lg:text-3xl text-lg md:text-md lg:text-left text-center`}
                    >
                        {props.subH}
                    </div>
                    <div className={`font-light text-neutral-300 lg:text-xl text-md`}>
                        {props.opis}
                    </div>
                </div>
            </div>
        </div>
    );
}
