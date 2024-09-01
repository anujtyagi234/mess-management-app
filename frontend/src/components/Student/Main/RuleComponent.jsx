
import React from "react";
import './Rule.css'
const RuleItem = ({ number, rule, description }) => (
	<div>
		<div className="heading" style={{fontFamily:'Agbalumo'
    }} >
		➡️ {rule}
		</div>
		<div className="ruleInfo" style={{fontFamily:'Agbalumo'
    }}>
			<span className="ruleHeading">Rule:</span>
			<p className="ruleText">{description}</p>
			<span className="whyHeading">Why:</span>
			<p className="whyText">
				Ensures an orderly and fair dining experience for all.
			</p>
		</div>
	</div>
);
export default RuleItem;
