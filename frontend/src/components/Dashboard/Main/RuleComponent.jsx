
import React from "react";
import "./Rule.css";
const RuleItem = ({ number, rule, description }) => (
	<div>
		<div className="heading">
		➡️ {rule}
		</div>
		<div className="ruleInfo">
			<p className="ruleHeading">Rule:</p>
			<p className="ruleText">{description}</p>
			<p className="whyHeading">Why:</p>
			<p className="whyText">
				Ensures an orderly and fair dining experience for all.
			</p>
		</div>
	</div>
);
export default RuleItem;
