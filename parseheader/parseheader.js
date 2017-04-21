function parseHeader() {
    this.parse = function(req, res){
        res.json(_parse(req));
    };
};

function _parse(req){
    var header = {
        "ipaddress": null,
        "language": null,
        "software": null
    };
    
    header.ipaddress = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
        
        header.language = req.headers["accept-language"];
        
        header.software = req.headers['user-agent'].split(') ')[0].split(' (')[1];
    
    return header;
};

module.exports = parseHeader;