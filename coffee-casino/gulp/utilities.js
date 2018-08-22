const path = require('path')
const fs = require('fs')
const config = require('./config')

function stripExt(file) {
  return path.basename(file, path.extname(file))
}

function getTask(task) {
  return require(config.paths.task_dir + task)()
}

function loadTasks(gulp) {
  const TASKS = fs.readdirSync(config.paths.task_dir).map(file => stripExt(file))
  TASKS.forEach(task => gulp.task(task, getTask(task)))
}

module.exports = {
  stripExt,
  getTask,
  loadTasks
}
