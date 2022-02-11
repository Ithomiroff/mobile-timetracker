import React from 'react';
import { Typography } from '@mui/material';

import { StyledReportItem, StyledReportText } from '../domain/Styled';

const ReportItem: React.FC<{text: string; time: number}> = ({
    time, text,
}) => {
    return (
        <StyledReportItem>
            <StyledReportText variant="caption">{ text }</StyledReportText>
            <Typography variant="body1">{ time } ч</Typography>
        </StyledReportItem>
    );
};

export default React.memo(ReportItem);
