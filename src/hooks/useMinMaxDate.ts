export const useMinMaxDate = () => {
    const MAX_FUTURE_DATE_DAYS = 7;

    const getMinDate = (): Date => {
        return new Date();
    }

    const getMaxDate = (): Date => {
        const date = getMinDate();
        date.setDate(date.getDate() + MAX_FUTURE_DATE_DAYS);
        return date;
    };

    const getMinDateString = (): string => {
        return getMinDate().toISOString().substring(0,10);
    };

    const getMaxDateString = (): string => {
        return getMaxDate().toISOString().substring(0, 10);
    };

    const isDateValid = (date: Date): boolean => {
        const minDate = getMinDate();
        const maxDate = getMaxDate();
        if (date.getDate() === minDate.getDate()) return true; // Корректная обработка сегодняшнего числа
        else return !(date < minDate || date > maxDate);
    };

    return {getMinDateString, getMinDate, getMaxDateString, isDateValid};
};