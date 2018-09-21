'use strict';

const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')
const staticPath = '../../../assets'
const iconsPath = staticPath + '/icons'

// Permitar acesso via front do Angular
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Methods', 'DELETE,PUT');
    next();
});

// Diretorio com conteudo estatico
app.use(express.static(path.join(__dirname, staticPath)));

app.listen(3000, () => {
    console.log('Express is listennig')
})

app.get('/', (req, res) => {
    listFiles(iconsPath, data => {
        res.json(data)
    })
})

// Lista arquivos no diretorio
function listFiles(path, callback) {
    fs.readdir(path, { withFileTypes: true }, (error, files) => {
        //console.log(files)
        /*files.forEach(file => {
            fs.stat(iconsPath + '/' + file, stats => {
                console.log('stats', stats)
            })
        })*/
        if ( error ) {
            console.log(error)
            callback(error)
        } else {
            callback(files)
        }
    })
}