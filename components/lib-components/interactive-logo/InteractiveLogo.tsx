import { AspectRatio } from '@/components/ui/aspect-ratio';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

import { InteractiveLogoProps } from './interactiveLogo.types';

const InteractiveLogo = ({ href = '/', className }: InteractiveLogoProps) => {
    return (
        <div className={cn('overflow-hidden', className)}>
            <AspectRatio ratio={1 / 1} className="relative">
                <Link href={href} aria-label="Clickable Logo">
                    <Image
                        src="/logo/logo.jpg"
                        className="inset-0 size-full object-cover"
                        alt="Interactive Logo"
                        aria-label="Logo Image"
                        fill
                    />
                </Link>
            </AspectRatio>
        </div>
    );
};

export default InteractiveLogo;
