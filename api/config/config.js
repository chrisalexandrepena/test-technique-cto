module.exports = {
  "production": {
    "username": process.env.MYSQL_USER,
    "password": process.env.MYSQL_PASSWORD,
    "database": process.env.MYSQL_DATABASE,
    "host": process.env.MYSQL_CONTAINERNAME,
    "port": process.env.MYSQL_CONTAINERPORT,
    "dialect": "mysql"
  }
};
