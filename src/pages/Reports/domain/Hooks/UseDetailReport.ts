import React from 'react';

import { ReportDto } from '../../../../types/ReportDto';

const useDetailReport = () => {
    const [report, setReport] = React.useState<ReportDto | null>(null);

    const unSelectReport = () => setReport(null);

    const selectReport = (item?: ReportDto) => {
        if (item) {
            setReport(item);
        }
    };

    const onClose = () => setReport(null);

    return {
        report,
        onClose,
        selectReport,
        unSelectReport,
    };
};

export default useDetailReport;
