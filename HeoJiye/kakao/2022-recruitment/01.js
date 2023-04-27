function solution(id_list, report, k) {
  var result = new Array(id_list.length).fill(0);

  var report_hash = {};
  report.forEach((str) => {
    var [reporter, target] = str.split(" ");
    if (!report_hash[target]) report_hash[target] = [];
    report_hash[target].push(id_list.indexOf(reporter));
  });
  for (var [target, reporters] of Object.entries(report_hash)) {
    var uniquie_reporters = [...new Set(reporters)];
    if (uniquie_reporters.length < k) continue;
    for (var id of uniquie_reporters) {
      result[id] += 1;
    }
  }

  return result;
}
