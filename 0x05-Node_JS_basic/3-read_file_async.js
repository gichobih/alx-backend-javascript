const fs = require('fs');

/**
 * Reads a database file and counts students by field.
 * @param {string} dataPath - The path to the CSV database file.
 * @returns {Promise<void>} A promise that resolves when processing is complete.
 */
const countStudents = (dataPath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(dataPath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      try {
        const fileLines = data.trim().split('\n');
        const studentGroups = {};
        const dbFieldNames = fileLines[0].split(',');
        const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

        for (const line of fileLines.slice(1)) {
          const studentRecord = line.split(',');
          if (studentRecord.length !== dbFieldNames.length) continue; // Skip invalid lines

          const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
          const field = studentRecord[studentRecord.length - 1];

          if (!studentGroups[field]) {
            studentGroups[field] = [];
          }

          const studentEntries = studentPropNames.map((propName, idx) => [
            propName,
            studentPropValues[idx],
          ]);

          studentGroups[field].push(Object.fromEntries(studentEntries));
        }

        const totalStudents = Object.values(studentGroups).reduce(
          (sum, group) => sum + group.length,
          0
        );

        console.log(`Number of students: ${totalStudents}`);
        for (const [field, students] of Object.entries(studentGroups)) {
          const studentNames = students.map((student) => student.firstname).join(', ');
          console.log(`Number of students in ${field}: ${students.length}. List: ${studentNames}`);
        }

        resolve();
      } catch (parseError) {
        reject(new Error('Cannot load the database'));
      }
    });
  });
};

module.exports = countStudents;
