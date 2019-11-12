/* @flow */
import React from 'react'
import { storiesOf } from '@storybook/react'
import {
    addDays,
    addHours,
    addMinutes,
    subDays,
    subHours,
    subMinutes,
} from 'date-fns'
import { relativeDate } from '../src/util/dateUtil'

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

const now = '2019-03-21T15:44:36.924368Z'

storiesOf('Past Dates', module)
    .add('1 minute', () => <span>{relativeDate(subMinutes(new Date(now), 1), new Date(now))}</span>)
    .add('59 minutes', () => <span>{relativeDate(subMinutes(new Date(now), 59), new Date(now))}</span>)
    .add('1 hour', () => <span>{relativeDate(subHours(new Date(now), 1), new Date(now))}</span>)
    .add('< 13 hours', () => <span>{relativeDate(subMinutes(subHours(new Date(now), 12), 59), new Date(now))}</span>)
    .add('< 24 hours', () => <span>{relativeDate(subMinutes(subHours(new Date(now), 23), 59), new Date(now))}</span>)
    .add('> 24 hours, < 7 days', () => <span>{relativeDate(subDays(new Date(now), 6), new Date(now))}</span>)
    .add('> 7 days', () => <span>{relativeDate(subDays(new Date(now), 8), new Date(now))}</span>)

storiesOf('Future Dates', module)
    .add('1 minute', () => <span>{relativeDate(addMinutes(new Date(now), 1), new Date(now))}</span>)
    .add('59 minutes', () => <span>{relativeDate(addMinutes(new Date(now), 59), new Date(now))}</span>)
    .add('1 hour', () => <span>{relativeDate(addHours(new Date(now), 1), new Date(now))}</span>)
    .add('< 13 hours', () => <span>{relativeDate(addMinutes(addHours(new Date(now), 12), 59), new Date(now))}</span>)
    .add('< 24 hours', () => <span>{relativeDate(addMinutes(addHours(new Date(now), 23), 59), new Date(now))}</span>)
    .add('> 24 hours, < 7 days', () => <span>{relativeDate(addDays(new Date(now), 6), new Date(now))}</span>)
    .add('> 7 days', () => <span>{relativeDate(addDays(new Date(now), 8), new Date(now))}</span>)
