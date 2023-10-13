import usersSignUp from "../model/userModels.js";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import usersModel from "../model/userModels.js";

export default class usersController {
  static userRegistration = async (req, res) => {
    let {
      firstName,
      lastName,
      email,
      phone,
      new_password,
      confirmPassword,
      tc,
      file,
    } = req.body;

    try {
      if (
        firstName &&
        lastName &&
        email &&
        phone &&
        new_password &&
        confirmPassword &&
        tc
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
    const { email, currentPassword, tc } = req.body;
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
          if (validPassword) {
            let privatKey = process.env.JWT_SECRET_KEY;
            let payload = {
              userId: checkUser._id,
              email: email,
            };

            let token = await jsonwebtoken.sign(payload, privatKey, {
              expiresIn: "1d",
            });

            res.send({ status: "success", token });
          } else {
            res.send({
              status: "failed",
              message: "Email or password is not correct",
            });
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

  static changePassword = async (req, res) => {
    try {
      const { newPassword, confirmPassword } = req.body;
      if (newPassword && confirmPassword) {
        if (newPassword === currentPassword) {
          let salt = await bcrypt.genSalt(10);
          let newHashPassword = await bcrypt.hash(newPassword, salt);
          let updatePassword = await usersModel.findByIdAndUpdate(userId, {
            $set: { newPassword: newHashPassword },
          });
          res.send({
            status: "success",
            message: "Password updated successfully",
          });
        } else {
          res.send({ stattus: "failed", message: "Password doesn't match" });
        }
      } else {
        res.send({
          status: "Failed",
          messages: "All field is required ",
        });
      }
    } catch (error) {
      console.log("Reset Password Error >>>  ", error);
    }
  };

  static changeEmail = async (req, res) => {
    try {
      const { newEmail, email } = req.body;
      if (newEmail && email) {
        let updateEmail = await usersModel.findByIdAndUpdate(userId, {
          $set: { email: newEmail },
        });
        res.send({
          status: "failed",
          message: "New email updated successfully",
        });
      } else {
        res.send({ status: "failed", message: "All fields required" });
      }
    } catch {
      error;
    }
    {
      console.log("Email change errors occurs >>>  ", error);
    }
  };

  static changephone = async (req, res) => {
    try {
    } catch (error) {
      console.log("Phone update errors occurs >> ", error);
    }
  };
  static testController = async (req, res) => {
    res.send("test get method");
  };

  static usersDetailsUpdate = async (req, res) => {
    try {
      
      let userId = req.params;

      const { firstName, lastName, email, phone } = req.body;
      if (firstName && lastName && email && phone) {
        let userUpdates = await usersModel.findByIdAndUpdate(userId, {
          $set: { firstName, lastName, email, phone },
        });

        res.send({"status":"success", "messages":"Users Updated successfully"})
      } else {
        res.send({ status: "failed", message: "All field is required" });
      }
    } catch (error) {
      console.log("Update usersControllers errors occurs  >> ", error);
    }
  };
}
