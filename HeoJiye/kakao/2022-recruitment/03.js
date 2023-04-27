function solution([baseTime, baseFee, cntTime, cntFee], records) {
  var paper = {};
  var parking = {};

  for (var record of records) {
    var [time, carN, move] = record.split(" ");
    if (move === "IN") {
      var [hour, minute] = time.split(":").map(Number);
      parking[carN] = hour * 60 + minute;
    } else if (move === "OUT") {
      var [hour, minute] = time.split(":").map(Number);
      var outTime = hour * 60 + minute;
      var inTime = parking[carN];
      parking[carN] = null;

      var spendTime = outTime - inTime;
      if (!paper[carN]) paper[carN] = 0;
      paper[carN] += spendTime;
    }
  }
  for (var [carN, inTime] of Object.entries(parking)) {
    if (inTime === null) continue;
    var outTime = 23 * 60 + 59;
    var spendTime = outTime - inTime;

    if (!paper[carN]) paper[carN] = 0;
    paper[carN] += spendTime;
  }

  var result = [];
  for (var [key, value] of Object.entries(paper)) {
    var fee =
      baseFee + Math.ceil(Math.max(0, value - baseTime) / cntTime) * cntFee;
    result.push([key, fee]);
  }
  result.sort((a, b) => a[0] - b[0]);
  return result.map((r) => r[1]);
}
