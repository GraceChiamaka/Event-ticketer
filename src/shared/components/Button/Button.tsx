import { ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
	variant?: "default" | "secondary";
	children?: ReactNode | string | number;
}
export const Button = ({ variant = "default", children }: ButtonProps) => {
	const stylesVariant = variant === "default" ? styles.default : styles.secondary;
	return (
		<button className={`${styles.button} ${stylesVariant}`}>{children}</button>
	);
}

