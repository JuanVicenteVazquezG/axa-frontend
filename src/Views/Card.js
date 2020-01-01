import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

export default function Card({ Brastlewark }) {
  const [Person, setPerson] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setPerson(Brastlewark[id]);
  }, [id]);

  const handleLookingForAFriend = (friend) => Brastlewark.findIndex((person) => (
    person.name === friend));

  /* This is a view */
  return (
    <div>
      <Link to="/">{'<<Back'}</Link>
      {Person && (
        <div>
          <h1>CHARACTER DITAIL</h1>
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
                <div key={`professions-${index + 100}`}>{profession}</div>
              ))}
            </div>
          )}
          {!Person.professions && <div>No professions known</div>}
          <h3>Friends: </h3>

          {Person.friends && (
            <div>
              {Person.friends.map((friend, index) => (
                <div key={`friends-${index + 100}`}>
                  <Link to={`/person/${handleLookingForAFriend(friend)}`} params={Brastlewark}>
                    <div>
                      {friend}
                      <img
                        style={{ width: '50px' }}
                        src={Brastlewark[handleLookingForAFriend(friend)].thumbnail}
                        alt="a friend"
                      />
                    </div>
                  </Link>
                </div>
              ))}
              {!Person.friends && <div>No friend known</div>}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
