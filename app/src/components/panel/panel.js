import React from "react";

const Panel = () => {
	return(
		<div className="panel">
			<button className="uk-button uk-button-primary uk-margin-small-right" type="button" uk-toggle="target: #modal-open">Open
			</button>
			<button className="uk-button uk-button-primary uk-margin-small-right" type="button" uk-toggle="target: #modal-save">Publish
			</button>
			<button className="uk-button uk-button-default" type="button" uk-toggle="target: #modal-backup">Restore
			</button>
		</div>
		
	);
};

export default Panel;