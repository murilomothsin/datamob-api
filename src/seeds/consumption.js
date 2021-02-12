const Company = require('../api/company/company');
const Consumption = require('../api/company_consumption/consumption')

module.exports = function(req, res, next) {
  Company.findOne({}, {}, { sort: { 'created_at' : -1 } }, function(err, company) {
    console.log( company );
    data = [
      {
        company_id: company._id,
        type: 'data',
        user: 'UT Redmi MIUI v1.4.2',
        phone: '+ 55 (51) 9 8224 8751',
        group: 'Analytics',
        subgroup: 'Sub G',
        consumption: `${Math.round((Math.random() * (150 - 1) + 1) * 100) / 100} MB`,
        roaming: false,
        provider: 'TIM',
        company: 'Vostok One',
        source_number: '5551982240944',
        target_number: '5551982240944',
      },
      {
        company_id: company._id,
        type: 'data',
        user: 'UT Redmi MIUI v1.4.2',
        phone: '+ 55 (51) 9 8224 8751',
        group: 'Analytics',
        subgroup: 'Sub G',
        consumption: `${Math.round((Math.random() * (150 - 1) + 1) * 100) / 100} MB`,
        roaming: false,
        provider: 'TIM',
        company: 'ACME LTDA',
        source_number: '5551982240944',
        target_number: '5551982240944',
      },
      {
        company_id: company._id,
        type: 'data',
        user: 'UT Redmi MIUI v1.4.2',
        phone: '+ 55 (51) 9 8224 8751',
        group: 'Analytics',
        subgroup: 'Sub G',
        consumption: `${Math.round((Math.random() * (150 - 1) + 1) * 100) / 100} MB`,
        roaming: false,
        provider: 'TIM',
        company: 'Vostok One',
        source_number: '5551982240944',
        target_number: '5551982240944',
      },
      {
        company_id: company._id,
        type: 'data',
        user: 'UT Redmi MIUI v1.4.2',
        phone: '+ 55 (51) 9 8224 8751',
        group: 'Analytics',
        subgroup: 'Sub G',
        consumption: `${Math.round((Math.random() * (150 - 1) + 1) * 100) / 100} MB`,
        roaming: false,
        provider: 'TIM',
        company: 'Vostok One',
        source_number: '5551982240944',
        target_number: '5551982240944',
      },
      {
        company_id: company._id,
        type: 'data',
        user: 'UT Redmi MIUI v1.4.2',
        phone: '+ 55 (51) 9 8224 8751',
        group: 'Analytics',
        subgroup: 'Sub G',
        consumption: `${Math.round((Math.random() * (150 - 1) + 1) * 100) / 100} MB`,
        roaming: false,
        provider: 'TIM',
        company: 'Space X',
        source_number: '5551982240944',
        target_number: '5551982240944',
      },
      {
        company_id: company._id,
        type: 'data',
        user: 'UT Redmi MIUI v1.4.2',
        phone: '+ 55 (51) 9 8224 8751',
        group: 'Analytics',
        subgroup: 'Sub G',
        consumption: `${Math.round((Math.random() * (150 - 1) + 1) * 100) / 100} MB`,
        roaming: false,
        provider: 'TIM',
        company: 'Vostok One',
        source_number: '5551982240944',
        target_number: '5551982240944',
      },
      {
        company_id: company._id,
        type: 'data',
        user: 'UT Redmi MIUI v1.4.2',
        phone: '+ 55 (51) 9 8224 8751',
        group: 'Analytics',
        subgroup: 'Sub G',
        consumption: `${Math.round((Math.random() * (150 - 1) + 1) * 100) / 100} MB`,
        roaming: false,
        provider: 'TIM',
        company: 'NASA',
        source_number: '5551982240944',
        target_number: '5551982240944',
      },
      {
        company_id: company._id,
        type: 'data',
        user: 'UT Redmi MIUI v1.4.2',
        phone: '+ 55 (51) 9 8224 8751',
        group: 'Analytics',
        subgroup: 'Sub G',
        consumption: `${Math.round((Math.random() * (150 - 1) + 1) * 100) / 100} MB`,
        roaming: false,
        provider: 'TIM',
        company: 'NASA',
        source_number: '5551982240944',
        target_number: '5551982240944',
      },
      {
        company_id: company._id,
        type: 'data',
        user: 'UT Redmi MIUI v1.4.2',
        phone: '+ 55 (51) 9 8224 8751',
        group: 'Analytics',
        subgroup: 'Sub G',
        consumption: `${Math.round((Math.random() * (150 - 1) + 1) * 100) / 100} MB`,
        roaming: false,
        provider: 'TIM',
        company: 'Space X',
        source_number: '5551982240944',
        target_number: '5551982240944',
      },
      {
        company_id: company._id,
        type: 'data',
        user: 'UT Redmi MIUI v1.4.2',
        phone: '+ 55 (51) 9 8224 8751',
        group: 'Analytics',
        subgroup: 'Sub G',
        consumption: `${Math.round((Math.random() * (150 - 1) + 1) * 100) / 100} MB`,
        roaming: false,
        provider: 'TIM',
        company: 'Vostok One',
        source_number: '5551982240944',
        target_number: '5551982240944',
      }
    ]

    Consumption.collection.insert(data, onInsert);

    function onInsert(err, docs) {
        if (err) {
            res.json({error: err})
        } else {
            console.info('%d Company Consumptions were successfully stored.', docs.length);
            res.json({success: docs})
        }
    }
  });
}
