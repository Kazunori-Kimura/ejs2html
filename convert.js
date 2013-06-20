
var fs = require("fs"),
    ejs = require("ejs");

var base_dir = __dirname + "/ejs",
    html_dir = __dirname + "/html";

fs.readdirSync(base_dir).forEach(function(item){
    if (/\.ejs$/i.test(item)){
        var baseName = item.replace(/\.ejs$/i, "");

        var template = fs.readFileSync(base_dir + "/" + item, "utf-8");
        var data = JSON.parse(fs.readFileSync(base_dir + "/json/" + baseName + ".json", "utf-8"));
        data.filename = base_dir + "/" + item;
        //data.debug = true;
        var html = ejs.render(template, data);
        var path = html_dir + "/" + baseName + ".html";
        fs.writeFileSync(path, html, {encoding: "utf-8"});

        console.log(item + " converted.");
    }
});


