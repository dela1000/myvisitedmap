let express = require('express');
let cors = require('cors');

let fs = require('fs');
let path = require('path');
let _ = require('lodash');
let jsonfile = require('jsonfile')

let app = express();
app.use(cors());

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function() {
    console.log('Server started: http://localhost:' + app.get('port') + '/');
});