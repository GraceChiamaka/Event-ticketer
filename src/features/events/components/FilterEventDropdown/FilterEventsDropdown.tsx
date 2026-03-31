"use client";
import { CaretDownIcon, CaretUpIcon } from "@phosphor-icons/react/dist/ssr";
import styles from "./FilterDropdown.module.css";
import { useState } from "react";
import { usePopper } from "react-popper";

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

	const [referenceElement, setReferenceElement] = useState<HTMLButtonElement | null>(null);
	const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
	const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null);
	const { styles: popperStyles, attributes } = usePopper(referenceElement, popperElement, {
		placement: "bottom",
		modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
	});

	return (
		<div className={`${styles.filter_container}`}>
			<button
				className={`${styles.dropdown_trigger}`}
				onClick={() => setShowMenu(!showMenu)}
				ref={setReferenceElement}

			>
				<span>All Status </span>{showMenu ? <CaretUpIcon /> : <CaretDownIcon />}
			</button>
			{showMenu && (
				<div ref={setPopperElement} className={`${styles.dropdown_content}`} style={{ ...popperStyles.popper }} {...attributes.popper}>
					<div ref={setArrowElement} style={{ ...popperStyles.arrow, zIndex: 11, width: "24px", height: "24px", top: "-16px" }} >
						<CaretUpIcon weight="fill" size={24} />
					</div>
					<div className={`${styles.dropdown_menu}`}>
						{
							filterMenu.map(({ key, label }) => <li key={key} id={key} className={`${styles.dropdown_list_item}`}>{label}</li>)
						}

					</div>
				</div>
			)}
		</div>
	);
}


