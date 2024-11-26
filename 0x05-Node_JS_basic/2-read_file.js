const fs = require('fs');

const countStudents = (dataPath) => {
  try {
    // Read and validate file
    const fileData = fs.readFileSync(dataPath, 'utf-8').trim();
    if (!fileData) throw new Error('Cannot load the database');
    const fileLines = fileData.split('\n');

    const headers = fileLines[0].split(','); // Extract column headers
    const studentProperties = headers.slice(0, headers.length - 1); // All except the last column
    const studentGroups = {};

    // Process each line except the header
    for (const line of fileLines.slice(1)) {
      const studentRecord = line.split(',');
      if (studentRecord.length !== headers.length) continue; // Skip invalid records

      const studentData = Object.fromEntries(
        studentProperties.map((prop, idx) => [prop, studentRecord[idx]])
      );
      const field = studentRecord[studentRecord.length - 1];

      if (!studentGroups[field]) studentGroups[field] = [];
      studentGroups[field].push(studentData);
    }

    // Calculate and print results
    const totalStudents = Object.values(studentGroups).reduce((sum, group) => sum + group.length, 0);
    console.log(`Number of students: ${totalStudents}`);
    for (const [field, group] of Object.entries(studentGroups)) {
      const studentNames = group.map((student) => student.firstname).join(', ');
      console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
