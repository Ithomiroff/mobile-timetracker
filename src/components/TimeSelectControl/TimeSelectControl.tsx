import React from 'react';
import BackspaceIcon from '@mui/icons-material/Backspace';
import {
    Button, ButtonGroup, Stack, Typography,
} from '@mui/material';

import { timeFormat } from '../../utils/TimeFormat';

import { TIME_VARIANTS } from './domain/Config';
import { TimeSelectControlProps } from './domain/Props';
import { StyledTimeControl } from './domain/Styled';
import { TimeVariants } from './domain/Types';

const TimeSelectControl: React.FC<TimeSelectControlProps> = ({
    value,
    onChange,
    error,
}) => {
    const refHistory = React.useRef<number[]>([]);

    const time = React.useMemo(() => {
        return timeFormat(value);
    }, [value]);

    const onAdd = (newValue: number) => {
        const result = value + newValue;

        if (result > 8) {
            return;
        }

        refHistory.current.push(newValue);

        onChange(result);
    };

    const onDeleteLast = () => {
        const lastValue = refHistory.current[refHistory.current.length - 1];

        if (lastValue) {
            onChange(value - lastValue);
            refHistory.current.pop();
        }
    };

    const onSelect = (item: TimeVariants) => () => onAdd(item.value);

    return (
        <StyledTimeControl error={ error }>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Stack direction="column">
                    <Typography variant="caption">Время</Typography>
                    <Typography variant="body1">{ time }</Typography>
                </Stack>

                <ButtonGroup size="small">
                    { TIME_VARIANTS.map((item) => (
                        <Button
                            key={ item.value }
                            disabled={ value === 8 }
                            onClick={ onSelect(item) }
                        >{ item.alias }
                        </Button>
                    )) }
                    <Button onClick={ onDeleteLast }>
                        <BackspaceIcon />
                    </Button>
                </ButtonGroup>
            </Stack>
        </StyledTimeControl>
    );
};

export default React.memo(TimeSelectControl);
