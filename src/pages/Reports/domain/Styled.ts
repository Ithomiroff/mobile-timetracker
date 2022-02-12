import {
    Box, Container, Grid, styled, Typography,
} from '@mui/material';

export const StyledContainer = styled(Container)`
    height: 100%;
`;

export const StyledReport = styled('div')`
    display: flex;
    align-items: flex-start;
    padding-top: ${({ theme }) => theme.spacing(1)};
    padding-bottom: ${({ theme }) => theme.spacing(1)};
`;

export const StyledReportDay = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: ${({ theme }) => theme.spacing(2)};
    width: 8vw;
`;

export const StyledReportsItem = styled('div')`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const StyledReportItem = styled('div')<{$warn?: boolean; $dayOff?: boolean}>`
    width: 100%;
    padding: ${({ theme }) => theme.spacing(0.7)};
    border-radius: 4px;
    background-color: ${({ theme, $warn, $dayOff }) => {
        if ($warn) {
            return theme.palette.warning.main;
        }

        if ($dayOff) {
            return theme.palette.success.light;
        }

        return theme.palette.success.main;
    }};
    margin-bottom: ${({ theme }) => theme.spacing(0.5)};
    color: ${({ theme, $warn, $dayOff }) => {
        if ($warn || $dayOff) {
            return theme.palette.primary.main;
        }

        return theme.palette.primary.contrastText;
    }};
    display: flex;
    align-items: center;
    justify-content: space-between;
    transform: scale(1);
    transition: transform .4s ease, box-shadow .2s ease-out;
    user-select: none;

    &:active {
        transform: scale(0.7);
        box-shadow: ${({ theme }) => theme.shadows[5]};
    }
`;

export const StyledReportText = styled(Typography)`
    max-width: 50vw;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.2rem;
`;

export const StyledDetailHeader = styled(Box)`
    display: flex;
    align-items: center;
    padding-top: ${({ theme }) => theme.spacing(1.5)};
    padding-bottom: ${({ theme }) => theme.spacing(1.5)};
`;

export const StyledDetailContainer = styled(Grid)`
    padding-top: ${({ theme }) => theme.spacing(2)};
    padding-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const StyledDayNum = styled('div')<{isToday: boolean}>`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme, isToday }) => isToday && theme.palette.primary.main};
    color: ${({ theme, isToday }) => isToday && theme.palette.primary.contrastText};
    border-radius: 50%;
`;

export const StyledSpinner = styled('div')`
    text-align: center;
    height: 6vh;
`;
