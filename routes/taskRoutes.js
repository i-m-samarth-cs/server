// server/routes/taskRoutes.js
const express = require('express');
const { getTasks, createTask, deleteTasks, toggleTaskCompletion } = require('../controllers/taskController');

const router = express.Router();

router.route('/').get(getTasks).post(createTask);
router.route('/delete').post(deleteTasks);
router.route('/:id/toggle').put(toggleTaskCompletion);

module.exports = router;