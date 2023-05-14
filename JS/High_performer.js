function highPerformers(students) {
    const highScorers = students.map((student) => {
      const sum = student.scores.reduce((acc, curr) => acc + curr, 0);
      const avg = sum / student.scores.length;
      return { name: student.name, average: avg };
    }).filter((student) => student.average > 90);
    
    return highScorers;
  }