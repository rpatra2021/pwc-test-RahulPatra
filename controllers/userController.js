const Users = require('../models/users');
const {Op} = require('sequelize');


exports.listData = async (req, res) => {
    var model = await Users.findAndCountAll({
        order: [['firstName', 'ASC']]
    });
    return res.status(200).json(model);
};

exports.create = async (req, res) => {
    let model = await Users.create(req.body).catch(err=> { console .log( err)});
    return res.status(201).json(model);
};

exports.delete = async (req, res) => {
    Users.destroy({
        where: {id: req.params.id},
    }).catch(err=> { console .log( err)});
    return res.status(201).send('deleted');
};