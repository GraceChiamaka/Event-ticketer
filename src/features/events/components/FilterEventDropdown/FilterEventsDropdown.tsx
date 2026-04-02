"use client";
import { CaretDownIcon, CaretUpIcon } from "@phosphor-icons/react/dist/ssr";
import styles from "./FilterDropdown.module.css";
import { useState } from "react";
import {
	useFloating,
	useClick,
	useDismiss,
	useInteractions,
	offset,
	flip,
	shift,
	FloatingPortal,
} from "@floating-ui/react";

const filterMenu = [
	{
		key: "ready",
		label: "Ready"
	},
	{
		key: "draft",
		label: "Draft"
	},
	{
		key: "live",
		label: "Live"
	},
	{
		key: "scheduled",
		label: "Scheduled"
	},
	{
		key: "completed",
		label: "Completed"
	},
]

export const FilterEventsDropdown = () => {
	const [showMenu, setShowMenu] = useState(false);
	const { refs, floatingStyles, context } = useFloating({
		open: showMenu,
		onOpenChange: setShowMenu,
		placement: "bottom",
		middleware: [offset(0), flip(), shift()],
	});
	const click = useClick(context);
	const dismiss = useDismiss(context);
	const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss]);


	return (
		<div className={`${styles.filter_container}`}>
			<button
				className={`${styles.dropdown_trigger}`}

				ref={refs.setReference}
				{...getReferenceProps()}

			>
				<span>All Status </span>{showMenu ? <CaretUpIcon /> : <CaretDownIcon />}
			</button>
			{showMenu && (
				<FloatingPortal>
					<div
						// eslint-disable-next-line react-hooks/refs
						ref={refs.setFloating}
						className={styles.dropdown_content}
						style={floatingStyles}
						{...getFloatingProps()}
					>
						<div className={`${styles.dropdown_menu}`}>
							{
								filterMenu.map(({ key, label }) => <li key={key} id={key} className={`${styles.dropdown_list_item}`}>{label}</li>)
							}

						</div>
					</div>
				</FloatingPortal>
			)
			}
		</div >
	);
}


