
exports.up = function(knex) {
	return Promise.all([
		knex.schema.createTable('projects', function(table) {
			table.increments('project_id').primary();
			table.text('project_name');
			table.text('project_link');
			table.text('github_link');
			table.text('donation_link');
			table.text('logo');
			table.text('contact_name');
			table.text('contact_socialmedia');
			table.text('contact_bio');
			table.text('funding_pitch');
			table.text('funding_range');
			table.text('funding_for');
		})
	])
};

exports.down = function(knex) {
  	return Promise.all([
		knex.schema.dropTable('projects')
	])
};
