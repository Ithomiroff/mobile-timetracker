const formatMinutes = (value: number) => 60 * value;

export const timeFormat = (value: number) => {
    if (value % 1 === 0) {
        return `${value} ч.`;
    }

    const [hours, minutes] = value.toString().split('.');

    const formattedMinutes = `${formatMinutes(Number(`0.${minutes}`))} мин.`;

    if (hours === '0') {
        return formattedMinutes;
    }

    return `${hours} ч. ${formattedMinutes}`;
};
