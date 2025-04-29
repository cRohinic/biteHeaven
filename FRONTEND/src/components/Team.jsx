import React from "react";
import {data} from '../../src/restApi.json'
const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
        <h1 className="heading text-4xl font-bold mb-6 text-yellow-600 relative">
  <span className="text-yellow-500"> OUR TEAM</span>
  <span className="block w-24 h-1 bg-yellow-500 mx-auto mt-4"></span>
</h1>
          <p>
          Meet the masterminds behind the magic — our team, the best in the business.
          </p>
        </div>
        <div className="team_container">
          {data[0].team.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.name} />
                <h3>{element.name}</h3>
                <p>{element.designation}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;