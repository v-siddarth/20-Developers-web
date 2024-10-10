import React from "react";
import { FaUserCircle } from 'react-icons/fa'; // Using FontAwesome or similar for avatars

const TeamAreaThree = () => {
  const team_members = [
    {
      title: "Mr. Siddarth Gadge",
      designation: "CEO, Co-founder",
    },
    {
      title: "Mr. Aadarsh Mane",
      designation: "CTO, Co-founder",
    },
    {
      title: "Mr. Karan Bhanushali",
      designation: "Marketing Head",
    },
    {
      title: "Mr. Nikhil Devkule",
      designation: "Social Media Manager",
    },
    {
      title: "Mr. Harsh Mate",
      designation: "MERN Developer",
    },
    {
      title: "Ms. Prachi Mate",
      designation: "Financial Executive",
    },
  ];

  return (
    <section className="team-area-two pt-110 pb-100">
      <div className="container">
        <div className="row justify-content-center">
          {team_members.map((member, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-10">
              <div className="team-item-hover text-center p-4 border rounded">
                <FaUserCircle size={80} color="#888" /> {/* Using avatar icon */}
                <h4 className="mt-3">{member.title}</h4>
                <p>{member.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamAreaThree;
