import { ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
	variant?: "default" | "secondary";
	children?: ReactNode | string | number;
	disabled?: boolean;
	onClick?: (ev?: React.MouseEvent<HTMLButtonElement>) => void;
}
export const Button = ({ variant = "default", children, ...rest }: ButtonProps) => {
	const stylesVariant = variant === "default" ? styles.default : styles.secondary;
	return (
		<button className={`${styles.button} ${stylesVariant} `} {...rest}>{children}</button>
	);
}

