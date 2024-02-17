const express = require("express");
const router = express.Router();
const skillsCtrl = require("../controllers/skills");

// home
router.get("/", skillsCtrl.index);
// Show form to add new skill
router.get("/new", skillsCtrl.new);
// show 1 item
router.get("/:id", skillsCtrl.show);
// get edit form
router.get("/:id/edit", skillsCtrl.edit);
// Add new skill
router.post("/", skillsCtrl.create);
// delete
router.delete("/:id", skillsCtrl.delete);
// update post
router.put("/:id", skillsCtrl.update);

module.exports = router;
