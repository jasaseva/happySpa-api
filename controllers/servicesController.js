var serviceModel = require('./../models/serviceModel')
//const conn = require('../database/connection')
exports.services_all_get = function (req, res) {
    serviceModel.findAll({
        attributes: ['id', 'name', 'url', 'happy']
    })
        .then(data => res.json(data))
        .catch(err => {
            console.log(err)
            res.status(500).send('error')
            
        })
}

exports.services_detail_get = function (req, res) {
    res.send('devolver todos los servicios del spa con id' + req.params.id);
}
