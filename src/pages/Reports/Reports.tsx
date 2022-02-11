import React from 'react';

import DayReport from './components/DayReport';
import { StyledContainer } from './domain/Styled';
import useReports from './domain/UseReports';

const Reports: React.FC = () => {
    const { reports, onPrev } = useReports();

    React.useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY < 500) {
                onPrev();
            }
        });
    }, []);

    React.useLayoutEffect(() => {
        if (reports.length > 0) {
            window.scrollTo(0, document.body.scrollHeight);
        }
    }, [reports]);

    return (
        <StyledContainer maxWidth="sm">
            { reports.map((item) => (
                <DayReport
                    key={ item.wDate }
                    item={ item }
                />
            )) }
        </StyledContainer>
    );
};

export default Reports;
