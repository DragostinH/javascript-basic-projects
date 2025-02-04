import changeJob from "./changeJob.js";
import changeName from "./changeName.js";
import changeProfilePic from "./changeProfilePic.js";
import changeReview from "./changeReview.js";
import getRandomNumber from "./getRandomNumber.js";

const reviewPage = (() => {
  const randomBtn = document.querySelector('.random-btn');
  const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];
  let currReviewIndex = 0;

  const profilePic = document.getElementById('person-img');
  const authorName = document.getElementById('author');
  const authorJob = document.getElementById('job');
  const reviewText = document.getElementById('info');
  const leftButton = document.querySelector('.prev-btn');
  const rightButton = document.querySelector('.next-btn');


  // Onclick events for all 3 buttons:

  leftButton.onclick = () => {
    currReviewIndex--;
    if (currReviewIndex < 0) {
      currReviewIndex = reviews.length - 1;
    }
    changeProfilePic(profilePic, reviews[currReviewIndex].img);
    changeName(authorName, reviews[currReviewIndex].name);
    changeJob(authorJob, reviews[currReviewIndex].job);
    changeReview(reviewText, reviews[currReviewIndex].text);
  }


  rightButton.onclick = () => {
    currReviewIndex++;
    if (currReviewIndex > reviews.length - 1) {
      currReviewIndex = 0;
    }
    changeProfilePic(profilePic, reviews[currReviewIndex].img);
    changeName(authorName, reviews[currReviewIndex].name);
    changeJob(authorJob, reviews[currReviewIndex].job);
    changeReview(reviewText, reviews[currReviewIndex].text);
  }

  randomBtn.onclick = () =>{
    const index = getRandomNumber(reviews.length);

    changeProfilePic(profilePic, reviews[index].img);
    changeName(authorName, reviews[index].name);
    changeJob(authorJob, reviews[index].job);
    changeReview(reviewText, reviews[index].text);

  }

})();
