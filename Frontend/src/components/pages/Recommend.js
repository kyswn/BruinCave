import React, { useState, useEffect } from "react";
import "../../App.css";
import RecommendationCard from "./RecommendationCard";

export default function Recommend() {
  const [state, setState] = useState({
    matchedUsers: [],
    loading: true,
  });

  useEffect(() => {
    const fetchThings = async () => {
      const _userinfo = await fetch("http://localhost:3001/recommend/5");
      const userinfojson = await _userinfo.json();
      setState({
        matchedUsers: userinfojson,
        loading: false,
      });
    };

    fetchThings();
  }, []);

  return (
    <section id="facilities">
      <div class="container">
        <div className="row card-padding">
          {Array.from(Array(state.matchedUsers.length)).map((x, i) => (
            <RecommendationCard
              name={state.loading ? "loading" : state.matchedUsers[i].user.Name}
              gender={
                state.loading
                  ? "loading"
                  : state.matchedUsers[i].userInfo.Gender
              }
              description={
                state.loading
                  ? "loading"
                  : state.matchedUsers[i].userInfo.Comment
              }
              id={
                state.loading
                  ? "loading"
                  : state.matchedUsers[i].userInfo.ID
              }
              img={state.matchedUsers[i].userInfo.ImageURL}
              hasApartment={state.matchedUsers[i].apartment !== null}
              score={state.matchedUsers[i].score}
              email={state.matchedUsers[i].user.Email}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
/*

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
 */
