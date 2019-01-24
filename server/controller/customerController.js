let customerNames = [
  { id: 1, name: "josh" },
  { id: 2, name: "travis" },
  { id: 3, name: "hunter" },
  { id: 4, name: "sean" },
  { id: 5, name: "michael" }
];

let id = 6;

module.exports = {
  read: (req, res) => {
    res.status(200).json(customerNames);
  },
  create: (req, res) => {
    let { name } = req.params;
    customerNames.push({ id: id, name: name });
    id++;
    res.status(200).json(customerNames);
  },
  singleCustomer: function(req, res) {
    let foundCustomer = customerNames.filter(customer => {
      return customer.id == req.query.id;
    });

    res.status(200).json(foundCustomer);
  },
  update: (req, res) => {
    let { oldName, newName } = req.body;

    let index = customerNames.findIndex(customer => customer.name == oldName);
    if (index !== -1) {
      customerNames[index].name = newName;
      res.status(200).json(customerNames);
    }
  },
  delete: (req, res) => {
    let { id } = req.params;

    customerNames = customerNames.filter(customer => {
      return customer.id !== +id;
    });

    res.status(200).json(customerNames);
  }
};
