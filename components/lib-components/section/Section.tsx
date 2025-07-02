import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

const Section = ({
    children,
    className,
    ariaLabelledBy,
}: {
    children: ReactNode;
    className?: string;
    ariaLabelledBy?: string;
}) => {
    return (
        <section
            className={cn(
                'lgmob:p-2 tab:p-3 desk:p-2 bg-background/80 mt-4 rounded-md border p-1.5 shadow-xs',
                className,
            )}
            {...(ariaLabelledBy ? { 'aria-labelledby': ariaLabelledBy } : {})}
        >
            {children}
        </section>
    );
};

export default Section;
