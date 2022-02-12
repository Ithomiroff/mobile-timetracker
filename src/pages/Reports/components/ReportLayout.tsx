import React from 'react';
import { Typography } from '@mui/material';

import { ReportDto } from '../../../types/ReportDto';
import { timeFormat } from '../../../utils/TimeFormat';
import { ReportsLayoutProps } from '../domain/Props';
import { StyledReportItem, StyledReportText } from '../domain/Styled';

const ReportLayout: React.FC<ReportsLayoutProps> = ({
    report,
    onSelect,
}) => {
    const select = (item?: ReportDto) => () => onSelect(item);

    const formatTime = React.useCallback(timeFormat, []);

    if (report.isDAyOff) {
        return (
            <StyledReportItem $dayOff={ true }>
                <StyledReportText variant="caption" sx={ { color: 'primary.main' } }>Выходной</StyledReportText>
            </StyledReportItem>
        );
    }

    if (report.dayFuture) {
        return null;
    }

    if (report.reports.length) {
        return (
            <React.Fragment>
                { report.reports.map((item) => (
                    <StyledReportItem
                        key={ item.workRecordId }
                        tabIndex={ -1 }
                        $warn={ report.hoursFilledCount < 8 }
                        onClick={ select(item) }
                    >
                        <StyledReportText variant="caption">{ item.comment }</StyledReportText>
                        <Typography variant="body1">{ formatTime(item.time) }</Typography>
                    </StyledReportItem>
                )) }
            </React.Fragment>
        );
    }

    return (
        <StyledReportItem
            tabIndex={ -1 }
            $warn={ true }
            onClick={ select() }
        >
            <StyledReportText variant="caption">
                Заполните отчет
            </StyledReportText>
        </StyledReportItem>
    );
};

export default ReportLayout;
