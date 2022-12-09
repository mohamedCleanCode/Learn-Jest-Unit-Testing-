// test(name, func, timeout)
// it(name, func, timeout)

// expect(func()).toBe(result)

/* describe(name, () => { just For regulation only
    test(name, func, timeout)
    test(name, func, timeout)
    test(name, func, timeout)
    test(name, func, timeout)
    test(name, func, timeout)
    ...
})*/

/* describe(name, () => {
    describe(name, () => {
            test(name, func, timeout)
            test(name, func, timeout)
    ...
    })
    test(name, func, timeout)
    test(name, func, timeout)
    test(name, func, timeout)
})*/

// test.onley() just run test has onley
// describe.onley() just run describe has onley

// test.skip() just stop test has skip
// describe.skip() just stop describe has skip

// timeout = 5s

// beforeAll(func, timeout) run before all tests
/* 
beforeAll(() => {
    #conect to database
    #empty testing table
    #add dummy data for testing
    #prepare everything before testing
})
*/
// afterAll(func, timeout) run after all tests
/* 
afterAll(() => {
    #clean database
    #clean cache
})
*/
// beforeEach(func, timeout) run before one mark test

// learn some matchers

// create your own matcher
/*
expect.extend({
        funcName(received, target) {
            const pass = condetion
            if (pass) {
                return {
                    massege: () => "massege",
                    pass: true
                }
            } else {
                return {
                    massege: () => "massege",
                    pass: false
                }
            }
    }
})
*/

// learn code code coverage
/*
    collectCoverage: true,
    coverageReoprters: [html, css, ...]
    coverageDirectory: reports
    cllectCoverageFrom: [**\*.(js,jsx,ts)]
    coveragePathIgnorePatterns: [/node_modules, ...]
*/

// npm test -- --coverage or put in package.json

// learn Mock function
