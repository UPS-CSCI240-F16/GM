/* GET 'home' page */
const homelist = function(req, res) {
  res.render('locations-list', { title: 'Home'});
}

/* GET 'location info' page */
const locationInfo = function(req, res) {
  res.render('location-info', { title: 'Location info'});
}

/* GET 'add review' page */
const addReview = function(req, res) {
  res.render('location-review-form', { title: 'Add review'});
}

module.exports = {
  homelist,
  locationInfo,
  addReview
}