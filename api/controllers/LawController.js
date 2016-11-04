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
  },

  test: function (req, res) {
    LawType.findOne({id: '581c17a736bb076dcb0325a8'}, (err, lawType) => {
      lawType.laws.add({
        name: "中华人民共和国宪法",
        pdate: "2004-03-14",
        desc: "测试描述",
        preface: "测试前言",
        chapters: [{
          name: "总纲",
          entries: [{
            name: "第一条",
            content: "中华人民共和国是工人阶级领导的、以工农联盟为基础的人民民主专政的社会主义国家。"
          }, {
            name: "第一条",
            content: "中华人民共和国是工人阶级领导的、以工农联盟为基础的人民民主专政的社会主义国家。"
          }, {
            name: "第一条",
            content: "中华人民共和国是工人阶级领导的、以工农联盟为基础的人民民主专政的社会主义国家。"
          }]
        }]
      })

      lawType.save(function (err) {
        if (err) {
          return res.serverError(err);
        } else {
          return res.ok();
        }
      })
    })
  }

};

