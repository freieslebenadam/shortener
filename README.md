# Short.me

A front-end [Next.js](https://nextjs.org/) application for creating a short-hand alias of normal links.

## Stack

- [Supabase](https://supabase.com/) as a backend platform with SDK
- [Next.js](https://nextjs.org/) framework
- [React](https://reactjs.org/) library
- [Tailwind](https://tailwindcss.com/) for easy styling
- [Framer Motion](https://www.framer.com/motion/) animation library

## Installation

Install Node.js dependencies:
```bash
npm install
```

Configure `.env.local` with values from [Supabase](https://supabase.com/):
```ruby
NEXT_PUBLIC_SUPABASE_API_URL=your_api_url
NEXT_PUBLIC_SUPABASE_API_KEY=your_api_key
```

Run dev server locally:
```bash
npm run dev
```

Build application:
```bash
npm run build
```

Start built application:
```bash
npm start
```
