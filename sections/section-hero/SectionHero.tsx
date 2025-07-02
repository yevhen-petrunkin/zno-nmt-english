import Section from '@/components/lib-components/section/Section';

const SectionHero = () => {
    return (
        <Section
            className="desk:h-[calc(100vh-120px)] lgdesk:h-[calc(100vh-136px)] h-[calc(100vh-88px)] overflow-hidden !p-0"
            ariaLabelledBy="hero-title"
        >
            <div className="relative size-full overflow-hidden">
                <h1
                    className="text-primary-foreground desk:w-150 desk:text-6xl lgdesk:leading-24 lgmob:text-3xl tab:text-5xl lgmob:w-75 tab:w-112 desk:top-12 desk:right-12 lgmob:top-10 lgmob:right-10 tab:top-12 tab:right-12 lgmob:leading-14 tab:leading-18 absolute top-8 right-8 z-2 w-56 text-right text-2xl leading-10 tracking-wide text-shadow-md"
                    id="hero-title"
                    aria-label="ЗНО та НМТ з англійської мови: хлопець навчається у своїй кімнаті"
                >
                    <span className="desk:text-8xl lgmob:text-5xl tab:text-7xl text-4xl font-medium">
                        ЗНО та НМТ
                    </span>{' '}
                    з англійської мови
                </h1>

                <div className="bg-foreground/30 absolute inset-0" />

                <video
                    className="size-full object-cover"
                    src="/hero/hero.mp4"
                    poster="/hero/hero.jpg"
                    autoPlay
                    loop
                    muted
                    aria-label="На фоні хлопець навчається у своїй кімнаті, готуючись до ЗНО з англійської мови"
                />
            </div>
        </Section>
    );
};

export default SectionHero;
