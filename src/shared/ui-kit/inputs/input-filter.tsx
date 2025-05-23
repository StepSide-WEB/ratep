"use client"
import { useEffect, useRef, useState } from "react"
import clsx from "clsx"
import { cn } from "@/shared/lib/utils"
import ArrowDown from "../icons/arrow-down"
import Close from "../icons/close"
import s from "./index.module.scss"

type Option = {
	label: string
	value: string
}

type InputFilterProps = {
	options: Option[]
	value?: string
	onChange: (value: string) => void
	placeholder?: string
	mode?: "select" | "search"
	className?: string
}

const InputFilter = ({
	options,
	value,
	onChange,
	placeholder = "Выберите...",
	mode = "select",
	className,
}: InputFilterProps) => {
	const [isOpen, setIsOpen] = useState(false)
	const [inputValue, setInputValue] = useState("")
	const containerRef = useRef<HTMLDivElement>(null)

	const filteredOptions =
		mode === "search" ? options.filter((opt) => opt.label.toLowerCase().includes(inputValue.toLowerCase())) : options

	const selectedLabel = options.find((opt) => opt.value === value)?.label

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
				setIsOpen(false)
			}
		}
		document.addEventListener("mousedown", handleClickOutside)
		return () => document.removeEventListener("mousedown", handleClickOutside)
	}, [])

	useEffect(() => {
		setInputValue(value || "")
	}, [value])

	const handleSelect = (option: Option) => {
		onChange(option.value)
		setInputValue(option.value)
		setIsOpen(false)
	}

	const handleClear = () => {
		onChange("")
		setInputValue("")
		setIsOpen(false)
	}

	return (
		<div className={clsx("relative w-full", className)} ref={containerRef}>
			{mode === "search" ? (
				<div className='relative w-full'>
					<input
						className={cn(
							"flex items-center w-full outline-none gap-x-2 px-4 py-5 border whitespace-nowrap transition duration-200 pr-10  leading-none",
							isOpen ? "bg-dark-gray" : "bg-light-gray"
						)}
						placeholder={placeholder}
						value={inputValue}
						onChange={(e) => {
							setInputValue(e.target.value)
							setIsOpen(true)
						}}
						onFocus={() => setIsOpen(true)}
					/>
					{value && (
						<div className='top-1/2 right-4 absolute -translate-y-1/2 cursor-pointer' onClick={handleClear}>
							<Close className='stroke-black-40 hover:stroke-black size-4 transition' />
						</div>
					)}
				</div>
			) : (
				<div
					style={{ borderColor: "var(--black-20)" }}
					className={cn(
						"flex items-center gap-x-2 px-4 py-5 border whitespace-nowrap transition duration-200",
						isOpen ? "bg-dark-gray" : "bg-light-gray",
						"cursor-pointer"
					)}
					onClick={() => setIsOpen((prev) => !prev)}
				>
					<div
						className={cn(
							"flex justify-between items-center w-full text-base leading-none select-none",
							!selectedLabel && "text-black-40"
						)}
					>
						<span className='h-3'>{selectedLabel || placeholder}</span>
						{value ? (
							<div
								onClick={(e) => {
									e.stopPropagation()
									handleClear()
								}}
							>
								<Close className='stroke-black-40 hover:stroke-black size-4 transition' />
							</div>
						) : (
							<ArrowDown className={cn("stroke-black-40 size-5  transition duration-200", isOpen && "rotate-180")} />
						)}
					</div>
				</div>
			)}

			{isOpen && (
				<div
					style={{
						WebkitOverflowScrolling: "touch",
						overscrollBehavior: "contain",
						touchAction: "pan-y",
					}}
					onWheel={(e) => e.stopPropagation()}
					className={cn(
						"z-20 absolute bg-white shadow-sm w-full max-h-[388px] overflow-auto overscroll-contain",
						s.Options
					)}
				>
					{filteredOptions.length > 0 ? (
						filteredOptions.map((opt) => (
							<div
								key={opt.value}
								className={cn(
									"flex items-center gap-x-2 bg-light-gray hover:bg-dark-gray p-[18px] xl:px-4 xl:py-5 border whitespace-nowrap transition duration-200 cursor-pointer",
									selectedLabel === opt.label && "bg-dark-gray"
								)}
								onClick={() => handleSelect(opt)}
							>
								<span className='h-3 text-base leading-none'>{opt.label}</span>
							</div>
						))
					) : (
						<div className='px-3 py-2 text-gray-400 text-sm'>Ничего не найдено</div>
					)}
				</div>
			)}
		</div>
	)
}

export default InputFilter
