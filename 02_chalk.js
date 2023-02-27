
//we can use chalk to customize the colors
//so i used npm i chalk, but when i tried to use it, i started getting error "Error [ERR_REQUIRE_ESM]: require() of ES Module"
//i looked closer at chalk page and found "Chalk 5 is ESM. If you want to use Chalk with TypeScript or a build tool, you will probably want to use Chalk 4 for now."
//so for now, i used chalk, i used npm i chalk@4 --> this installed 4.1.3 version of chalk and that worked fine.


//instead of const, we can use var

var chalk = require('chalk')

console.log(chalk.blue('Hello world!'));

//wonder what ESM is.

const var2 = chalk.red('Red is my favorite color!')
console.log(var2)

const log = console.log
log(var2)


log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold('Hello world!'));

// Pass in multiple arguments
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// Nest styles of the same type even (color, underline, background)
log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));

log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);

const error = chalk.bold.red;
const warning = chalk.hex('#FFA500'); // Orange color

console.log(error('Error!'));
console.log(warning('Warning!'));

const name = 'Sindre';
console.log(chalk.green('Hello %s'), name);
//=> 'Hello Sindre'

log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
log(chalk.hex('#DEADED').bold('Bold gray!'));