"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { generateRandomNews } from "@/components/ui/generateNews"; // Import function
import { motion } from "framer-motion";

interface NewsItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

export default function NewsFeed() {
  const [newsData, setNewsData] = useState<NewsItem[]>([]);
  const [hoveredId, setHoveredId] = useState<number | null>(null); // Track hovered news item

  // Fetch new news data on page load
  useEffect(() => {
    setNewsData(generateRandomNews());
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen text-white p-6">
      {/* Header */}
      <header className="container mx-auto flex justify-between items-center py-6">
        <motion.h1
          className="text-3xl font-bold text-zinc-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 2, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          Trading News
        </motion.h1>

        <motion.h3
          className="text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.3, delay: 0.9 }}
        >
          Refresh the page for news updates
        </motion.h3>

        <div className="flex items-center space-x-2">
          {/* Search Input */}
          <motion.input
            type="text"
            placeholder="Search news..."
            className="p-2 w-60 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          {/* Search Button */}
          <motion.button
            className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600"
            whileHover={{ scale: 1.05, opacity: 0.8 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            Search
          </motion.button>
        </div>
      </header>

      {/* News Feed */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {newsData.map((news) => (
          <motion.div
            key={news.id}
            className={`bg-gray-800 p-4 rounded-lg shadow-md transition duration-300 ${
              hoveredId === news.id ? "bg-gray-700 scale-105" : ""
            }`}
            onMouseEnter={() => setHoveredId(news.id)}
            onMouseLeave={() => setHoveredId(null)}
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative w-full h-40">
              <Image
                src={news.image}
                alt={news.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h2 className="text-xl font-semibold mt-4">{news.title}</h2>
            <p className="text-gray-400 mt-2">{news.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
