import { test, expect } from '@playwright/test';

// Option 2 for importing test and expect modules from playwright package
// import { test, expect } from '@playwright/test';
// PLaywright Test provides a test function to declare tests and expect function to write assertions.


// examples of importing functions/objects from another file
// const {hello, helloworld} = require('./demo/hello')
// import {hello, helloworld} from './demo/hello.js'}

// call and print the output of functions from the hello file imported above
// console.log (hello());
// console.log (helloworld());

test('my first test', async ({ page }) => {

    await page.goto('https://google.com');
    await expect(page).toHaveTitle('Google');
});
