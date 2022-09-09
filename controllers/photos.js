const express = require("express");
const router = express.Router();
const Photos = require("../models/photos.js");
// Remember INDUCES

// Seeding...
router.get("/seed", async (req, res) => {
  await Photos.deleteMany({});
  await Photos.create(photosData);
  res.redirect("/");
});

// Index
router.get("/", (req, res) => {
  Photos.find({}, (err, foundPhotos) => {
    res.json(foundPhotos);
  });
});

// Delete
router.delete("/:id", (req, res) => {
  Photos.findByIdAndRemove({ _id: req.params.id }, (err, deletedPhoto) => {
    res.json(deletedPhoto);
  });
});
// Update
router.put("/:id", (req, res) => {
  Photos.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    (err, updatedPhoto) => {
      res.json(updatedPhoto);
    }
  );
});
// Create
router.post('/', (req, res)=>{
  Photos.create(req.body, (err, createdPhoto)=>{
      res.json(createdPhoto);
  });
});

// Show
router.get("/:id", (req, res) => {
  Photos.find({ _id: req.params.id }, (err, foundPhoto) => {
    res.json(foundPhoto);
  });
});

module.exports = router;
