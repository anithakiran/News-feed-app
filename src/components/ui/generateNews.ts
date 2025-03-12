export function generateRandomNews() {
    // random data has title for news
    const HeadLines = [
      "Stock Market Hits Record Highs today ",
      "Will bitcoin and cypto currency pay major role in india",
      "New Tech jobs incressing in india",
      "Is trading investment good or bad for common man",
      "Gold Prices increseed can common buy gold in future",
      "Oil Prices Increses as More Demand in market today",
      "Sensex nifty tank over 1% amid foreign fund exodus",
      "Stock markets decline in early trade amid relentless foreign fun outflows",
      "The RBI introduced new regulations to facilitate smoother cross-border payments, further easing trade transactions",
      "Stock market ends at low rates today ",
      "Rupee ends 63 paise highger at 86.82 against U.S dollar logs highest one day gain in 2 years",
      "Sensex, Nifty fall for fourth day amid fresh U.S. traiff concerns, foreign fund outflows",
      "New tax may effect will reduce problems for common man",
    ]

    const descriptions = [
      
  "The stock market surged today with record-breaking highs, fueled by investor optimism.",
  "Bitcoin and Ethereum prices saw sharp fluctuations as investors reacted to new regulations.",
  "Apple, Google, and Microsoft announced impressive Q4 financial results, boosting market confidence.",
  "The Federal Reserve hinted at possible interest rate cuts, causing bond yields to drop sharply.",
  "Tesla's stock soared after the company revealed record-breaking EV sales for the quarter.",
  "Oil prices climbed amid geopolitical tensions and supply chain disruptions in key regions.",
  "The S&P 500 and Nasdaq reached new all-time highs as tech stocks continued to rally.",
  "Gold prices spiked as investors sought safe-haven assets amid economic uncertainty.",
  "Amazon's latest earnings report exceeded Wall Street expectations, driving the stock up 8%.",
  "Cryptocurrency markets tumbled after a major exchange faced regulatory scrutiny.",
  "The U.S. job market showed signs of slowing, raising concerns about economic growth.",
  "Elon Musk announced new AI-driven innovations at Tesla, sending the stock up 12%.",
  "The European Central Bank maintained interest rates, boosting investor confidence in European markets.",
  "China's latest economic data revealed slowing growth, impacting global markets.",
  "Google unveiled a new AI-powered search engine, sending its stock soaring.",
  "Warren Buffett's Berkshire Hathaway reported strong earnings, highlighting long-term investment strategies.",
  "The semiconductor industry rebounded after reports of increased global chip demand.",
  "Federal Reserve officials signaled a cautious approach to rate hikes, stabilizing the market.",
  "Meta (Facebook) announced a major expansion into the metaverse, boosting investor confidence.",
  "Retail sales in the U.S. surged unexpectedly, indicating strong consumer spending.",
];

  
    /*randomly genarate the images*/
    const images = [
      "https://i.ibb.co/k66DvFcv/DALL-E-2025-02-10-16-25-55-A-modern-trading-news-feed-interface-displaying-real-time-stock-market-up.webp",
      "https://i.ibb.co/cb01YSt/image-1.jpg",
      "https://i.ibb.co/b57QKSP0/DALL-E-2024-12-24-13-29-09-A-conceptual-illustration-representing-the-life-of-a-woman-who-is-a-Dev-O.webp",
      "https://i.ibb.co/ZVvy3Vy/image-1.webp",
      "https://i.ibb.co/BZPFht6/image-2.jpg",
      "https://i.ibb.co/SpGYQJZ/goldprice.jpg",
      "https://i.ibb.co/yBGYkGJn/image-1.jpg",
      "https://i.ibb.co/JwvHNtNp/image-1.webp",
      "https://i.ibb.co/MzMPPzT/image-2.jpg",
      "https://i.ibb.co/BKsJ36TK/oil.jpg",
      "https://i.ibb.co/wFr5kSRW/stockmarket.jpg",
      "https://i.ibb.co/QvRCQpFZ/tax.jpg",
      "https://i.ibb.co/Vc9dgLj1/DALL-E-2025-02-10-16-26-00-A-modern-trading-news-feed-interface-displaying-real-time-stock-market-up.webp",
    ];
  
    return Array.from({ length: 3 }, (_, i) => ({
      id: i + 1,
      title: HeadLines[i],
      image: images[i],
      description: descriptions[i], 
    }));  }
  