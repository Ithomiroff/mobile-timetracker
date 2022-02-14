import React from 'react';

import { StyledFullWidth } from './domain/Styled';

const FullWidthWindow: React.FC<{children: React.ReactNode}> = (props) => {
    return (
        <StyledFullWidth>
            { props.children }
        </StyledFullWidth>
    );
};

export default React.memo(FullWidthWindow);
