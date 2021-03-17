const express = require("express");
const router = express.Router();
const { User } = require("../models/User");
const { Twit } = require("../models/Twit");

const { auth } = require("../middleware/auth");

//=================================
//             User
//=================================

router.get("/auth", auth, (req, res) => {
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    username: req.user.username,
    lastname: req.user.lastname,
    role: req.user.role,
    image: req.user.image,
    bio: req.user.bio,
    birthday: req.user.birthday,
  });
});

router.post("/register", (req, res) => {
  const user = new User(req.body);

  user.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});
router.get("/bringAllTwits", (req, res, next) => {
  Twit.find()
    .limit(50)
    .then(function (twits) {
      res.json(twits);
    });

  // res.status(200).json({

  //     message: "hi",
  // });
});
router.get("/bringAllPersonalTwits", (req, res, next) => {
    
    const query = { "username": "test"};

    return Twit.find(query)
      .then(result => {
        if(result) {
          console.log(`Successfully found document: ${result}.`);
          res.json(result);
        } else {
          console.log("No document matches the provided query.");
        }
        return result;
      })
      .catch(err => console.error(`Failed to find document: ${err}`));
  });

router.post("/sendTwit", (req, res) => {
  const twit = new Twit(req.body);

  twit.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

router.post("/sendProfileSettings", (req, res) => {
  const user = new User(req.body);
  var myquery = { email: req.body.email }; //aliye sor _id: req.user.id
  var newvalues = {
    $set: {
      bio: req.body.bio,
      birthday: req.body.birthday,
      username: req.body.username,
    },
  };

  User.updateOne(myquery, newvalues, function (err, res) {
    if (err) throw err;
    console.log("user data updated succesfully");
    console.log(res);
  });
});
router.get("/getProfilePageData", function (req, res) {
    res.status(200).json({
        message: "hi",
      });
  console.log("profile page route is working")
//   User.findOne({ username: req.params.username }, async (err, user) => {
//     // if (err) {
//     //   return res.json({ error: "generic error" });
//     // }
//     Twit.find({ email: user.email }, function (err, twits) {
//       console.log("it works well");

   
      //res.json({
      //  ...user.settings,
        //   email: user.email,
        //   username: user.username,
        //   country: user.country,
        //   birthday: user.birthday,
        //   bio: user.bio,
        //   posts: posts,
     // });
//     });
//   });
});
router.post("/login", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user)
      return res.json({
        loginSuccess: false,
        message: "Auth failed, email not found",
      });

    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({ loginSuccess: false, message: "Wrong password" });

      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        res.cookie("w_authExp", user.tokenExp);
        res.cookie("w_auth", user.token).status(200).json({
          loginSuccess: true,
          userId: user._id,
        });
      });
    });
  });
});

router.get("/logout", auth, (req, res) => {
  User.findOneAndUpdate(
    { _id: req.user._id },
    { token: "", tokenExp: "" },
    (err, doc) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).send({
        success: true,
      });
    }
  );
});

module.exports = router;
