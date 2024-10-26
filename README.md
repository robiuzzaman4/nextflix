# **Nextflix - Next.js Movie Application Powered by TMDB**

## **Key Features**

- **Movie List with Infinite Scrolling**: Seamlessly browse through an extensive list of movies with infinite scrolling functionality.
- **Search Movies with Debounced Optimization**: Efficiently search for movies with debounced input to minimize API calls.
- **Beautiful Movie Details Page**: View movie detailed information in an aesthetically pleasing layout.
- **Show Movie Recommendations in Movie Details Page**: Get recommendations for similar movies on the movie details page.
- **Add/Remove Movies to/from Watchlist**: Easily manage your watchlist by adding or removing movies with a single click.
- **Dedicated Watchlist Page**: View all your watchlisted movies in one place for easy access.
- **Dark Mode**: Toggle between light and dark modes for a comfortable viewing experience.
- **Fully Responsive, Clean, and Minimal UI**: Enjoy a sleek and user-friendly interface across all devices.

## **Tech Stacks**

- **Next.js 14**
- **TypeScript**
- **Tailwind CSS**
- **Shadcn UI**

## **How to Run Locally**

1. **Clone the repository**:

   ```bash
   git clone https://github.com/robiuzzaman4/nextflix.git
   cd nextflix
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Create a `.env.local` file** based on the `.env.example` file and fill in the necessary environment variables:

   ```plaintext
   NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_api_key
   ```

4. **Run the development server**:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## **Live Demo**

Check out the live demo of the application: [https://nextflix-rz.vercel.app](https://nextflix-rz.vercel.app)

---

**Note:** I've stored watchlisted movies in `localStorage`. Next.js `server action` doesn't access `localStorage` because `server action` runs on the server side or edge runtime. This is why I can't use `server action` and `optimistic UI` for the movie watchlist add/remove feature.

However, if a database is available, I can work with `server action` and `optimistic UI` for the watchlist feature.
