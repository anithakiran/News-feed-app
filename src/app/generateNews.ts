export function generateRandomNews() {
    // random data has title for news
    const titles = [
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
      title: titles[i],
      image: images[i],
      description: descriptions[i], 
    }));  }
  