import React from "react";

type NameProps = {
  name?: string;
};

const Name: React.FC<NameProps> = ({ name }) => {
  return (
    <div className="name">
      <h1>
        Bonjour <span>{name}</span>
      </h1>
      <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
};

export default Name;
