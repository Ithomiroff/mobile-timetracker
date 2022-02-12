import React from 'react';
import { Typography } from '@mui/material';
import { SxProps } from '@mui/system';
import { DateTime } from 'luxon';

import { timeFormat } from '../../../utils/TimeFormat';
import { DayReportProps } from '../domain/Props';
import {
    StyledDayNum,
    StyledReport,
    StyledReportDay,
    StyledReportsItem,
} from '../domain/Styled';

import ReportLayout from './ReportLayout';

const captionStyle: SxProps = {
    fontSize: '0.55rem',
    textAlign: 'right',
};

const DayReport: React.FC<DayReportProps> = ({ report, onSelect }) => {
    const date = DateTime.fromISO(report.wDate);

    const isToday = date.hasSame(DateTime.local(), 'day');

    const formatTime = React.useCallback(timeFormat, []);

    return (
        <StyledReport>
            <StyledReportDay>
                <Typography variant="caption">{ date.toFormat('EEE') }</Typography>
                <StyledDayNum isToday={ isToday }>
                    <Typography
                        variant="subtitle1"
                    >{ date.toFormat('d') }
                    </Typography>
                </StyledDayNum>
            </StyledReportDay>
            <StyledReportsItem>
                <ReportLayout
                    report={ report }
                    onSelect={ onSelect }
                />
                { !report.isDAyOff && 8 - report.hoursFilledCount > 0 && (
                    <Typography
                        variant="caption"
                        sx={ captionStyle }
                    >Заполните еще { formatTime(8 - report.hoursFilledCount) }
                    </Typography>
                ) }
            </StyledReportsItem>
        </StyledReport>
    );
};

export default React.memo(DayReport);
