$.get("data/recommendations.json", callback);
var currency = new Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP'
});

function callback(theJson) {
  var placements = theJson.placements[0];
  var items = theJson.placements[0].items;

  $(".options_header").html(placements.message.toUpperCase());

  for (var i = 0; i < items.length; i++) {
    $('#list').append(
      "<li class='thumbnail'>"+
        "<a href='" + items[i].linkURL + "'>" +
          "<img src='" + items[i].imageURL + "' alt='" + items[i].name + "' />" +
          "<span></br><strong>" + items[i].name.toUpperCase() + "</strong></span>" +
          "<span></br>" + currency.format(items[i].price) + "</span>" +
        "</a>" +
      "</li>");
  }
}
