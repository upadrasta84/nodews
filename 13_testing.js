//node is tested using Jest. npm i jest --save-dev 
//in package.json, we have 'test' pointing to jest under scripts section.
//to write tests, create tests directory and have files with names as xxx.test.js and jest will pick them up automatically.
//to test, simply do npm test. 
//the files can be in any directory and jest is picking them up just fine.
/*Each file is treate as a test suite and each method is treated as a function

to test single file, we can do 
npx jest tests/my.test.js

we can also have assertions such as   expect(sum).toBe(8);

running jest with --watchAll will not quit but any new tests will also be run

we can have env for test.env also in scripts section of package.json

test: env-cmd ./config/test.env jest ==watchAll
*/