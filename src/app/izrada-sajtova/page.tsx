'use client';

import Main from '../home/components/Main'
import Nav from '../home/components/NavBar'
import Footer from '../home/components/Footer'
import Info from '../home/components/info'
import Contact from '../home/components/ContactView'
import contentData from '../data/web.json';


export default function MainPage() {

    const { cardContents, keyContent, whatWeDoList, howWeDo, whatWeDo } = contentData;

    return (
        <div className="">
            <Nav />
            <Main
                priority={true}
                image="/webdev.svg"
                gap="gap-0"
                imgsize={550}
                tex="text-left"
                className2=""
                hideImageOnMobile={false}
                textSizeClass="lg:text-6xl text-5xl"
                opis=""
                subH="Uz vrhunski dizajn, pametnu strategiju i besprekorne performanse, Vaš web sajt će privući mase, pretvoriti ih u klijente i eksplozivno podići Vaše poslovanje, jer savršen sajt je Vaš ključ za online uspeh!"
                text="Pokrenite Savršen Web Sajt"
                className="lg:order-first md:order-first"
            />
            <Info
                cardContents={cardContents}
                howWeDoTitle={howWeDo.title}
                howWeDoDescription={howWeDo.description}
                whatWeDoTitle={whatWeDo.title}
                whatWeDoDescription={whatWeDo.description}
                keyContent={keyContent}
                whatWeDoList={whatWeDoList}
            />
            <Contact variant="services" />
            <Footer />
        </div>
    );
}
