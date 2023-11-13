
import React from "react";
import "./Rule.css";
import RuleItem from "./RuleComponent";

function Rule() {
	return (
		<div className="Main_Container">
			<div className="box_rule">
<span className="mainheading">Mess Rules</span>
				<div className="Ruletext">
					"In the heart of our hostel, the mess is where we come together. Let's
					make it a place of shared joy and respect for everyone."
				</div>
				<RuleItem
					number={1}
					rule="Mealtime Manners"
					description="Queue up patiently during meal times and wait your turn."
				/>
				<RuleItem
					number={2}
					rule="Clean As You Go"
					description="Clear your table and return trays and utensils after meals."
				/>
				<RuleItem
					number={3}
					rule="Respect the Staff"
					description="Be polite and respectful to the mess staff."
				/>
				<RuleItem
					number={4}
					rule="Dietary Needs" 
          description="Please Mess-president/Hostell president  Inform the mess in advance about any specific dietary requirements."
				/>
				<RuleItem
					number={5}
					rule="No Wastage"
					description="Take only what you can finish, and minimize food wastage."
				/>
				<RuleItem
					number={6}
					rule="Mobile-Free Zone"
					description="All the mess member/student Keep your phones on silent and refrain from taking calls at the dining tables."
				/>
				<RuleItem
					number={7}
					rule="Be On Time"
					description="Arrive on time for meals to avoid disruptions."
				/>
				<RuleItem
					number={8}
					rule="Line Etiquette"
					description="Form an orderly line during peak hours."
				/>
				<RuleItem
					number={9}
					rule="Feedback Matters"
					description="Provide constructive feedback to the mess management."
				/>
				<RuleItem
					number={10}
					rule="Enjoy Your Meal"
					description="Be Happy Savor your meals and enjoy the community dining experience."
				/>
        <div className='BottomText'>
				"In our mess, let's not just share meals but also create moments of joy
				and camaraderie. Your cooperation makes our dining experience
				delightful!"
        </div>
			</div>
		</div>
	);
}

export default Rule;
