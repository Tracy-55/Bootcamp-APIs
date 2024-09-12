import express from 'express';
const router = express.Router();

let callPrice = 2.75;
let smsPrice = 0.65;

router.post('/total', (req, res) => {
    const bill = req.body.bill.split(',');
    const total = bill.reduce((acc, item) => {
        if (item === 'call') {
            return acc + callPrice;
        } else if (item === 'sms') {
            return acc + smsPrice;
        }
        return acc;
    }, 0);

    res.json({ total: total });
});

router.get('/prices', (req, res) => {
    res.json({ call: callPrice, sms: smsPrice });
});

router.post('/price', (req, res) => {
    const { type, price } = req.body;
    if (type === 'call') {
        callPrice = price;
    } else if (type === 'sms') {
        smsPrice = price;
    }
    res.json({ status: 'success', message: `The ${type} was set to ${price}` });
});

export default router;
