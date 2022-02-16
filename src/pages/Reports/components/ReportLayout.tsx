import React from 'react';
import Hammer from 'react-hammerjs';
import { Typography } from '@mui/material';

import { ReportDto } from '../../../types/ReportDto';
import { timeFormat } from '../../../utils/TimeFormat';
import { ReportsLayoutProps } from '../domain/Props';
import { StyledReportItem, StyledReportText } from '../domain/Styled';

const pressOption = {
    recognizers: {
        press: {
            time: 600,
        },
    },
};

const ReportLayout: React.FC<ReportsLayoutProps> = ({
    report,
    onSelect,
    onEdit,
}) => {
    const select = (item?: ReportDto) => () => onSelect(item);

    const edit = (item?: ReportDto) => (event: any) => {
        event.preventDefault();
        onEdit(item);
    };

    const formatTime = React.useCallback(timeFormat, []);

    if (report.isDAyOff) {
        return (
            <StyledReportItem $dayOff={ true }>
                <StyledReportText variant="body2" sx={ { color: 'primary.main' } }>Выходной</StyledReportText>
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
                    <Hammer
                        key={ item.workRecordId }
                        onPress={ edit(item) }
                        options={ pressOption }
                    >
                        <StyledReportItem
                            tabIndex={ -1 }
                            $warn={ report.hoursFilledCount < 8 }
                            onClick={ select(item) }
                        >
                            <StyledReportText variant="body2">{ item.comment }</StyledReportText>
                            <Typography variant="body1">{ formatTime(item.time) }</Typography>
                        </StyledReportItem>
                    </Hammer>
                )) }
            </React.Fragment>
        );
    }

    return (
        <Hammer
            onPress={ edit() }
            options={ pressOption }
        >
            <StyledReportItem
                tabIndex={ -1 }
                $warn={ true }
                onClick={ select() }
            >
                <StyledReportText variant="body2">
                    Заполните отчет
                </StyledReportText>
            </StyledReportItem>
        </Hammer>
    );
};

export default ReportLayout;
