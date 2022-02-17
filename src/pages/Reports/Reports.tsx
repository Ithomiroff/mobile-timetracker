import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useVirtual } from 'react-virtual';
import AddIcon from '@mui/icons-material/Add';
import { Box, LinearProgress, Skeleton } from '@mui/material';
import { SxProps } from '@mui/system';

import { BottomModal } from '../../components/BottomModal';

import DayReport from './components/DayReport';
import MonthReport from './components/MonthReport';
import ReportDetail from './components/ReportDetail';
import useDetailReport from './domain/Hooks/UseDetailReport';
import useReports from './domain/Hooks/UseReports';
import {
    StyledFab,
    StyledReportContainer,
    StyledReportWrap, StyledSkeleton,
    StyledVirtualContainer,
    StyledVirtualInner,
} from './domain/Styled';

const sxProgress: SxProps = {
    width: 1,
    position: 'absolute',
    transform: 'translateY(-8px)',
};

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
        preloadSkeletons,
    } = useReports(onClose);

    const navigate = useNavigate();

    const parentRef = React.useRef<HTMLDivElement | null>(null);

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

    const topReportItem = rowVirtualizer.virtualItems.length > 0
        ? reports[rowVirtualizer.virtualItems[0].index]
        : null;

    const goToAdd = () => navigate('add-report');

    return (
        <React.Fragment>
            <Box sx={ sxProgress }>
                { isFetching && preloadSkeletons.length === 0 && <LinearProgress color="primary" /> }
            </Box>
            <StyledReportContainer maxWidth="sm">
                <StyledVirtualContainer ref={ parentRef }>
                    <StyledVirtualInner height={ rowVirtualizer.totalSize }>
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
                        { preloadSkeletons.map((item) => (
                            <StyledSkeleton key={ item }>
                                <Skeleton animation="wave" height={ 40 } />
                            </StyledSkeleton>
                        )) }
                    </StyledVirtualInner>
                </StyledVirtualContainer>
            </StyledReportContainer>

            <MonthReport
                topReport={ topReportItem }
            />

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
