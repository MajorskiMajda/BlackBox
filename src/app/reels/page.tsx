'use client';

import Main from '../home/components/Main'
import Nav from '../home/components/NavBar'
import Footer from '../home/components/Footer'
import Info from '../home/components/info'
import Contact from '../home/components/ContactView'
import contentData from '../data/reels.json';


export default function MainPage() {

    const { cardContents, keyContent, whatWeDoList, howWeDo, whatWeDo } = contentData;
    return (
        <div className="">
            <Nav />
            <Main
                priority={true}
                image="/videoe.svg"
                gap="gap-0"
                imgsize={550}
                tex="text-left"
                className2=""
                hideImageOnMobile={false}
                textSizeClass="lg:text-6xl text-5xl"
                opis=""
                subH="Uz moćne Reels reklame koje kombinuju kreativnost, strategiju i vrhunski video sadržaj, vaša publika neće moći da skrene pogled! Povećajte angažman, izgradite prepoznatljivost i pretvorite preglede u prodaju, dominirajte društvenim mrežama!"
                text="Profesionalna izrada Reels (UGC) video reklama koje prodaju!"
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