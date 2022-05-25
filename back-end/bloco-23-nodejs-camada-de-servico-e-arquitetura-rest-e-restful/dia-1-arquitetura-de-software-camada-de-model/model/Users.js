const connection = require('./connection');

const create = async (firstName, lastName, email, password) => {
  const [row]  = await  connection.execute(
    'INSERT INTO users_crud.users (first_name, last_name, email, password) VALUES (?,?,?,?)',
    [firstName, lastName, email, password],
  );

  console.log(row);
  const result = {
    id: row.insertId,
    firstName,
    lastName,
    email,
  }

  return result;

}

module.exports = {
  create
}