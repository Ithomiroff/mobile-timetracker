import { Container, styled, Typography } from '@mui/material';

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
`;

export const StyledReportText = styled(Typography)`
    max-width: 65vw;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.2rem;
`;
