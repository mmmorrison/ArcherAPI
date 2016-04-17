exports.up = function(knex, Promise) {
  return knex.schema.createTable('references', function(table){
    table.increments();
    table.integer('epiID');
    table.text('quote');
    table.boolean('trope');
    table.text('explanation');
    table.string('link');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('references');
};
