const introVideo = document.getElementById("introVideo");
const mainContent = document.getElementById("mainContent");
const mainImage = document.getElementById("mainImage");

const books = document.querySelectorAll('.book');
const bookContainer = document.getElementById('bookAnimationContainer');
const bookVideo = document.getElementById('bookAnimation');
const bookStoryImage = document.getElementById('bookStoryImage');
const closeBook = document.getElementById('closeBook');
const blankBookImage = document.getElementById('blankBookImage');


let imageLoaded = false;
let videoEnded = false;

// Preload main image
const preloader = new Image();
preloader.src = mainImage.src;
preloader.onload = () => {
  imageLoaded = true;
  maybeShowMain();
};

bookStoryImage.style.display = "block";

/* Reset animation */
bookStoryImage.style.animation = "none";
void bookStoryImage.offsetHeight;

/* Re-trigger with new image */
bookStoryImage.style.animation = "storyReveal 2.5s ease forwards";


introVideo.addEventListener("ended", () => {
  videoEnded = true;
  maybeShowMain();
});

function maybeShowMain() {
  if (imageLoaded && videoEnded) {
    mainContent.style.opacity = "1";
    introVideo.style.display = "none";
  }
}

// Map each book to its story image
const storyImages = {
  1: 'images/story1.png',
  2: 'images/story2.png',
  3: 'images/story3.png',
  4: 'images/story4.png',
  5: 'images/story5.png',
  6: 'images/story6.png',
  7: 'images/story7.png',
  8: 'images/story8.png',
  9: 'images/story9.png',
  10: 'images/story10.png',
  11: 'images/story11.png',
  12: 'images/story12.png',
  13: 'images/story13.png',
  14: 'images/story14.png',
  15: 'images/story15.png',
  16: 'images/story16.png',
  17: 'images/story17.png',
  18: 'images/story18.png',
  19: 'images/story19.png',
  20: 'images/story20.png',
  21: 'images/story21.png',
  22: 'images/story22.png',
  23: 'images/story23.png',
  24: 'images/story24.png'
};

// Click book
books.forEach(book => {
  book.addEventListener('click', () => {
    const day = book.getAttribute('data-day');

    mainContent.style.display = 'none';
    bookContainer.style.display = 'block';

    bookVideo.style.display = 'block';
    bookStoryImage.style.display = 'none';
    closeBook.style.display = 'none';

    bookVideo.src = 'videos/zoom_to_book.mp4';
    bookVideo.currentTime = 0;
    bookVideo.play();

    bookVideo.onended = () => {
bookVideo.style.display = 'none';

/* Show blank book under story */
blankBookImage.style.display = 'block';

/* Load story image */
bookStoryImage.src = storyImages[day];
bookStoryImage.style.display = 'block';

/* Reset + trigger reveal animation */
bookStoryImage.style.animation = "none";
void bookStoryImage.offsetHeight;
bookStoryImage.style.animation = "storyReveal 2.5s ease forwards";

/* Show close button */
closeBook.style.display = 'block';

    };
  });
});

// Close button
closeBook.addEventListener('click', () => {
  bookContainer.style.display = 'none';
  closeBook.style.display = 'none';
  bookVideo.style.display = 'block';

  blankBookImage.style.display = 'none';
  bookStoryImage.style.display = 'none';

  mainContent.style.display = 'block';
});

