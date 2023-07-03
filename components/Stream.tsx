import React from "react";

const Stream = () => {
	return (
		<div className="bg-red-500 h-screen w-3/4 flex justify-center items-center">
			<iframe
				width="100%"
				height="100%"
				src="https://www.youtube.com/embed/GdvytM1thHU"
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen></iframe>
		</div>
	);
};

export default Stream;
