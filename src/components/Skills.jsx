import "../styles/Skills.css"; 

function Skills() { 
const skills = [ 
{ name: "HTML5", level: "Advanced" },
{ name: "CSS3", level: "Advanced" },
{ name: "JavaScript", level: "Advanced" },
{ name: "React", level: "Intermediate" }, 
{ name: "Node.js", level: "Intermediate" }, 
{ name: "Express.js", level: "Intermediate" }, 
{ name: "MongoDB", level: "Intermediate" }, 
{ name: "MySQL", level: "Intermediate" }, 
{ name: "Python", level: "Advanced" }, 
{ name: "Java", level: "Advanced" }, 
{ name: "C++", level: "Advanced" }, 
{ name: "C#", level: "Intermediate" }, 
{ name: "WordPress", level: "Advanced" }, 
{ name: "Git & GitHub", level: "Intermediate" }, 
{ name: "VS Code", level: "Advanced" }, 
{ name: "Canva", level: "Advanced" } 
]; 
return (
   <section className="skills" id="skills"> 
     <h2>My Skills</h2> 
     
     <div className="skills-grid"> 
     {skills.map((skill) => ( 
      <div className="skill-card" key={skill.name}> 
       <h3>{skill.name}</h3> 
       <p>{skill.level}</p> 
      </div> 
    ))} 
  </div> 
</section> 
 );
} 
export default Skills;