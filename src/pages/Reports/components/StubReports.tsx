import React from 'react';
import { Skeleton } from '@mui/material';

const emptyArray = [0, 0, 0, 0, 0, 0, 0, 0];

const StubReports: React.FC = () => {
    return (
        <React.Fragment>
            { emptyArray.map(() => (
                <div>
                    <Skeleton variant="rectangular" width={ 30 } height={ 50 } />
                    <Skeleton animation="wave" height={ 50 } />
                </div>
            )) }
        </React.Fragment>
    );
};

export default React.memo(StubReports);
