const Company = require('./company')
const CompanyConsumption = require('../company_consumption/consumption')

Company.route('consumption', {
  handler: function(req, res, next) {
    CompanyConsumption.find({ company_id: req.params.id }, function(err, consumptions) {
      if (err) {
        res.status(400).send({ type: false, error: err })
      }
      res.json({ type: true, consumptions });
    })
  },
  detail: true, // detail makes sure we have one model to work on i.e. /user/:id/note is the uri
  methods: ['get'], // only respond to GET requests
})

Company.methods(['get', 'post', 'put', 'delete'])
Company.updateOptions({new: true, runValidators: true})

module.exports = Company