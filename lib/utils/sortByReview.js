function sortByReview(posts) {
  return posts.sort((a, b) => {
    const aScore = a.good / a.bad;
    const bScore = b.good / b.bad;
    if(isNaN(aScore) && bScore >= 1) return 1;
    if(isNaN(bScore) && aScore >= 1) return -1;
    if(isNaN(bScore) && isNaN(aScore)) return 0;
    if(aScore === Infinity && bScore === Infinity) return b.good - a.good;
    return bScore - aScore;
  });
}

module.exports = { sortByReview };
