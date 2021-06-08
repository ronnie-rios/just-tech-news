const rotuer = require('express').Router();

const router = require('./api');
const apiRoutes = require('./api');

rotuer.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;