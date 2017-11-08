$("#submit-button").click(function() {
	var querySearch = $("#search-term").val().trim();
	var recordsDisplayed = $("#records-to-retrieve").val();
	var startYear = $("#start-year").val().trim();
	var endYear = $("#end-year").val().trim()
	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	url += '?' + $.param({
  		'api-key': "3a960e275b2442f99d20ec7491243dff",
  		'q' : querySearch,
  		'begin_date' : startYear,
  		'end_date' : endYear,
	});
	$.ajax({
  		url: url,
  		method: 'GET',
	}).done(function(data) {
  		console.log(data);
  		for(i = 0; i < recordsDisplayed; i++) {
  			$("#articles-form").append('<a>' + data.response.docs[i].web_url + '</a>')
  			.append('<br>' + data.response.docs[i].snippet)
  			.append('<br><br>')
  		}

	}).fail(function(err) {
  		throw err;
	});
});

