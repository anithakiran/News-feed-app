import type { NextConfig } from "next";


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.ibb.co"], // Allow ibb.co images
  },
};

module.exports = nextConfig;
