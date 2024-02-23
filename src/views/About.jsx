import React from "react";
import { skills } from "../constants";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hola, soy {""}
        <span className=" text-orange-500 font-semibold drop-shadow">
          Tomas Aquino
        </span>
      </h1>
      <div className=" mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Full Stack Developer con una sólida formación como Diseñador Web. Mi
          enfoque equilibrado entre el diseño y el desarrollo me permite crear
          experiencias digitales cautivadoras y funcionales
        </p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text" >Mis Habilidades</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div>
              <div>
                <img 
                  src={skill.imageUrl} 
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                  />
              </div>
            </div>
            )
          )}

        </div>

      </div>
    </section>
  );
};

export default About;
