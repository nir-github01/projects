import usersSignUp from "../model/userModels.js";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";

export default class usersController {
  static userRegistration = async (req, res) => {
    let {
      firstName,
      lastName,
      email,
      phone,
      new_password,
      confirmPassword,
      file,
    } = req.body;

    try {
      if (
        firstName &&
        lastName &&
        email &&
        phone &&
        new_password &&
        confirmPassword
      ) {
        let checkOldUser = await usersSignUp.findOne({ email });
        console.log("checkOld User  >>>", checkOldUser);
        if (checkOldUser) {
          res.send({
            status: "failed",
            message: "User already exist",
          });
        } else {
          if (new_password === confirmPassword) {
            //Password Hashing
            let salt = await bcrypt.genSalt(10);
            let hashPassword = await bcrypt.hash(new_password, salt);

            let user = new usersSignUp({
              firstName,
              lastName,
              email,
              phone,
              new_password: hashPassword,
            });
            let saveUser = await user.save();

            //  JWT Token
            let signUpUser = await usersSignUp.findOne({ email });
            let payload = {
              userId: signUpUser._id,
              email: email,
            };
            let secretKey = process.env.JWT_SECRET_KEY;
            let token = jsonwebtoken.sign(payload, secretKey, {
              expiresIn: "5d",
            });
            res.send({ saveUser, token });
          } else {
            res.send({
              status: "failed",
              message: "Passowrd and confirm password doesnot match",
            });
          }
        }
      } else {
        res.status(404).send({
          status: "failed",
          message: "All field is required",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  static userSignIn = async (req, res) => {
    const { email, currentPassword } = req.body;
    try {
      if (email && currentPassword) {
        let checkUser = await usersSignUp.findOne({ email });

        if (checkUser) {
          let validPassword = await bcrypt.compare(
            currentPassword,
            checkUser.new_password
          );
          console.log("compare Password  >> ", validPassword);

          //JWT token
          if(validPassword){
          let privatKey = process.env.JWT_SECRET_KEY;
          let payload = {
            userId: checkUser._id,
            email: email,
          };
          
          let token = await jsonwebtoken.sign(payload, privatKey, {
            expiresIn: "1d",
          });

          res.send({"status":"success", token});
        }else{
          res.send({status:"failed", message:"Email or password is not correct"})
        }
        } else {
          res.send({
            status: "failed",
            message: "User doesnot exist",
          });
        }
      } else {
        res.send({
          status: "failed",
          message: "All field required",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  static testController = async (req, res) => {
    res.send("test get method");
  };
}
