const Stats = {

  saveResult(result) {

    const student = localStorage.getItem("currentStudent");

    if (!student) return;

    const allResults =
      JSON.parse(localStorage.getItem("lexoraStats") || "[]");

    allResults.push({
      student,
      date: new Date().toLocaleString(),
      ...result
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
  }

};
Stats.saveResult({
  program: "בדיקה",
  correct: 10,
  wrong: 2,
  percent: 83,
  duration: 60
});
