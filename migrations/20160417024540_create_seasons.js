exports.up = function(knex, Promise) {
  return knex.schema.createTable('seasons', function(table){
    table.increments();
    table.string('season');
    table.integer('year');
    table.string('specialName');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('seasons');
};
