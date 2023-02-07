const TWITTER_FOLLOWERS = 120000;
const YOUTUBE_SUBSCRIBERS = 4100000;
const FACEBOOK_FOLLOWERS = 300000;

const STEPS_DENOMINATOR = 321;

const twitterPublicP = document.querySelector('#twitter-followers');
const youtubePublicP = document.querySelector('#youtube-subscribers');
const facebookPublicP = document.querySelector('#facebook-followers');


function incrementCounters() {

  const twitterStep = parseInt(TWITTER_FOLLOWERS / STEPS_DENOMINATOR);
  const youtubeStep = parseInt(YOUTUBE_SUBSCRIBERS / STEPS_DENOMINATOR);
  const facebookStep = parseInt(FACEBOOK_FOLLOWERS / STEPS_DENOMINATOR);

  let twitterCount = 0, youtubeCount = 0, facebookCount = 0, iterationsCount = 0;

  const interval = setInterval(() => {
    twitterPublicP.innerHTML = twitterCount < TWITTER_FOLLOWERS ? twitterCount : TWITTER_FOLLOWERS;
    youtubePublicP.innerHTML = youtubeCount < YOUTUBE_SUBSCRIBERS ? youtubeCount : YOUTUBE_SUBSCRIBERS;
    facebookPublicP.innerHTML = facebookCount < FACEBOOK_FOLLOWERS ? facebookCount : FACEBOOK_FOLLOWERS;
    twitterCount += twitterStep;
    youtubeCount += youtubeStep;
    facebookCount += facebookStep;
    iterationsCount++;
    if (iterationsCount > STEPS_DENOMINATOR + 1)
      clearInterval(interval);
  }, 1);

}


document.addEventListener('DOMContentLoaded', incrementCounters);
