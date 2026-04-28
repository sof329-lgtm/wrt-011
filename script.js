var marker2 = L.marker([37.8, -122.47]).addTo(map);

marker2.bindPopup("<b>San Francisco</b><br><a href='https://example.com'>Learn more</a>");

marker2.on('mouseover', function () {
  this.openPopup();
});
marker2.on('mouseout', function () {
  this.closePopup();
});

var marker2 = L.marker([32, -8]).addTo(map);

marker2.bindPopup("<b>Morocco</b><br><a href='https://example.com'>Learn more</a>");

marker2.on('mouseover', function () {
  this.openPopup();
});
marker2.on('mouseout', function () {
  this.closePopup();
});

var marker2 = L.marker([37.83, 15.2830]).addTo(map);

marker2.bindPopup("<b>Taormina</b><br><a href='https://example.com'>Learn more</a>");

marker2.on('mouseover', function () {
  this.openPopup();
});
marker2.on('mouseout', function () {
  this.closePopup();
});

L.marker([37.8, -122.47]).addTo(map)
  .bindPopup("<b>Sicily</b><br><a href='https://sites.google.com/view/yoursite/sicily' target='_blank'>Go to Sicily page</a>");

L.marker([40.608, -75.375]).addTo(map)
  .bindPopup("<b>Palermo</b><br><a href='https://sites.google.com/view/yoursite/palermo' target='_blank'>Go to Palermo page</a>");

L.marker([32, -8]).addTo(map)
  .bindPopup("<b>Catania</b><br><a href='https://sites.google.com/view/yoursite/catania' target='_blank'>Go to Catania page</a>");

L.marker([37.83, 15.2830]).addTo(map)
  .bindPopup("<b>About Me</b><br><a href='https://sites.google.com/lehigh.edu/fleri-sofia-wrt-011-project-4/about-me?pli=1&authuser=3' target='_blank'>Go to About Me page</a>");