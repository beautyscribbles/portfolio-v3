import { BsFillJournalBookmarkFill } from "react-icons/bs";


type ProjectInfo = {
  name: string;
  icon: JSX.Element;
  img: string;
  stack: string[];
  source: string;
  demo: string;
  title: string;
  paragraphs: {
    [key: string]: string
  };
  
};


// Create a new Map instance
const projectInfo = new Map<string, ProjectInfo>();
const size = 30

// Add entries to the Map
projectInfo.set('bookmark', {
  name: 'Bookmark-it',
  icon: <BsFillJournalBookmarkFill className='my-3' size={size} /> as JSX.Element,
  img: "/bookmark.png",
  stack: ["TypeScript", "React JS", "Redux Toolkit", "Firebase"],
  source: "https://github.com/m-oniqu3/bookmark-it",
  demo: "https://bookmark-it.vercel.app/",
  title: "An online bookshelf",
  paragraphs: 
    {
      '1': "Bookmark-it is one of my favorite projects that I've had the pleasure of working on. It was designed for book enthusiasts like myself. As an avid reader, I found existing book storage apps lacking in design and functionality, so I decided to create my own solution.",
    
      '2': "Bookmark is a bookmarking app for readers. It provides an intuitive platform to build a personalized library with customizable shelves. The search functionality makes it easy for users to discover and add authors and books, enhancing the overall convenience for book enthusiasts.",
   
      '3': "This app was born out of my desire to have a space where I could seamlessly organize and store my growing collection of books. I wanted a user-friendly interface that resonated with fellow book lovers where we can conveniently manage our reading lists."
    },
    
    
   
  
});


projectInfo.set('natura', {
  name: 'Natura',
  icon: <BsFillJournalBookmarkFill className='my-3' size={size} />,
  img: "/natura.png",
  stack: ["React JS", "CSS Modules", "Styled Components"],
  source: "https://github.com/m-oniqu3/bookmark-it",
  demo: "https://bookmark-it.vercel.app/",
  title: "bookmarking app",
  paragraphs: 
    { '1': 'test' }
  
})


export default projectInfo;