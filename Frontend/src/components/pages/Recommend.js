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
      const _userinfo = await fetch("http://localhost:3000/recommend/1");
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
              name={state.loading ? "loading" : state.matchedUsers[0].user.Name}
              major={
                state.loading ? "loading" : state.matchedUsers[i].user.Name
              }
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
              img={`/images/user${state.matchedUsers[i].userInfo.ID}.jpg`}
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
