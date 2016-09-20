// References
var fs = require('fs');
var path = require('path');
var promise = require('promise');
var readline = require('readline');
var mkdirp = require('mkdirp');
var request = require('request');

module.exports = {
    // Log header
    logHeader: function() {
        return '';
    },
    
    // Set log header
    setLogHeader: function(fn) {
        this.logHeader = fn;
    },
    
    // Confirmation message
    confirm: function(msg, abortMessage) {
        var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        return new Promise(function(resolve) {
            rl.question(msg, function (input) {
                rl.close();
                if(/^y|yes|ok|true$/i.test(input))
                    resolve();
                else
                    reject(new Error(abortMessage || 'Aborted'));
            });
        });
    },
    
    // Ask message
    ask: function(msg) {
        var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        return new Promise(function(resolve) {           
            rl.question(msg, function (input) {
                rl.close();
                resolve(input);
            }); 
        });
    },
    
    // Check directory
    checkDirectory: function(path) {
        return new Promise(function(resolve, reject) {
            fs.readdir(path, function(err, files){
                if (err && 'ENOENT' != err.code) return reject(err);
                resolve(!files || !files.length);
            }); 
        });
    },
    
    // Load template
    loadTemplate: function(name) {
        return fs.readFileSync(path.join(__dirname, '..', 'templates', name), 'utf-8');
    },

    // Load file
    loadFile: function(name) {
        return fs.readFileSync(name, 'utf-8');
    },
    
    // Write file
    write: function(path, str, mode) {        
        fs.writeFileSync(path, str, { mode: mode || 0666 });
        console.log(this.logHeader(), 'Create: ' + path);
    },
    
    // Make directory
    mkdir: function(path) {
        return new Promise(function(resolve, reject) {
            mkdirp(path, 0755, function(err) {
                if(err) return reject(err);                
                console.log(this.logHeader(), 'Create: ' + path);
                resolve();
            }.bind(this)); 
        }.bind(this));
    },

    // Make http request
    http: function(type, endpoint, options) {
        if(!options.environment) 
        {
            console.error(this.logHeader(), 'Error: Missing environment config');
            return;
        }
        var config = {
            url: path.join(options.baseURL[options.environment], endpoint),
            headers: {
                'X-Warp-API-Key': options.apiKey,
                'X-Warp-Master-Key': options.masterKey
            }
        };

        if(options.data)
        {
            config.json = true;
            config.body = options.data;
        }

        return new Promise(function(resolve, reject) {
            request[type](config, function(err, response, body) {
                if(err)
                    return reject(err);
                else
                {
                    if(response.statusCode >= 200 && response.statusCode < 300)
                        resolve(body);
                    else
                        reject(body);
                }
            });
        });
    }
};