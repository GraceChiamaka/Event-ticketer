// eslint-disable react-hooks/refs
"use client"
import {
	useFloating,
	useClick,
	useDismiss,
	useRole,
	useInteractions,
	FloatingOverlay,
	FloatingPortal,
} from "@floating-ui/react";
import { useState } from "react";
import styles from "./Modal.module.css"

type ModalProps = {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	children: React.ReactNode;
}

interface ModalTriggerProps {
	children: React.ReactNode;
}

interface ModalContentProps {
	children: React.ReactNode;
	className?: string;
}

export function useModal() {
	const [open, setOpen] = useState(false);

	const { refs, context } = useFloating({
		open,
		onOpenChange: setOpen,
	});

	const click = useClick(context);
	const dismiss = useDismiss(context, { outsidePressEvent: "mousedown" });
	const role = useRole(context);

	const { getReferenceProps, getFloatingProps } = useInteractions([
		click,
		dismiss,
		role,
	]);

	return {
		open,
		setOpen,
		refs,
		context,
		getReferenceProps,
		getFloatingProps,
	};
}


export function ModalTrigger({
	children,
	refs,
	getReferenceProps,
}: ModalTriggerProps & Pick<ReturnType<typeof useModal>, "refs" | "getReferenceProps">) {
	return (

		<span ref={refs.setReference} {...getReferenceProps()}>
			{children}
		</span>
	);
}

export function ModalContent({
	children,
	className = "",
	refs,
	getFloatingProps,
	open,
}: ModalContentProps &
	Pick<ReturnType<typeof useModal>, "refs" | "getFloatingProps" | "open">) {
	if (!open) return null;

	return (
		<FloatingPortal>
			<FloatingOverlay
				className={styles.modal_overlay}
				lockScroll
			>
				<div
					ref={refs.setFloating}
					className={`${styles.modal_content} ${className}`}
					{...getFloatingProps()}
				>
					{children}
				</div>
			</FloatingOverlay>
		</FloatingPortal>
	);
}