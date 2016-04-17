exports.up = function(knex, Promise) {
  return knex.schema.createTable('guests', function(table){
    table.increments();
    table.integer('epiID');
    table.string('character');
    table.string('actor');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('guests');
};
