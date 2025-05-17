import Container from '@/lib-components/container/Container';

export default function Home() {
    return (
        <main>
            <Container>
                <div className="text-highlight bg-ordinary border-highlight rounded-lg border-2 p-4">
                    Sample Text - Примірник тексту
                </div>
            </Container>
            <div className="text-ordinary bg-highlight border-ordinary rounded-lg border-2 p-4">
                Sample Text - Примірник тексту
            </div>
        </main>
    );
}
