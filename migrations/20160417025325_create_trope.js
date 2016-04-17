exports.up = function(knex, Promise) {
  return knex.schema.createTable('trope', function(table){
    table.increments();
    table.string('type');
    table.text('explanation');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('trope');
};
