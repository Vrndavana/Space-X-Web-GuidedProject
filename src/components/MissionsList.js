import React from "react";

const MissionsList = props => {
  return (
    <section className="missions-list">
      {props.error ? (
        <div data-testid="error-message" className="error">{props.error}</div>
      ) : (
        <div>
          {props.missions.map(mission => (
            <div data-testid="mission-list" className="mission" key={mission.mission_id}>
              {mission.mission_name}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default MissionsList;
