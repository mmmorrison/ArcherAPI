exports.up = function(knex, Promise) {
  return knex.schema.createTable('episodes', function(table){
    table.increments();
    table.integer('seasonID');
    table.string('title');
    table.date('release_date');
    table.text('description');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('episodes');
};
