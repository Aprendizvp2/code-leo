import React from "react";
import useScrollTrigger from '@mui/material/useScrollTrigger';

export default function ScrollColor(props) {
	const {
		threshold,
		bgColorBefore,
		bgColorAfter,
		textColorBefore,
		textColorAfter,
		fadeIn,
		fadeOut,
		paddingBefore,
		paddingAfter,
		children,
		fontSizeBefore,
		fontSizeAfter,
		buttonBefore,
		buttonAfter,
		imageBefore,
		...other
	} = {
		threshold: 0,
		bgColorBefore: "transparent",
		bgColorAfter: "#B91C1C",
		textColorBefore: "white",
		textColorAfter: "black",
		fadeIn: "0.3s ease-in",
		fadeOut: "0.3s ease-out",
		paddingBefore: "1rem",
		paddingAfter: "0.5rem",
		fontSizeBefore: "40px",
		fontSizeAfter: "10px",
		...props
	};

	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: threshold,
		target: props.window ? window() : undefined
	});

	return React.cloneElement(children, {
		style: {
			boxShadow: trigger ? "none" : "none",
			paddingTop: trigger ? paddingAfter : paddingBefore,
			paddingBottom: trigger ? paddingAfter : paddingBefore,
			backgroundColor: trigger ? bgColorAfter : bgColorBefore,
			color: trigger ? textColorAfter : textColorBefore,
			transition: trigger ? fadeIn : fadeOut,
			fontSizeAfter: trigger ? fontSizeAfter : fontSizeBefore
		},
		...other
	});
}