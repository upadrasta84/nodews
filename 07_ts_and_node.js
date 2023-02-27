//node and ts can work together using a package called ts-node
//however it is also possible without tsnode 3rd party library
//created tsconfig.json here using tsc --init
//to use node features in ts file, use npm i --save-dev @types/node 
//--save-dev is for using the module only in a dev environment and since we will use js files in prod, we dont need such features in prod once the ts compiles to js file
//even after installing types/node, i was getting error on 'require' below. changing the target from es2016 to es2018 in tsconfig fixed that
//even after using types/node, we will not get any 'completion' support in the IDE. for that install @types/express also
//const express = require('express'); //even after installing express types, we are not getting completion. this is because of the import. we need to use different style of import
//import express from 'express';
var express = require('express');
var app = express();
app.listen(3000);
