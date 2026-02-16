import {test, expect} from '@playwright/test';

test('demo tracing', async ({ page, context}) => {
    // start tracing before opening page
    await context.tracing.start({
        snapshots: true,
        screenshots: true,
    })
    // test code here
    await page.goto('https://www.google.com');

    // stop tracing and export into zip archive
    await context.tracing.stop({
        path: 'test-trace.zip'
    });
});