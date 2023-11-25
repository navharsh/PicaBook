# PicaBook: A Social Media Platform built with Next.js, Tailwind CSS, and Firebase

Welcome to PicaBook, a modern and sleek social media platform that allows users to connect, share posts, and explore content from others. This project is built using the Next.js framework for the frontend, Tailwind CSS for styling, and Firebase for the backend infrastructure.

## Features

- **User Authentication:** Secure user authentication powered by Firebase Authentication. Users can sign up, log in, and enjoy a personalized experience.

- **Feed Interaction:** Users can create, edit, and delete their posts. The feed dynamically updates to showcase the latest posts from friends and the community.

- **User Profiles:** Explore other users' profiles to view their posts, follow them, and stay updated on their activities.

- **Real-time Updates:** Thanks to Firebase's real-time database, users experience seamless updates to the feed and notifications in real-time.

## Technologies Used

- **Next.js:** A React framework for building server-side rendered and statically generated web applications.

- **Tailwind CSS:** A utility-first CSS framework for building modern and responsive designs.

- **Firebase:** A comprehensive platform by Google for building web and mobile applications, providing authentication, database, and hosting services.

## Getting Started

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/pica-book.git
   ```

2. **Navigate to Project Directory:**
   ```bash
   cd pica-book
   ```

3. **Install Dependencies:**
   ```bash
   npm install
   ```

4. **Set up Firebase:**
   - Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Obtain your Firebase configuration (apiKey, authDomain, projectId, etc.).
   - Replace the placeholder values in the project's configuration file (`src/firebase/config.js`) with your Firebase configuration.

5. **Run the Application:**
   ```bash
   npm run dev
   ```

6. **Open in Browser:**
   Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## Project Structure

- **`/pages`:** Contains the Next.js pages for different routes.
- **`/components`:** Reusable React components used throughout the application.
- **`/styles`:** Styling files, including Tailwind CSS configuration.
- **`/firebase`:** Firebase configuration and utility functions.

## Contributing

We welcome contributions to make PicaBook even better! Please refer to the [CONTRIBUTING.md]() file for guidelines.

## License

This project is licensed under the MIT License - see the [LICENSE.md]() file for details.

## Acknowledgments

- Hat tip to anyone whose code was used.
- Inspiration: Facebook, for setting the standard in social media platforms.

Enjoy connecting with PicaBook! 📸
