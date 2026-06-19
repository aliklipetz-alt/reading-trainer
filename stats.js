const Stats = {

  saveResult(result) {
    const studentName = localStorage.getItem("currentStudentName") || localStorage.getItem("currentStudent");
    const studentId = localStorage.getItem("currentStudentId") || "";

    if (!studentName) return;

    const allResults = JSON.parse(localStorage.getItem("lexoraStats") || "[]");

    allResults.push({
      student: studentName,
      studentId: studentId,
      date: new Date().toLocaleString(),
      ...result
    });

    localStorage.setItem("lexoraStats", JSON.stringify(allResults));
  },

  getAllResults() {
    return JSON.parse(localStorage.getItem("lexoraStats") || "[]");
  },

  deleteStudentStats(studentId) {
    const allResults = this.getAllResults();
    const filtered = allResults.filter(r => r.studentId !== studentId);
    localStorage.setItem("lexoraStats", JSON.stringify(filtered));
  },

  deleteAllStats() {
    localStorage.removeItem("lexoraStats");
  }

};
