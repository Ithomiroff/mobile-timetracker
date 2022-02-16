import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useVirtual } from 'react-virtual';
import AddIcon from '@mui/icons-material/Add';

import { BottomModal } from '../../components/BottomModal';

import DayReport from './components/DayReport';
import ReportDetail from './components/ReportDetail';
import useDetailReport from './domain/Hooks/UseDetailReport';
import useReports from './domain/Hooks/UseReports';
import {
    StyledFab,
    StyledReportContainer, StyledReportWrap,
    StyledVirtualContainer,
    StyledVirtualInner,
} from './domain/Styled';

const Reports: React.FC = () => {
    const {
        report,
        selectReport,
        unSelectReport,
        onClose,
    } = useDetailReport();

    const {
        reports,
        isFetching,
        loadMore,
        deleteReport,
    } = useReports(onClose);

    const navigate = useNavigate();

    const parentRef = React.useRef<HTMLDivElement | null>(null);

    const test = React.useRef<HTMLDivElement | null>(null);

    const rowVirtualizer = useVirtual({
        size: reports.length,
        parentRef,
    });

    React.useEffect(() => {
        const [lastItem] = [...rowVirtualizer.virtualItems].reverse();

        if (!lastItem) {
            return;
        }

        if (lastItem.index >= reports.length - 1 && !isFetching) {
            loadMore();
        }
    }, [
        rowVirtualizer.virtualItems,
        isFetching,
    ]);

    const goToAdd = () => navigate('add-report');

    return (
        <React.Fragment>
            <StyledReportContainer maxWidth="sm">
                <StyledVirtualContainer ref={ parentRef }>
                    <StyledVirtualInner height={ rowVirtualizer.totalSize } ref={ test }>
                        { rowVirtualizer.virtualItems.map((row) => (
                            <StyledReportWrap
                                key={ row.index }
                                ref={ row.measureRef }
                                transform={ row.start }
                            >
                                <DayReport
                                    report={ reports[row.index] }
                                    onSelect={ selectReport }
                                    onEdit={ () => {} }
                                />
                            </StyledReportWrap>
                        )) }
                    </StyledVirtualInner>
                </StyledVirtualContainer>
            </StyledReportContainer>

            <BottomModal
                open={ Boolean(report) }
                onClose={ unSelectReport }
                onOpen={ unSelectReport }
            >
                { report && (
                    <ReportDetail
                        report={ report }
                        onDetail={ deleteReport }
                    />
                ) }
            </BottomModal>

            <StyledFab color="primary" size="small" onClick={ goToAdd }>
                <AddIcon />
            </StyledFab>
        </React.Fragment>
    );
};

export default Reports;
