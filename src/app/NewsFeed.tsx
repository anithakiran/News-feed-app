"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { generateRandomNews } from "@/app/generateNews"; // Import function

interface NewsItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

export default function NewsFeed() {
  const [newsData, setNewsData] = useState<NewsItem[]>([]);

  //To Fetch new news data on page load we use this use effect hooks
  useEffect(() => {
    setNewsData(generateRandomNews());
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen text-white p-6">
      {/* it is a Header data */}
      <header className="container mx-auto flex justify-between items-center py-6">
        <h1 className="text-3xl font-bold text-zinc-300">Trading News</h1>
        <h3>Refresh the page for news updates</h3>

        {/*it is a Search Bar data */}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search news..."
            className="p-2 w-60 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600">
            Search
          </button>
        </div>
      </header>

      {/* it is a  News Feed */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {newsData.map((news) => (
          <div key={news.id} className="bg-gray-800 p-4 rounded-lg shadow-md">
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
          </div>
        ))}
      </div>
    </div>
  );
}
