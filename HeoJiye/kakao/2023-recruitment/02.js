function solution(cap, n, deliveries, pickups) {
  var answer = 0;

  var deliveriesSum = deliveries.reduce((acc, cur) => acc + cur);
  var pickupsSum = pickups.reduce((acc, cur) => acc + cur);

  while (deliveries.length > 0) {
    for (var i = deliveries.length - 1; i >= 0; i--) {
      if (pickups[i] <= 0 && deliveries[i] <= 0) {
        pickups.length -= 1;
        deliveries.length -= 1;
      } else break;
    }

    var store = cap;
    for (var i = deliveries.length - 1; i >= 0; i--) {
      var delivery = Math.min(store, deliveries[i]);
      deliveries[i] -= delivery;
      store -= delivery;
      deliveriesSum -= delivery;

      if (store <= 0 || deliveriesSum <= 0) break;
    }

    store = cap;
    for (var i = pickups.length - 1; i >= 0; i--) {
      var pickup = Math.min(store, pickups[i]);
      pickups[i] -= pickup;
      store -= pickup;
      pickupsSum -= pickup;

      if (store <= 0 || pickupsSum <= 0) break;
    }

    answer += deliveries.length * 2;
    //if(deliveriesSum <= 0 && pickupsSum <= 0) break;
  }

  return answer;
}
