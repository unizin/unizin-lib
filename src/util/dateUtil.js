/* @flow */
import { differenceInMinutes, differenceInHours, differenceInDays, format } from 'date-fns';

// Less than 1 hour
// Time should be expressed in minutes:
// - 1 minute ago
// - 12 minutes ago
// - 58 minutes ago
// 1 hour or greater and less than 13 hours ago
// Time should be expressed in hours
// - 1 hour ago
// - 4 hours ago
// - 12 hours ago
// 12 hours ago and less than 24 hours ago
// Represented as a time stamp
// - 2:12pm
// - 8:35pm
// - 10:52am
// 24 hours ago and less than 7days ago
// Expressed in days
// - 1 day ago
// - 2 days ago
// - 6 days ago
// Greater than 7 days ago
// Expressed as a date stamp
// - Sep 12, 2018
// - Oct 10, 2018
// - Aug 2, 2017

const _pluralize = (unit: string) => (x: number = 0): string => {
    const absX = Math.abs(x);
    return `${x < 0 ? 'in' : ''} ${absX} ${unit}${absX === 1 ? '' : 's'}${x > 0 ? ' ago' : ''}`;
};

export const relativeDate = (target: string | Date, now: Date = new Date()): ?string => {
    const targetDate = new Date(target);
    for (let { comparison, conditional, formatter } of ([
        {
            comparison: differenceInMinutes,
            conditional: (x = 0) => Math.abs(x) < 60,
            formatter: _pluralize('minute'),
        },
        {
            comparison: differenceInHours,
            conditional: (x = 0) => Math.abs(x) < 13,
            formatter: _pluralize('hour'),
        },
        {
            comparison: differenceInHours,
            conditional: (x = 0) => Math.abs(x) >= 13 && Math.abs(x) < 24,
            formatter: () => format(targetDate, 'h:mm b'),
        },
        {
            comparison: differenceInDays,
            conditional: (x = 0) => Math.abs(x) >= 1 && Math.abs(x) < 7,
            formatter: _pluralize('day'),
        },
        {
            comparison: () => {},
            conditional: () => true,
            formatter: () => format(targetDate, 'LLL dd, yyyy'),
        },
    ]: Array<{
        comparison: (Date, Date) => number | void,
        conditional: (x?: number) => boolean,
        formatter: (x?: number) => string,
    }>)) {
        const diff = comparison(now, targetDate);
        if (conditional(diff)) {
            return formatter(diff);
        }
    }
};
