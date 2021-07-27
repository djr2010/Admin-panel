import React from "react";

const Panel = () => {
	return(
		<div className="panel">
			<button className="uk-button uk-button-primary uk-margin-small-right" type="button" uk-toggle="target: #modal-open">Open
			</button>
			
			<button className="uk-button uk-button-primary uk-margin-small-right" type="button" uk-toggle="target: #modal-save">Publish
			</button>
			
			<button className="uk-button uk-button-primary uk-margin-small-right" type="button" uk-toggle="target: #modal-meta">Edit Meta
			</button>
			
			<button className="uk-button uk-button-default uk-margin-small-right" type="button" uk-toggle="target: #modal-backup">Restore
			</button>
			<button className="uk-button uk-button-danger  uk-margin-small-right" type="button" uk-toggle="target: #modal-logout">Exit
			</button>

		</div>
		
	);
};

export default Panel;