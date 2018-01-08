module.exports = function(app) {

  const Note = require('../models/note');

  // =====================================
  // HOME PAGE (with create note input) ==
  // =====================================
  app.get('/', function (req, res) {
    res.render('index.ejs'); // load the index.ejs file
  });

  // =====================================
  // POST TO THE NOTES DATABASE ==========
  // =====================================
  app.post('/create-note', function (req, res) {

    // console.log(req.body);

    var newNote = new Note();

    newNote.author = req.body.author;
    newNote.createdDate = req.body.createdDate;
    newNote.description = req.body.description;

    newNote.save();

    res.redirect('/');
  });

  // =====================================
  // SHOW ALL NOTES (with login links) ===
  // =====================================
  app.get('/showallnotes', function (req, res) {
    Note.find({}, function(err, notes){
      if(err)console.log(err);

      res.render('allnotes.ejs', {
        notes: notes
      }); // load the allnotes.ejs file
    })
  });
};
