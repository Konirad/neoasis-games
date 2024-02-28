import "./aboutPage.scss";

import MnJ from "../../assets/images/hanna-morris-nToQmQBuOzM-unsplash.jpg";

function About() {
  return (
    <>
      <h2 className="ourStoryPage__header">OUR STORY</h2>
      <div className="ourStoryPage__container">
        <img src={MnJ} className="ourStoryPage__img" />
        <div className="ourStoryPage__textContainer">
          <p className="ourStoryPage__text">
            Mike is an engineer and Julia works in media. They’ve enjoyed
            countless board games together over the years, often frequenting
            local board game cafes.
          </p>
          <p className="ourStoryPage__text">
            On a summer eve in 2021 the two embarked on a journey to design
            their own game and come up with the name NEOASIS meaning "a new
            escape" from their daily routines. They’re first game was “Energy
            Evolution”
          </p>
          <p className="ourStoryPage__text">
            They’re aim was to inspire players to forget about their daily
            stresses and enjoy some competition with their friends.
          </p>
          <p className="ourStoryPage__text">
            As a dynamic duo they’re imaginations can be a balancing a act. With
            more games being developed Mike & Julia strive to build exciting new
            worlds that will attract board game enthusiasts from all over the
            world.
          </p>
          <p className="ourStoryPage__text">
            At the end of the day, it would be pretty cool to know our games may
            be some of your favorites.
          </p>
        </div>
      </div>

      <p className="photoAttribution">
        <a href="https://unsplash.com/@hcmorr?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Photo by Hanna Morris on Unsplash
        </a>
      </p>
    </>
  );
}

export default About;
