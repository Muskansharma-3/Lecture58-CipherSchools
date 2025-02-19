const express = require("express");
const router = express.Router();
const bookIssueController = require("../controllers/book-issue-controller");
const { authMiddleware } = require("../middleware/auth-middleware")
const { librarianMiddleware } = require("../middleware/librarian-middleware");

router.post("/add", authMiddleware, librarianMiddleware, bookIssueController.addBookIssue)
router.get("by-student", authMiddleware, bookIssueController.getBooksIssuedByStudent)
module.exports = router;