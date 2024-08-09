import React from "react";
import NTF_Photo from "../Images/NTF.jpg";
const NTF = () => {
  return (
    <section className="pages coloum-set contact-holder NTF">
      <div>
        <img src={NTF_Photo} alt="NTF_Photo" className="image-object" />
      </div>
      <article className="NTF-article">
        <h2 className="NFT-title new-font">
          <span className="color">Welcome To NTS </span>
          Center for Modelling / Fashion
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quo,
          ex cupiditate pariatur itaque quasi inventore beatae, recusandae
          explicabo accusamus, nobis tempora quae suscipit esse hic fugit!
          Voluptate sequi veritatis rerum laboriosam, natus delectus quo
          possimus voluptates alias, nihil pariatur. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Fugit amet rem ut labore obcaecati
          voluptas veritatis alias velit natus! Exercitationem?
        </p>
        <p className="hours">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          repudiandae eligendi rem ex tempore consequatur laborum sed ipsa
          praesentium non!
        </p>
        <p className="hours">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui autem
          doloremque temporibus, a officia omnis veritatis ipsa dolorum ab
          mollitia?
        </p>
      </article>
    </section>
  );
};

export default NTF;
