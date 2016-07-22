// Update with your config settings.

module.exports = {

	development: {
		client: 'pg',
		connection: {
			database: ''
		}
	},
	production: {
		client: 'postgresql',
		connection: process.env.DATABASE_URL
	}
};
