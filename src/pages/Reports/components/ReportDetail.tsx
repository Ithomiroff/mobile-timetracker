import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AppsIcon from '@mui/icons-material/Apps';
import ArticleIcon from '@mui/icons-material/Article';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import CommentIcon from '@mui/icons-material/Comment';
import {
    List, ListItem, ListItemButton, ListItemIcon, ListItemText,
} from '@mui/material';
import { SxProps } from '@mui/system';
import { DateTime } from 'luxon';

import { timeFormat } from '../../../utils/TimeFormat';
import { ReportDetailProps } from '../domain/Props';

const commentText: SxProps = {
    maxHeight: '12vh',
    overflowY: 'auto',
    display: 'block',
    wordBreak: 'break-all',
};

const ReportDetail: React.FC<ReportDetailProps> = ({
    report,
}) => {
    const date = DateTime.fromISO(report.date).toFormat('DDDD');

    const formatTime = React.useCallback(timeFormat, []);

    return (
        <List>
            <ListItem disablePadding={ true }>
                <ListItemButton>
                    <ListItemIcon>
                        <ArticleIcon />
                    </ListItemIcon>
                    <ListItemText primary={ `Отчет ${date}` } />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding={ true }>
                <ListItemButton>
                    <ListItemIcon>
                        <AssignmentIndIcon />
                    </ListItemIcon>
                    <ListItemText primary={ report.companyName } />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding={ true }>
                <ListItemButton>
                    <ListItemIcon>
                        <AppsIcon />
                    </ListItemIcon>
                    <ListItemText primary={ report.projectName } />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding={ true }>
                <ListItemButton>
                    <ListItemIcon>
                        <AccessTimeIcon />
                    </ListItemIcon>
                    <ListItemText primary={ formatTime(report.time) } />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding={ true }>
                <ListItemButton sx={ { alignItems: 'start' } }>
                    <ListItemIcon>
                        <CommentIcon />
                    </ListItemIcon>
                    <ListItemText sx={ commentText } primary={ report.comment } />
                </ListItemButton>
            </ListItem>
        </List>
    );
};

export default React.memo(ReportDetail);
