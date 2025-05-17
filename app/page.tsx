import Container from '@/components/lib-components/container/Container';
import InteractiveLogo from '@/components/lib-components/interactive-logo/InteractiveLogo';
import Logo from '@/components/lib-components/logo/Logo';

export default function Home() {
    return (
        <main>
            <Container>
                <div className="text-highlight bg-ordinary border-highlight rounded-lg border-2 p-4">
                    <InteractiveLogo className="w-20" />
                    <Logo className="w-20" />
                    <p>Sample Text - Примірник тексту</p>
                </div>
            </Container>
        </main>
    );
}
