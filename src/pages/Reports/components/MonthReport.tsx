import React from 'react';
import { Typography } from '@mui/material';
import Portal from '@mui/material/Portal';
import { DateTime } from 'luxon';

import { TOOLBAR_PORTAL } from '../../../utils/ToolbarPortal';
import { MonthReportProps } from '../domain/Props';

const isEqual = (prev: MonthReportProps, next: MonthReportProps) => {
    return prev.topReport?.wDate === next.topReport?.wDate;
};

const now = DateTime.now();

const MonthReport: React.FC<MonthReportProps> = ({
    topReport,
}) => {
    const refContainerPortal = React.useRef<HTMLDivElement | null>(null);

    React.useLayoutEffect(() => {
        refContainerPortal.current = TOOLBAR_PORTAL.getRef();
    }, []);

    const monthRender = React.useMemo(() => {
        if (!topReport) {
            return '';
        }

        const dt = DateTime.fromISO(topReport.wDate);

        if (dt.year === now.year) {
            return dt.toFormat('LLLL');
        }

        return `${dt.toFormat('LLLL')} ${dt.toFormat('y')}`;
    }, [topReport]);

    return (
        <Portal container={ refContainerPortal.current }>
            <Typography variant="subtitle1" sx={ { textTransform: 'capitalize' } }>{ monthRender }</Typography>
        </Portal>
    );
};

export default React.memo(MonthReport, isEqual);
