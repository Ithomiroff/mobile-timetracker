import React from 'react';
import { CircularProgress } from '@mui/material';

import { BottomModal } from '../../components/BottomModal';

import DayReport from './components/DayReport';
import ReportDetail from './components/ReportDetail';
import useDetailReport from './domain/Hooks/UseDetailReport';
import useReports from './domain/Hooks/UseReports';
import { StyledContainer, StyledSpinner } from './domain/Styled';

const Reports: React.FC = () => {
    const { reports, isFetching } = useReports();

    const { report, selectReport, unSelectReport } = useDetailReport();

    return (
        <React.Fragment>
            <StyledContainer maxWidth="sm">
                { reports.map((item) => (
                    <DayReport
                        key={ item.wDate }
                        report={ item }
                        onSelect={ selectReport }
                    />
                )) }

                <StyledSpinner>
                    { isFetching && <CircularProgress color="primary" size={ 20 } /> }
                </StyledSpinner>
            </StyledContainer>

            <BottomModal
                open={ Boolean(report) }
                onClose={ unSelectReport }
                onOpen={ unSelectReport }
            >
                { report && (
                    <ReportDetail
                        report={ report }
                    />
                ) }
            </BottomModal>
        </React.Fragment>
    );
};

export default Reports;
