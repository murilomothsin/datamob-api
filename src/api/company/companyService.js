const Company = require('./company')
const CompanyConsumption = require('../company_consumption/consumption')

Company.route('consumption', {
  handler: function(req, res, next) {
    const metadata = {
      page: 1,
      total_pages: 6,
      per_page: 15
    }
    CompanyConsumption
      .find({ company_id: req.params.id })
      .limit(15)
      .exec(function(err, consumptions) {
        if (err) {
          res.status(400).send({ type: false, error: err })
        }
        res.json({ type: true, consumptions, metadata });
      })
  },
  detail: true, // detail makes sure we have one model to work on i.e. /user/:id/note is the uri
  methods: ['get'], // only respond to GET requests
})

Company.methods(['get', 'post', 'put', 'delete'])
Company.updateOptions({new: true, runValidators: true})

module.exports = Company