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

var marker2 = L.marker([38.53, -121.494]).addTo(map);

marker2.bindPopup("<b>California</b><br><a href='https://example.com'>Learn more</a>");

marker2.on('mouseover', function () {
  this.openPopup();
});
marker2.on('mouseout', function () {
  this.closePopup();
});

L.marker([37.8, -122.47]).addTo(map)
  .bindPopup("<b>San Francisco</b><br><a href='https://sites.google.com/lehigh.edu/fleri-sofia-wrt-011-project-4/project-1?authuser=3' target='_blank'>Go to Project 1 page</a>");

L.marker([40.608, -75.375]).addTo(map)
  .bindPopup("<b>Lehigh University</b><br><a href='https://sites.google.com/lehigh.edu/fleri-sofia-wrt-011-project-4/project-2?authuser=3' target='_blank'>Go to Project 2 page</a>");

L.marker([32, -8]).addTo(map)
  .bindPopup("<b>Morocco</b><br><a href='https://sites.google.com/lehigh.edu/fleri-sofia-wrt-011-project-4/project-4?authuser=3' target='_blank'>Go to Project 4 Page</a>");

L.marker([38.53, -121.494]).addTo(map)
  .bindPopup("<b>California</b><br><a href='https://sites.google.com/lehigh.edu/fleri-sofia-wrt-011-project-4/project-3?authuser=3' target='_blank'>Go to Project 3 page</a>");