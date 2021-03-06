import React, { useState, useEffect } from "react";
import "../../App.css";
import RecommendationCard from "./RecommendationCard";
import store from "../../Store/index";
export default function Recommend() {
  const [state, setState] = useState({
    matchedUsers: [],
    loading: true,
  });
  //const [login, setLogin] = useState(false)

  useEffect(() => {
    const fetchThings = async () => {
      let id = store.getState().id;
      if (id != 0) {
        console.log(id);
        const _userinfo = await fetch(`http://localhost:3000/recommend/${id}`);
        const userinfojson = await _userinfo.json();
        setState({
          matchedUsers: userinfojson,
          loading: false,
        });
      } else {
        if (window.confirm("Please login to access your recommendation.")) {
          window.location.href = "http://localhost:3001/login";
        }
      }
    };

    fetchThings();
  }, []);

  return (
    <section id="facilities">
      <div class="container">
        <div className="row card-padding">
          {Array.from(Array(state.matchedUsers.length)).map((x, i) => (
            <RecommendationCard
              name={
                state.loading
                  ? "loading"
                  : state.matchedUsers[i] && state.matchedUsers[i].user.Name
              }
              gender={
                state.loading
                  ? "loading"
                  : state.matchedUsers[i] &&
                    state.matchedUsers[i].userInfo.Gender
              }
              description={
                state.loading
                  ? "loading"
                  : state.matchedUsers[i] &&
                    state.matchedUsers[i].userInfo.Comment
              }
              id={
                state.loading
                  ? "loading"
                  : state.matchedUsers[i] && state.matchedUsers[i].userInfo.ID
              }
              img={
                state.matchedUsers[i] && state.matchedUsers[i].userInfo.ImageURL
              }
              hasApartment={
                state.matchedUsers[i] &&
                state.matchedUsers[i].apartment !== null
              }
              score={state.matchedUsers[i] && state.matchedUsers[i].score}
              email={state.matchedUsers[i] && state.matchedUsers[i].user.Email}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
