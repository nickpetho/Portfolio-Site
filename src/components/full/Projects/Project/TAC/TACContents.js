import React from 'react';

function TACContents() {
	return (
		<div className="px-6 pb-6 h-full flex flex-col space-y-5 overflow-auto">
			<div className="mb-3">
				<h1 className="text-6xl inline-block border-b-4 border-black px-16 flex justify-center">
					Tutoring Assistance Computer (TAC)
				</h1>
			</div>
			<div>
				The Tutoring Assistance Computer or TAC is an all-in-one tutor tracking software solution designed to
				effectively keep track of student and employee information for the Youngstown State University Math
				Assitance Center (MAC). I implemented SASS (CSS pre-processor) for all custom stylesheets and was in
				charge of the frontend design. I worked with two other computer science students on this project.
			</div>
			<div class="flex justify-center font-bold text-2xl">
				<div>
					<img className="pr-3 pb-3" src={require('../../../../../assets/Projects/TAC_Home.jpg')} alt="" />
					<div className="justify-center flex">TAC Home Page</div>
				</div>
				<div>
					<img
						className="pl-3 pb-3"
						src={require('../../../../../assets/Projects//TAC_Employee.jpg')}
						alt=""
					/>
					<div className="justify-center flex">TAC Administrator Page</div>
				</div>
			</div>
			<div className="flex justify-center">
				<button className="bg-gradient-to-r text-lg focus:outline-none focus:shadow-outline px-4 py-1 rounded-md bg-gradient-to-b from-macbutton-400 to-macbutton-500 text-white">
					<a href="https://github.com/kmdiogo/TAC" target="_blank" rel="noopener noreferrer">
						Code
					</a>
				</button>
			</div>
		</div>
	);
}

export default TACContents;