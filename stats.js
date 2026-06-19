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
