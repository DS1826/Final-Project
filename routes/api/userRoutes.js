// const router = require("express").Router();
// const passport = require("../../config/passport");
// const User = require("../../models/user");
// const isAuthenticated = require("../config/middleware/isAuthenticated");

// router.post("/login", passport.authenticate("local", {
//     failureRedirect: "/api/users/unauthorized",
//     failureFlash: true
// }), function (req, res, next) {
//     console.log("sign in successful")
//     res.json({
//         user: req.user,
//         loggedIn: true
//     });
// });

// router.post("/signup", function (req, res, next) {
//     User.findOne({ username: req.body.username }, function (err, user) {
//         if (err) throw err;
//         if (user) {
//             console.log("user already exists")
//             return res.json("user already exists");
//         }
//         if (!user) {
//             User.findOne({ email: req.body.email }, function (err, useremail) {
//                 if (err) throw err;
//                 if (useremail) {
//                     return res.json("email is already in use")
//                 }
//                 if (!useremail) {
//                     let newUser = new User({
//                         // firstname: req.body.firstname,
//                         // lastname: req.body.lastname,
//                         email: req.body.email,
//                         // username: req.body.username,
//                         password: req.body.password
//                     })
//                     newUser.password = newUser.generateHash(req.body.password);
//                     newUser.save(function (err) {
//                         if (err) throw err;
//                         console.log("user saved!");
//                         res.redirect(307, "/api/users/login")
//                     });
//                 }
//             })
//         }
//     })
// });

// router.get("/unauthorized", function (req, res, next) {
//     res.json({
//         error: req.flash("error"),
//         message: "user not authenticated"
//     });
// });

// router.get("/profile", authMiddleware.isLoggedIn, function (req, res, next) {
//     res.json({
//         user: req.user,
//         loggedIn: true
//     });
// });

// router.get("/logout", authMiddleware.logoutUser, function (req, res, next) {
//     res.json("User logged out successfully");
// });

// router.get("/admin", authMiddleware.isAdmin, function (req, res, next) {
//     res.json({
//         user: req.user,
//         loggedIn: true
//     });
// });


// module.exports = router;