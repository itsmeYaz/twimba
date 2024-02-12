import { tweetsData } from "./data.js";

const tweetInput = document.querySelector("#tweet-input");
const tweetBtn = document.querySelector("#tweet-btn");

tweetBtn.addEventListener("click", () => {
  console.log(tweetInput.value);
  tweetInput.value = "";
});

function getFeedHtml() {
  let feedHtml = ``;
  for (let tweet of tweetsData) {
    feedHtml += `<div class="tweet">
      <div class="tweet-inner">
         <img src="${tweet.profilePic}" class="profile-pic">
         <div>
               <p class="handle">${tweet.handle}</p>
               <p class="tweet-text">${tweet.tweetText}</p>
               <div class="tweet-details">
                  <span class="tweet-detail">
                     ${tweet.replies.length}
                  </span>
                  <span class="tweet-detail">
                     ${tweet.likes}
                  </span>
                  <span class="tweet-detail">
                     ${tweet.retweets}
                  </span>
               </div>   
         </div>            
      </div>
   </div>`;
  }
  return feedHtml;
}
