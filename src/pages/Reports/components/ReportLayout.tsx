import React from 'react';
import { Typography } from '@mui/material';

import { ReportsLayoutProps } from '../domain/Props';
import { StyledReportItem, StyledReportText } from '../domain/Styled';

const ReportLayout: React.FC<ReportsLayoutProps> = ({ report }) => {
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
                    <StyledReportItem $warn={ !report.dayFilled }>
                        <StyledReportText variant="caption">{ item.comment }</StyledReportText>
                        <Typography variant="body1">{ item.time } ч.</Typography>
                    </StyledReportItem>
                )) }
            </React.Fragment>
        );
    }

    return (
        <StyledReportItem $warn={ true }>
            <StyledReportText
                variant="caption"
            >Заполните отчет
            </StyledReportText>
        </StyledReportItem>
    );
};

export default ReportLayout;
