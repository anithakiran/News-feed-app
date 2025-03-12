This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

Explanation of code

**\*\*\*\***\*\*\***\*\*\*\*** newsfeed **\*\***\*\***\*\***

- "use client" ---> indicates components should be render has client
- useState ---> to store data with in individual components
- useEffect ---> to perform action like http requests (or) working with browser API
- Image ---> component or tool used to optimize for better display
- generateRandomNews ---> a file with random dummy data for project to work.
- interface ---> name: NewsItems attributes like id,title,description and image
- function ---> name NewsFeed, usestate to stoore newsdata in array initially array will be empty, useEffect calls gemerateaRandomnews and updates it.
- <Header> ---> contains projec name, searchbar and piece of text
- gird layout ---> to display image and news
  Grid Layout (grid-cols-1 sm:grid-cols-2 md:grid-cols-3)
  Mobile: 1 column
  Tablet: 2 column
  Desktop: 3 column
- Mapping newsData
  Each news item is inside a card (div.bg-gray-800).
- News Card Components
  Image (<Image> component)
  Uses Next.js <Image> for better performance.
  layout="fill" and objectFit="cover" ensure responsive images.
  Title (<h2>)
  Description (<p>)

\***\*\*\*\*\*\*\*** random data file \***\*\*\*\*\***\*\*\*\***\*\*\*\*\***
function ---> name-generateRandomNews
array - name : headlines ---> contains headlines data - name : description ---> contains summeries for headline data

- name : image ---> src of the imges
  random-generating

- Array.from({ length: 3 }) → Creates an array of 3 elements.
- (\_, i) => {} → Loops through indices (0,1,2) and returns an object.
- Picks a title, image, and description for each news item.
- Final Output: A list of 3 news objects with an id, title, image, and description.

**\*\*\*\***\*\***\*\*\*\***page.tsx**\*\***\*\*\***\*\***
we call the newsfeed component here
