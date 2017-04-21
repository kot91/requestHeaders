var path = process.cwd();
var ParseHeader = require(path + '/parseheader/parseheader.js')


module.exports = function(app){
    app.get('/', function(req, res){
        res.sendfile(path + '/views/index.html')
    });
    
    
    var parseHeader = new ParseHeader();
    app.get('/whoami', parseHeader.parse);
};