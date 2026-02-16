import {test, expect} from '@playwright/test';

// reqres.in is a fake online REST API for testing and prototyping
// reqres.in now requires an API key for authentication.
// You can obtain a free API key by signing up on their website: https://reqres.in/
// After signing up, you will receive an API key that you can use to authenticate your requests to the reqres.in API.
//

test('API GET Request', async({request}) => {
    const response = await request.get('https://reqres.in/api/users/2');

    // verify status code of response is 200 - successful
    expect (response.status()).toBe(200);

    // verify response contains specific text
    const text = await response.text();
    expect (text).toContain('Janet');
})