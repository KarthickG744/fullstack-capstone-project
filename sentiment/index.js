cd ~
cd Final-Project
mkdir -p sentiment
cat > sentiment/index.js << 'EOF'
const express = require('express');
const natural = require('natural');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/analyze/:text', (req, res) => {
    const text = req.params.text;
    const analyzer = new natural.SentimentAnalyzer('English', natural.PorterStemmer, 'afinn');
    const tokenizer = new natural.WordTokenizer();
    const tokens = tokenizer.tokenize(text);
    const score = analyzer.getSentiment(tokens);

    let sentiment;
    if (score > 0) sentiment = 'positive';
    else if (score < 0) sentiment = 'negative';
    else sentiment = 'neutral';

    res.json({ sentiment });
});

app.listen(PORT, () => {
    console.log(`Sentiment analyzer running on port ${PORT}`);
});

module.exports = app;
EOF
