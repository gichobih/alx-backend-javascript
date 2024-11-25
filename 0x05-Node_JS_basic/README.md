# 0x05. NodeJS Basics

`Back-end` `JavaScript` `ES6` `NodeJS` `ExpressJS`

![image](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2020/1/82692897e15d9f03256f.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20241125%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241125T122708Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=21b5aaa405ef96d7391e75ff6d2be1567cd54683d56a734128db6bb6c0e301d7)

## Resources
#### Read or watch:
* [Node JS getting started](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
* [Process API doc](https://node.readthedocs.io/en/latest/api/process/)
* [Child process](https://nodejs.org/api/child_process.html)
* [Express getting started](https://expressjs.com/en/starter/installing.html)
* [Mocha documentation](https://mochajs.org/)
* [Nodemon documentation](https://github.com/remy/nodemon#nodemon)

## Learning Objectives

At the end of this project, you are expected to be able to [explain to anyone](https://fs.blog/feynman-learning-technique/), without the help of Google:

* run javascript using NodeJS
* use NodeJS modules
* use specific Node JS module to read files
* use `process` to access command line arguments and the environment
* create a small HTTP server using Node JS
* create a small HTTP server using Express JS
* create advanced routes with Express JS
* use ES6 with Node JS with Babel-node
* use Nodemon to develop faster

## Requirements
* Allowed editors: `vi, vim, emacs, Visual Studio Code`
* All your files will be interpreted/compiled on Ubuntu 18.04 LTS using `node` (version 12.x.x)
* All your files should end with a new line
* A `README.md` file, at the root of the folder of the project, is mandatory
* Your code should use the `js` extension
* Your code will be tested using `Jest` and the command `npm run test`
* Your code will be verified against lint using ESLint
* Your code needs to pass all the tests and lint. You can verify the entire project running `npm run full-test`
* All of your functions/classes must be exported by using this format: `module.exports = myFunction;`

## Provided files

`database.csv`

```
firstname,lastname,age,field
Johann,Kerbrou,30,CS
Guillaume,Salou,30,SWE
Arielle,Salou,20,CS
Jonathan,Benou,30,CS
Emmanuel,Turlou,40,CS
Guillaume,Plessous,35,CS
Joseph,Crisou,34,SWE
Paul,Schneider,60,SWE
Tommy,Schoul,32,SWE
Katie,Shirou,21,CS
```

[package.json]()
[babel.config.js]()
[.eslintrc.js]()

#### and…
Don’t forget to run `$ npm install` when you have the `package.json`

# Tasks

## 0. Executing basic javascript with Node JS

In the file `0-console.js`, create a function named `displayMessage` that prints in `STDOUT` the string argument.
```
bob@dylan:~$ cat 0-main.js
const displayMessage = require('./0-console');

displayMessage("Hello NodeJS!");

bob@dylan:~$ node 0-main.js
Hello NodeJS!
bob@dylan:~$
```
