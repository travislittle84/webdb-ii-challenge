
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          "vin": 22345678901234567,
          "make": "Toyota",
          "model": "Tacoma",
          "milage": "80000",
          "transmission": "standard",
          "title_status": "clean"
        },
        {
          "vin": 12345678901234567,
          "make": "Toyota",
          "model": "Corolla",
          "milage": "42854",
          "transmission": "standard",
          "title_status": "clean"
        },
        {
          "vin": 32345678901234567,
          "make": "Toyota",
          "model": "Camry",
          "milage": "252754",
        }
        
      ]);
    });
};
