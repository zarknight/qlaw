/**
 * LawController
 *
 * @description :: Server-side logic for managing laws
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  types: function (req, res) {
    LawType.find({}).exec((err, records) => {
      if (err) {
        res.status(500);
        res.json({});
      } else {
        res.json(records);
      }
    });
  },

  list: function (req, res) {
    let typeId = req.query.typeId;
    let searchText = req.query.search

    if (searchText) {

    } else {
      LawType.findOne({
        id: typeId
      }).populate('laws', {
        select: ['name', 'pdate']
      }).exec((err, record) => {
        if (err) {
          res.status(500);
          res.json({});
        } else {
          res.json(record);
        }
      });
    }
  },

  details: function (req, res) {
    let lawId = req.query.id;

    Law.findOne({id: lawId}).exec((err, record) => {
      if (err) {
        res.status(500);
        res.json({});
      } else {
        res.json(record);
      }
    });
  }

};

