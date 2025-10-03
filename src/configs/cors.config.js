const allowedOrigins = [
	'http://localhost:3000',
	'http://localhost:3001',
	'https://www.slanster.com',
	'https://slanster-dashboard.vercel.app',
	'https://slanster-admin.vercel.app',
	'*',
];

const corsOptions = {
	origin: (origin, callback) => {
		if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
			callback(null, true);
		} else {
			callback(new Error('Not allowed by CORS origin'));
		}
	},
	credentials: true,
	optionsSuccessStatus: 200
};

export default corsOptions;
