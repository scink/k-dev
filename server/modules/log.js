const winston = require('winston');

module.exports = (module) => {
	const path = module.filename.split('/').slice(-2).join('/');

	return new winston.Logger({
		transports: [
			new winston.transports.Console({
				colorize: true,
				level   : 'debug',
				label   : path,
			})
		],
	});
};