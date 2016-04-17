exports.up = function(knex, Promise) {
  return knex.schema.createTable('episodes', function(table){
    table.increments();
    table.string('title');
    table.text('description');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('episodes');
};
