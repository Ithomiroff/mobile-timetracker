import React from 'react';

import { ReportDto } from '../../../../types/ReportDto';

const useDetailReport = () => {
    const [report, setReport] = React.useState<ReportDto | null>(null);

    const unSelectReport = () => setReport(null);

    const selectReport = (item?: ReportDto) => item && setReport(item);

    return {
        report,
        selectReport,
        unSelectReport,
    };
};

export default useDetailReport;
