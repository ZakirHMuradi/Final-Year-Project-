import React from "react";

const StreamlitEmbed = () => {
	return (
		<div className='w-full h-screen'>
			<iframe
				src='https://ai-predict.streamlit.app'
				title='Streamlit App'
				width='100%'
				height='100%'
				style={{ border: "none" }}
			/>
		</div>
	);
};

export default StreamlitEmbed;
