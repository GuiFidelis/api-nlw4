import { Router} from 'express';
import { AnswerController } from './controller/AnswerController';
import { NpsController } from './controller/NpsController';
import { SendMailController } from './controller/SendMailController';
import { SurveysController } from './controller/SurveysController';
import { UserController } from './controller/UserController';

const router = Router();

const sendMailController = new SendMailController();
const userController = new UserController();
const surveysController = new SurveysController();
const answerController = new AnswerController();
const npsController = new NpsController();

router.post("/users", userController.create);
router.post("/surveys", surveysController.create);
router.get("/surveys", surveysController.show);
router.post("/sendMail", sendMailController.execute);
router.get("/answers/:value", answerController.execute);
router.get("/nps/:survey_id", npsController.execute);

export {router};