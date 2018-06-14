var Person = require('../models/person')

module.exports.getData = function (req, res) {
    Person.find({}, function (err, people) {
        if (err) {
            return res.status(500).send("no se pudo correr");
        }

        res.json({ data: people }); 
    })

}

module.exports.postData = function (req, res) {
    var person = new Person(req.body);
    person.save(function(err){
        if (err) {
            return res.status(500).send("no se pudo guardar al usuario en este momento");
        }

        res.status(200).send("guardaste a una persona"); 
        
    })
}


module.exports.findData = function (req, res) {
    Person.find({ firstName: req.body.firstName, lastName: req.body.lastName }, function (err, people) {
        if (err) {
            return res.status(500).send("no se pudo correr");
        }

        res.json({ data: people });
        console.log("se encontro");
    })
}


