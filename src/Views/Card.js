import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function Card({ Brastlewark }) {
  const [Person, setPerson] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setPerson(Brastlewark[id]);
  }, []);

  const handleLookingForAFriend = (friend) => Brastlewark.findIndex((person) => person.name === friend);

  /* This is a view */
  return (
    <div>
      {Person && (
        <div>
          <h1>Personal Detail</h1>
          <p>{Person.name}</p>
          <img src={Person.thumbnail} alt="Personal icon" />
          <p>
            Age:
            {Person.age}
          </p>
          <p>
            Weight:
            {Person.weight}
            lb
          </p>
          <p>
            Height:
            {Person.height}
          </p>
          <p>
            Hair Color:
            {Person.hair_color}
          </p>
          <h3>Professions: </h3>
          {Person.professions && (
            <div>
              {Person.professions.map((profession, index) => (
                <div key={`profession-${index}`}>{profession}</div>
              ))}
            </div>
          )}
          {!Person.professions && <div>No professions known</div>}
          <h3>Friends: </h3>
          {!Person.friends && <div>No friends known</div>}
          {Person.friends && (
            <div>
              {Person.friends.map((friend, index) => (
                <div key={`friend-${index}`}>
                  <Link to={`/person/${handleLookingForAFriend(friend)}`}>
                    {friend}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
