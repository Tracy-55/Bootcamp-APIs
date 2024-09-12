import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    const sentence = req.query.sentence || '';
    const words = sentence.split(' ');
    const longestWord = Math.max(...words.map(word => word.length));
    const shortestWord = words.reduce((a, b) => a.length <= b.length ? a : b);
    const sum = sentence.replace(/\s+/g, '').length;

    res.json({
        longestWord: longestWord,
        shortestWord: shortestWord,
        sum: sum
    });
});

export default router;
