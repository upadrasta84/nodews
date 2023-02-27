const { request } = require('http');
const {add} = require('../00_myimport2');


test('hello world', () => { //hello world is the name of the test

})

test('failed test' , ()=> {
   // throw new Error('faile test');
})



test('validate sum2',  () => {
    const sum = add(3,5);
    console.log(sum)
    if(sum !=8) {
        throw new Error('sum function not working properly')
    }
});

test('validate sum',  () => {
    const sum = add(3,5);
    expect(sum).toBe(8);
});

test('validate sum3',  () => {
    const sum = add(3,5);
    //expect(sum).toBe(8.1);
    expect(sum).toBe(8);
});

test('validate sum4',  () => {
    const sum = add(3,5);
    expect(sum).toBe(8);
});

test('validate sum4',  () => {
    const str = "test"
    expect(str).not.toBeNull();
});

test('testing async function',()=> {
    setTimeout(() => {
        expect(2).toBe(1)
    }, 4000)
})

/*
jest doesnt wait for the asnyc to run for 3 seconds but instead exits immediately with waring.
the above doesnt work becuase of async functions, we need to add a parameter and it can be called anything and that function needs to be called to tell jest that the async is done. here we are calling that variable funtion as done and are calling done() once the async is done
*/
test('testing async function2',(done)=> { 
    setTimeout(() => {
        expect(1).toBe(1)
        done()
    }, 3000)
})


test('testing async function',()=> {
    setTimeout(() => {
        expect(2).toBe(1)
    }, 1000)
})

//we can also test express modules using await:
//this will not run ofcourse. we need to import app which will be the express app.js file
/*
test('testing express', async () => {
    await request(app).post('/users').send({
        name:'karthik',
        password:'adfadf'
    }).expect(201)
})
*/

//we also have lifecycle functions in jest:
beforeEach(()=> {
    console.log('haha')
})

beforeAll(() => {
    console.log('huhu')

})

afterEach(()=> {
    console.log('hehe')
})

afterAll(()=> {
    console.log('hihi')
})
