// backend/routes/evidenceRoutes.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const { addEvidence, getEvidence, getAllEvidence } = require('../controllers/evidenceController');
const auth = require('../middleware/auth');

const upload = multer({ storage: multer.memoryStorage() });

router.post('/add', auth, upload.single('file'), addEvidence);
router.get('/:id', auth, getEvidence);
router.get('/', auth, getAllEvidence);

module.exports = router;