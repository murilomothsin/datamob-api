const CompanyConsumption = require('./consumption')

CompanyConsumption.methods(['get', 'post', 'put', 'delete'])
CompanyConsumption.updateOptions({new: true, runValidators: true})

// Append metadata info
CompanyConsumption.after('get', function(req, res, next) {
  const metadata = {
    page: 1,
    total_pages: 6,
    per_page: 15
  }
  var tmp = res.locals.bundle
  res.locals.bundle = {
    consumptions: tmp,
    metadata
  }
  next();
});


module.exports = CompanyConsumption