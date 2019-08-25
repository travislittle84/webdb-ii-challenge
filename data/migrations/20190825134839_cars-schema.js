
exports.up = function(knex) {
  // create table
  return knex.schema.createTable('cars', tbl => {
      tbl.increments() // incremental id
      tbl.string('vin', 17).unique().notNullable()
      tbl.string('make', 128).notNullable()
      tbl.string('model', 128).notNullable()
      tbl.integer('milage').notNullable()
      tbl.string('transmission', 128)
      tbl.string('title_status', 128)
  })
};

exports.down = function(knex) {
    // drop (delete) the cars table
    return knex.schema.dropTableIfExists('cars')
  
};
