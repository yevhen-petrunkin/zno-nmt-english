import { AspectRatio } from '@/components/ui/aspect-ratio';
import { cn } from '@/lib/utils';
import Image from 'next/image';

import { LogoProps } from './logo.types';

const Logo = ({ className }: LogoProps) => {
    return (
        <div className={cn('overflow-hidden', className)}>
            <AspectRatio ratio={1 / 1} className="relative">
                <Image
                    src="/logo/logo.jpg"
                    className="inset-0 size-full object-cover"
                    alt="Interactive Logo"
                    aria-label="Logo Image"
                    fill
                />
            </AspectRatio>
        </div>
    );
};

export default Logo;
