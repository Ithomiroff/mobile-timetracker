import React from 'react';
import { Typography } from '@mui/material';
import { DateTime } from 'luxon';

import { StyledReport, StyledReportDay, StyledReportsItem } from '../domain/Styled';
import { ReportItem } from '../domain/Types';

import ReportLayout from './ReportLayout';

const DayReport: React.FC<{item: ReportItem}> = ({ item }) => {
    const date = DateTime.fromISO(item.wDate);

    return (
        <StyledReport>
            <StyledReportDay>
                <Typography variant="caption">{ date.toFormat('EEE') }</Typography>
                <Typography variant="subtitle1" fontWeight={ 600 }>{ date.toFormat('d') }</Typography>
            </StyledReportDay>
            <StyledReportsItem>
                <ReportLayout
                    report={ item }
                />
            </StyledReportsItem>
        </StyledReport>
    );
};

export default React.memo(DayReport);
