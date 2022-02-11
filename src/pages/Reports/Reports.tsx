import React from 'react';

import DayReport from './components/DayReport';
import { StyledContainer } from './domain/Styled';
import useReports from './domain/UseReports';

const Reports: React.FC = () => {
    const { reports } = useReports();

    return (
        <StyledContainer maxWidth="sm">
            { reports.map((item) => (
                <DayReport
                    key={ item.workRecordId }
                    item={ item }
                />
            )) }
        </StyledContainer>
    );
};

export default Reports;
