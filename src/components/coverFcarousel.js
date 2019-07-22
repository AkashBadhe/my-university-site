var React = require("react");
var ReactDOM = require("react-dom");
var Coverflow = require("react-coverflow");

let fn = function () {
	/* do you want */
};

const CoverflowCarousel = props => {
	return (
		<Coverflow
			width={960}
			height={220}
			displayQuantityOfSide={2}
			navigation={false}
			enableHeading={false}
		>
			<div
				onClick={() => fn()}
				onKeyDown={() => fn()}
				role="menuitem"
				tabIndex="0"
			>
				<img
					src="http://andyyou.github.io/react-coverflow/images/album-1.png"
					alt="title or description"
					style={{ display: "block", width: "100%" }}
				/>
			</div>
			<img
				src="http://andyyou.github.io/react-coverflow/images/album-2.png"
				alt="title or description"
				data-action="http://andyyou.github.io/react-coverflow/"
			/>
			<img
				src="http://andyyou.github.io/react-coverflow/images/album-3.png"
				alt="title or description"
				data-action="http://andyyou.github.io/react-coverflow/"
			/>
			<img
				src="http://andyyou.github.io/react-coverflow/images/album-4.png"
				alt="title or description"
				data-action="http://andyyou.github.io/react-coverflow/"
			/>
			<img
				src="http://andyyou.github.io/react-coverflow/images/album-5.png"
				alt="title or description"
				data-action="http://andyyou.github.io/react-coverflow/"
			/>
			<img
				src="http://andyyou.github.io/react-coverflow/images/album-6.png"
				alt="title or description"
				data-action="http://andyyou.github.io/react-coverflow/"
			/>
		</Coverflow>
	);
};

export default CoverflowCarousel;
