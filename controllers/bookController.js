var bookModel = require('./../models/bookModel')
//const conn = require('../database/connection')
exports.book_all_get = function (req, res) {
    bookModel.findAll({
        attributes: ['id_book', 'name', 'fecha', 'hora', 'email', 'id_service']
    })
        .then(data => res.json(data))
        .catch(err => {
            console.log(err)
            res.status(500).send('error')

        })
}

/*exports.services_detail_get = function (req, res) {
    serviceModel.findAll({
        attributes: ['id', 'name', 'url', 'happy'],
        where: {
            id: req.params.id
        }
    })
        .then(data => res.json(data))
        .catch(err => {
            console.log(err)
            res.status(500).send('error')

        })*/

exports.book_detail_get = function (req, res) {
    let id = Number(req.params.id);
    bookModel.findByPk(id, {
        attributes: ['id_book', 'name', 'fecha', 'hora', 'email', 'id_service']
    })
        .then(data => res.json(data))
        .catch(err => {
            console.log(err)
            res.status(500).send('error')

        })
}

exports.book_insert = function (req, res) {
    bookModel.create({
        name: req.body.name, 
        fecha: req.body.fecha, 
        hora: req.body.hora, 
        email: req.body.email, 
        id_service: req.body.id_service
    })
        .then(data => res.json(data))
        .catch(err => {
            console.log(err)
            res.status(500).send('error')

        })
}
