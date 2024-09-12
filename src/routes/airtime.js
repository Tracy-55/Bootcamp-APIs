import express from 'express';
const router = express.Router();

router.post('/', (req, res) => {
    const { usage, available } = req.body;
    const bill = usage.split(',');
    const total = bill.reduce((acc, item) => {
        if (item === 'call') {
            return acc + 2.75;
        } else if (item === 'sms') {
            return acc + 0.65;
        }
        return acc;
    }, 0);

    const remaining = available - total;

    res.json({ result: remaining >= 0 ? remaining : 'Not enough airtime' });
});

export default router;
