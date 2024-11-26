const http = require('http');
const fs = require('fs');

const PORT = 1245;
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

/**
 * Reads and processes the student database file.
 * @param {string} dataPath - Path to the CSV database file.
 * @returns {Promise<string>} - A promise that resolves with the formatted student data.
 */
const countStudents = (dataPath) => new Promise((resolve, reject) => {
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
    return;
  }
  fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const reportParts = [];
    const fileLines = data.trim().split('\n');
    if (fileLines.length <= 1) {
      reject(new Error('No valid student data found'));
      return;
    }

    const studentGroups = {};
    const dbFieldNames = fileLines[0].split(',');
    const studentPropNames = dbFieldNames.slice(0, -1);

    fileLines.slice(1).forEach((line) => {
      const studentRecord = line.split(',');
      if (studentRecord.length < dbFieldNames.length) return;
      const studentPropValues = studentRecord.slice(0, -1);
      const field = studentRecord[studentRecord.length - 1];
      if (!studentGroups[field]) {
        studentGroups[field] = [];
      }
      const studentEntries = studentPropNames.map((propName, idx) => [
        propName,
        studentPropValues[idx],
      ]);
      studentGroups[field].push(Object.fromEntries(studentEntries));
    });

    const totalStudents = Object.values(studentGroups).reduce(
      (pre, cur) => pre + cur.length,
      0
    );
    reportParts.push(`Number of students: ${totalStudents}`);
    Object.entries(studentGroups).forEach(([field, group]) => {
      const studentNames = group.map((student) => student.firstname).join(', ');
      reportParts.push(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
    });

    resolve(reportParts.join('\n'));
  });
});

/**
 * HTTP server routes and handlers.
 */
const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(DB_FILE)
      .then((report) => {
        const responseText = `This is the list of our students\n${report}`;
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(responseText);
      })
      .catch((err) => {
        const responseText = `This is the list of our students\n${err.message}`;
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(responseText);
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

/**
 * Start the HTTP server.
 */
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});

module.exports = app;
