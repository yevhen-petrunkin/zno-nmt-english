import { ContainerProps } from './container.types';

const Container = ({ padding = false, children }: ContainerProps) => {
    return (
        <div
            className="lgmob:max-w-(--lgmob) tab:max-w-(--tab) desk:max-w-(--desk) lgdesk:max-w-(--lgdesk) lgmob:px-2 tab:px-3 desk:px-2 mx-auto min-w-(--mob) px-1.5 data-[padding=false]:p-0!"
            data-padding={padding}
        >
            {children}
        </div>
    );
};

export default Container;
