// TBH not sure why I need to reimport the database, but I do apparently...
var db = require("../db");
const connection = require('../db.js');

module.exports = {
  //GET endpoint
  searchListings: (req, response) => {
    console.log(req.body.bedrooms);
    console.log(req.body.bathrooms);
    console.log(req.body.minPrice);
    console.log(req.body.maxPrice);
    connection.query(`SELECT * FROM listing WHERE listingBedrooms = ${req.body.bedrooms} AND
    listingBathrooms = ${req.body.bathrooms} AND (listingPrice >= ${req.body.minPrice} AND 
    listingPrice <= ${req.body.maxPrice})`, 
    function(error, results, fields) {
        response.render('./pages/Listings', { listings: results });
    });
    }
};

