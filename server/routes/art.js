var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var ArtItem = require('../models/artModel');

// gets all art portfolio items from the database
router.get('/', function(req, res){
  console.log("/ art get route hit");
  ArtItem.find({},function(err, allArtItems) {
    if(err) {
      console.log('Mongo error: ', err);
    }
    res.send(allArtItems);
  });  
});


// saves an artItem document into the database
router.post('/add', function(req, res) {
  console.log("/add artItem post route hit");
  var artItem = new ArtItem();
  artItem.title = req.body.title;
  artItem.image_url = req.body.image_url;
  artItem.images = req.body.images;
  artItem.description = req.body.description;
  artItem.long_description = req.body.long_description;

  artItem.save(function(err, savedArtItem){
  if(err){
    console.log("Mongo error:", err);
    res.sendStatus(500);
  }
  res.send(savedArtItem);
  });
});

module.exports = router;
