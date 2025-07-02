import Section from '@/components/lib-components/section/Section';

const SectionHero = () => {
    return (
        <Section className="desk:h-[calc(100vh-120px)] lgdesk:h-[calc(100vh-136px)] h-[calc(100vh-88px)] overflow-hidden !p-0">
            <h1 className="invisible h-0">Hero Section</h1>
            <video
                className="size-full object-cover"
                src="/hero/hero.mp4"
                poster="/hero/hero.jpg"
                autoPlay
                loop
                muted
            />
        </Section>
    );
};

export default SectionHero;
