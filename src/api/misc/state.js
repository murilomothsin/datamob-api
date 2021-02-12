module.exports = function(req, res, next) {

  states = [
    {
      id: 1,
      label: "AC"
    },
    {
      id: 2,
      label: "AL"
    },
    {
      id: 3,
      label: "AP"
    },
    {
      id: 4,
      label: "AM"
    },
    {
      id: 5,
      label: "BA"
    },
    {
      id: 6,
      label: "CE"
    },
    {
      id: 7,
      label: "DF"
    },
    {
      id: 8,
      label: "ES"
    },
    {
      id: 9,
      label: "GO"
    },
    {
      id: 10,
      label: "MA"
    },
    {
      id: 11,
      label: "MT"
    },
    {
      id: 12,
      label: "MS"
    },
    {
      id: 13,
      label: "MG"
    },
    {
      id: 14,
      label: "PA"
    },
    {
      id: 15,
      label: "PB"
    },
    {
      id: 16,
      label: "PR"
    },
    {
      id: 17,
      label: "PE"
    },
    {
      id: 18,
      label: "PI"
    },
    {
      id: 19,
      label: "RJ"
    },
    {
      id: 20,
      label: "RN"
    },
    {
      id: 21,
      label: "RS"
    },
    {
      id: 22,
      label: "RO"
    },
    {
      id: 23,
      label: "RR"
    },
    {
      id: 24,
      label: "SC"
    },
    {
      id: 25,
      label: "SP"
    },
    {
      id: 26,
      label: "SE"
    },
    {
      id: 27,
      label: "TO"
    },
  ]

  res.json({ states })
}
