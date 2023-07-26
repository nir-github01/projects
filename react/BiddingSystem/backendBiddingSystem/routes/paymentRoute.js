import  express  from "express";
import {checkout} from "../controllers/payCheckoutController.js";
import { paymentVerification } from "../controllers/payVerifyController.js";
 
const router = express.Router();

router.route("/checkout").post(checkout);
router.route("/paymentverification").post(paymentVerification);

export default router;