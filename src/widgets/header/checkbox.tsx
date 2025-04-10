"use client"
import React, { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import s from "./index.module.scss"

const Checkbox = () => {
	const [checked, setChecked] = useState(false)
	const pathname = usePathname()

	useEffect(() => {
		document.body.style.overflow = checked ? "hidden" : "auto"
	}, [checked])

	useEffect(() => {
		setChecked(false)
	}, [pathname])

	return (
		<>
			<input
				id='menu-toggle'
				type='checkbox'
				className={s.MenuToggle}
				checked={checked}
				onChange={(e) => setChecked(e.target.checked)}
			/>
			<label htmlFor='menu-toggle' className={s.MenuToggleLabel}>
				<div className={s.MenuIcon}>
					<span className={s.MenuIconLine}></span>
					<span className={s.MenuIconLine}></span>
					<span className={s.MenuIconLine}></span>
				</div>
			</label>
		</>
	)
}

export default Checkbox
