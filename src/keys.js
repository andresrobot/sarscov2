module.exports = {
  

  /*
  database: {
    host: '35.237.150.160',
    user: 'root',
    password: 'Andre$23',
    database: 'database_master'
  }
   */
  //Production

   database: {
    user: 'root',
    password: 'Andre$23',
    database: 'database_master',
    socketPath : '/cloudsql/app-sarscov2:us-east1:sarscov2db'
   }

  
};