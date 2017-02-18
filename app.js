let app = require('express')();
let port = 1337;

app.get('/', (req, res) => {
	res.send('<h1>Express is running!</h1>');
});

app.listen(port, () => {
	console.log(`Express is running on port ${port}`);
});