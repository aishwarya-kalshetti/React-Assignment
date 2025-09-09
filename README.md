
# React-Assignment


**Project Structure**

react-assignment/
│── public/
│   └── images/              
│
│── src/
│   ├── assets/              
│   ├── components/
│   │   ├── CineFeed/
│   │   │   ├── PostCard.tsx
│   │   │   └── Feed.tsx
│   │   ├── FlickList/
│   │   │   ├── MovieCard.tsx
│   │   │   ├── Collection.tsx
│   │   │   └── Gallery.tsx
│   │   ├── MovieNightPicker/
│   │   │   ├── FilterControls.tsx
│   │   │   └── MovieList.tsx
│   │   └── common/
│   │       └── Navbar.tsx
│   │
│   ├── data/
│   │   ├── cineFeedData.ts
│   │   ├── flickListData.ts
│   │   └── movieNightData.ts
│   │
│   ├── pages/
│   │   ├── CineFeedPage.tsx
│   │   ├── FlickListPage.tsx
│   │   └── MovieNightPage.tsx
│   │
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── tailwind.css
│   └── react-app-env.d.ts
│
│── package.json
│── tsconfig.json
│── README.md


The project consists of three main sections: **CineFeed**, **FlickList**, and **Movie Night Picker**.  
You can easily switch between these sections using the **Navbar**, where each name links directly to its respective page.


**Sections**

**1️. CineFeed**

**Problem Statement:**
Movie fans often want to share quick thoughts, reviews, or reactions about films in a social, feed-like experience.

**Features:**
1. A feed of posts with user thoughts and reactions.
2. Each post card displays username, avatar, movie poster, and text.
3. Interactions (likes/comments) can be added.
4. Showcases component reusability and feed-based UI design.

**ScreenShot**
<img width="937" height="901" alt="image" src="https://github.com/user-attachments/assets/f15fdfd9-d398-4326-b965-6b5349ec7f7f" />



**2️. FlickList**

**Problem Statement:**
Users get overwhelmed by the endless number of movies. This section provides curated collections to help them choose based on genres or themes.

**Features:**

1. Collection Gallery: Curated lists like Top Sci-Fi, 80s Classics, Fantasy Epics.
2. MovieCard Component: Displays movie poster, title, and rating.
3. Collection Component: Groups multiple MovieCards together.
4. State Management: Users can select a collection to filter the displayed movies.

**Screenshot:**
<img width="787" height="954" alt="image" src="https://github.com/user-attachments/assets/ad693adc-1fa7-47cd-a216-bf6a97f979ef" />



**3️. Movie Night Picker**

**Problem Statement:**
Choosing a movie for a night in can be tough. This tool filters movies based on genre or mood to simplify the decision.

**Features:**

1. Filter Controls: Dropdown/buttons for genres like Comedy, Action, Romance.
2. Movie List: Updates dynamically based on selected filters.
3. State Management: Uses useState to manage filters and re-render movies.
4. Perfect example of interactive filtering UI.

**Screenshot:**
<img width="1020" height="966" alt="image" src="https://github.com/user-attachments/assets/e98d8c8b-8078-48ff-bc9f-63c57e2465d9" />



**Tech Stack**

React (with TypeScript)
Tailwind CSS (for styling)
React Router (for navigation between projects)


**Getting Started**

**Clone the repo**

git clone https://github.com/aishwarya-kalshetti/react-assignment.git
cd react-assignment

**Install dependencies**

npm install

**Run the project**

npm start

**Open in browser**

http://localhost:3000


**Summary**

CineVerse combines three distinct UI projects into one:

**CineFeed →** A social-style feed for movie lovers.
**FlickList →** A curated collection browser.
**Movie Night Picker →** A filtering tool to help decide what to watch.

This project is a great example of React component design, props usage, and state management.

