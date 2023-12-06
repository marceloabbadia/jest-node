module.exports = () => {
  const findAll = (req, res) => {
    const users = [
      {
        name: 'Marcelo Abbadia',
        mail: 'marcelo@teste.com',
      },
    ];

    return res.status(200).json(users);
  };

  const create = (req, res) => {
    return res.status(201).json(req.body);
  };

  return { findAll, create };
};
