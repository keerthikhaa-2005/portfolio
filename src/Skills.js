import React from 'react';

const Skills = () => {
    const skills = [
        { id: 1, name: 'JavaScript' },
        { id: 2, name: 'C programming' },
        { id: 3, name: 'Java'},
        { id: 4, name: 'Problem Solving'}
    ];

    return (
        <div className="skills">
            <h1>Skills</h1>
            <ul>
                {skills.map((skill) => (
                    <li key={skill.id}>
                        {skill.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;