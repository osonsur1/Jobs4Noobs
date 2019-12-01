var CronJob = require('cron').CronJob;

const fetchGithub = require('./tasks/fetch-github');

// Fetch GitHub Jobs
new CronJob('* * * * *', fetchGithub, null, true, 'America/Los_Angeles');