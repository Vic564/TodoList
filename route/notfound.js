//som "listroute" för url som inte finns
const express = require('express');

const router = express.Router();

router.get("/*", (request, response) => {
    response.status(404).json({
        "answer": "NOT FOUND"
    });
});

router.post("/*", (request, response) => {
    response.status(404).json({
        "answer": "NOT FOUND"
    });
});

router.put("/*", (request, response) => {
    response.status(404).json({
        "answer": "NOT FOUND"
    });
});

router.delete("/*", (request, response) => {
    response.status(404).json({
        "answer": "NOT FOUND"
    });
})

module.exports = router;
