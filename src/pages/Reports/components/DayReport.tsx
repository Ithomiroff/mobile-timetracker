import React from 'react';
import { Typography } from '@mui/material';
import { DateTime } from 'luxon';

import { ReportDto } from '../../../types/ReportDto';
import { StyledReport, StyledReportDay, StyledReportsItem } from '../domain/Styled';

import ReportItem from './ReportItem';

const DayReport: React.FC<{item: ReportDto}> = ({ item }) => {
    const date = DateTime.fromISO(item.date).setLocale('ru');

    return (
        <StyledReport>
            <StyledReportDay>
                <Typography variant="caption">{ date.toFormat('EEE') }</Typography>
                <Typography variant="subtitle1" fontWeight={ 600 }>{ date.toFormat('d') }</Typography>
            </StyledReportDay>
            <StyledReportsItem>
                <ReportItem
                    text={ item.comment }
                    time={ item.time }
                />
            </StyledReportsItem>
        </StyledReport>
    );
};

export default React.memo(DayReport);
