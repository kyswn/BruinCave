import React from "react";
import "../../App.css";
import RecommendationCard from "./RecommendationCard";

export default function Recommend() {
  
  return (
    <section id="facilities">
      <div class="container">
        <div className="row card-padding">
          <RecommendationCard
            name="Joe Bruin"
            major="CS"
            gender="male"
            description="I want a roommate"
            img="/images/user1.jpg"/>
          <RecommendationCard
            name="Josephine Bruin"
            major="CS"
            gender="female"
            description="I want a roommate"
            img="/images/user2.jpg"
          />
          <RecommendationCard
            name="Josephine Bruin"
            major="CS"
            gender="female"
            description="I want a roommate"
            img="/images/user3.jpg"
          />
          <RecommendationCard
            name="Josephine Bruin"
            major="CS"
            gender="female"
            description="I want a roommate"
            img="/images/user4.jpg"
          />

          <RecommendationCard
            name="Josephine Bruin"
            major="CS"
            gender="female"
            description="I want a roommate"
            img="/images/user5.jpg"
          />
          <RecommendationCard
            name="Josephine Bruin"
            major="CS"
            gender="female"
            description="I want a roommate"
            img="/images/user7.jpg"
          />
          <RecommendationCard
            name="Josephine Bruin"
            major="CS"
            gender="female"
            description="I want a roommate"
            img="/images/user6.jpg"
          />
          <RecommendationCard
            name="Josephine Bruin"
            major="CS"
            gender="female"
            description="I want a roommate"
            img="/images/user1.jpg"
          />
        </div>
      </div>
    </section>
  );
}
