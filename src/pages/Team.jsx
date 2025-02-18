import React from "react";
import teamprofile from "../teamprofile.json";
import { Link } from "react-router-dom";

// Meet The Team page.
function MeetTheTeam() {
    return (
        <div className="custom-home py-24 sm:py-12 p-6 px-6 sm:px-6">
        <div className="px-6 lg:px-8">
            <div className="mx-auto max-w-screen lg:text-center m-9">
                <h2 className="text-center text-4xl font-bold leading-8 text-gray-900 sm:text-3xl sm:leading-9">Meet the team</h2>
                <p className="mt-6 mb-20 text-lg leading-8 text-gray-600 sm:text-base sm:leading-7">As a team of front-end web developers, we specialize in crafting visually appealing, user-friendly websites using modern technologies like HTML5, CSS3, and JavaScript, along with frameworks like React, Tailwind, and Vue.js. Our focus is on creating intuitive and responsive web interfaces with a strong emphasis on UI/UX design principles.</p>
            </div>
            <ul role="list" className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-1 sm:gap-y-16 xl:grid-cols-2 xl:col-span-2">
                {teamprofile.map((person) => (
                    <li key={person.id} className="flex flex-col sm:flex-row">
                        <img className="h-60 w-full max-w-64 rounded-2xl" src={person.image} alt={`Photo of ${person.name}`} />
                        <div className="mt-4 sm:mt-0 sm:ml-6">
                            <h3 className="text-base font-semibold leading-7 text-gray-900">{person.name}</h3>
                            <p className="text-m font-semibold leading-6 text-gray-600 mb-4">{person.occupation}</p>
                            <p className="text-sm leading-6 text-gray-600 mb-4">{person.description}</p>
                            <div className="flex justify-start">
                                <Link to={person.github} target="_blank"><img className="h-5 w-5 mr-10" src="/images/github.svg"/></Link>
                                <Link to={person.linkedin} target="_blank"><img className="h-5 w-5" src="/images/linkedin.svg"/></Link>                             
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </div>
    )
};

export default MeetTheTeam;