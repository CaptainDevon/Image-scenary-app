const User = require("./model");
const notifier = require("node-notifier");

const signUp = async (req, res) => {
  console.log(req.body);
  try {
    const { first_name, last_name, email, phone_number, password } = req.body;
    const data = await User.findOne({ email: email });
    if (data) {
      // return res.status(500).json("Email already Registered");
      notifier.notify("Email already registered");
      return;
    }
    const user = new User({
      first_name,
      last_name,
      email,
      phone_number,
      password,
    });
    const response = await user.save();
    console.log(response);
    // if(response.ok){
    // return res.status(200).json("Registered Successfully");
    notifier.notify("Registered Successfully");
    res.redirect("/");
    return;
    // }
    // else{
    //     // return res.status(400).json("Some error");
    //     notifier.notify("Some error");
    //     return
    // }
  } catch (err) {
    console.log(err);
    return;
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const response = await User.findOne({ email: email });
    const data = response;
    if (data) {
      if (password == data.password) {
        // console.log("Logged In");
        // return res.status(200).json("Email already Registered");
        notifier.notify("Logged In Successfully");
        res.redirect("/home");
        return;
      } else {
        notifier.notify("Invalid Password");
        // res.redirect("/");
        return;
      }
    } else {
        notifier.notify("Email not found");
        return;
    //   return res.status(404).json("Email not found");
    }
  } catch (err) {
    console.log(err);
    return
  }
};

module.exports = { signUp, login };
