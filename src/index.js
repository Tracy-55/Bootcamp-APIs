import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

// Import routes
import wordGameRoutes from './routes/wordGame.js';
import phoneBillRoutes from './routes/phoneBill.js';
import airtimeRoutes from './routes/airtime.js';

// Use routes
app.use('/api/word_game', wordGameRoutes);
app.use('/api/phonebill', phoneBillRoutes);
app.use('/api/enough', airtimeRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

