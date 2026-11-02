function describeRating(stars) {
  if (stars >= 5) return "Masterpiece! A must-watch.";
  if (stars >= 4) return "Great movie, highly recommended.";
  if (stars >= 3) return "Decent, worth a watch if you have time.";
  if (stars >= 2) return "Below average, only for die-hard fans.";
  return "Skip this one.";
}

console.log(describeRating(4));