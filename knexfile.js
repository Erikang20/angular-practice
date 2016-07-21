// Update with your config settings.

module.exports = {

	development: {
		client: 'pg',
		connection: {
			database: 'galvanize'
		}
	},
	production: {
		client: 'postgresql',
		connection: process.env.DATABASE_URL
	}
};
