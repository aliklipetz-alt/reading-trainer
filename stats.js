const Stats = {

  getCurrentStudent() {
    return {
      name: localStorage.getItem("currentStudentName") ||
            localStorage.getItem("currentStudent") ||
            "",
      id: localStorage.getItem("currentStudentId") || ""
    };
  },

  saveResult(result) {
    const student = this.getCurrentStudent();

    if (
      !student.name ||
      !student.id ||
      student.name.trim() === "" ||
      student.id.trim() === ""
    ) {
      alert("לא נבחר תלמיד");
      return;
    }

    const allResults =
      JSON.parse(localStorage.getItem("lexoraStats") || "[]");

    allResults.push({
      studentName: student.name,
      studentId: student.id,
      date: new Date().toLocaleString("he-IL"),
      program: result.program || "",
      correct: Number(result.correct || 0),
      wrong: Number(result.wrong || 0),
      percent: Number(result.percent || 0),
      duration: Number(result.duration || 0),
      details: result.details || {}
    });

    localStorage.setItem(
      "lexoraStats",
      JSON.stringify(allResults)
    );
  },

  getAllResults() {
    return JSON.parse(
      localStorage.getItem("lexoraStats") || "[]"
    );
  },

  getResultsByStudent(studentId) {
    return this.getAllResults()
      .filter(r => r.studentId === studentId);
  },

  deleteStudentStats(studentId) {
    const filtered =
      this.getAllResults()
        .filter(r => r.studentId !== studentId);

    localStorage.setItem(
      "lexoraStats",
      JSON.stringify(filtered)
    );
  },

  deleteAllStats() {
    localStorage.removeItem("lexoraStats");
  }

};
