const router = require('express').Router();
const controller = require('../controllers/qa.js')

router.get('/questions/:product_id', controller.getAllQuestions);
router.get('/questions/:question_id/answers', controller.getAllAnswers);
router.post('/questions/:product_id', controller.postQuestion);
router.post('/questions/:question_id/answers', controller.postAnswer);
router.put('/questions/:question_id/helpful', controller.markQuestionAsHelpful);
router.put('/questions/:question_id/report', controller.reportQuestion);
router.put('/answers/:answer_id/helpful', controller.markAnswerAsHelpful);
router.put('/answers/:answer_id/report', controller.reportAnswer);

module.exports = router;