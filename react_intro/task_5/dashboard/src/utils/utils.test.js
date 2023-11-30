import React from 'react';
import { getFullYear, getFooterCopy, getLastNotification } from  './utils';
getLastNotification
it('getFullYear should return the current year', () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toEqual(currentYear);
});

test("getFooterCopy returns the correct string when the argument is true", () => {
    expect(getFooterCopy(true)).toEqual("Holberton School");
});

test("getFooterCopy returns the correct string when the argument is false", () => {
    expect(getFooterCopy(false)).toEqual("Holberton School main dashboard");
});

test("getLatestNotification returns the expected string", () => {
    expect(getLastNotification()).toEqual("<strong>Urgent requirement</strong> - complete by EOD");
});