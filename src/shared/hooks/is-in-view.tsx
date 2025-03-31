import { useState, useEffect } from "react"

const useIsInViewport = (elementId: string | null | undefined, persistent?: boolean): boolean => {
	const [isInViewport, setIsInViewport] = useState(false)
	const [hasBeenVisible, setHasBeenVisible] = useState(false)

	useEffect(() => {
		if (!elementId) return

		const element = document.getElementById(elementId)
		if (!element) {
			console.warn(`Element with ID "${elementId}" not found.`)
			return
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsInViewport(true)
					if (persistent) {
						setHasBeenVisible(true)
					}
				} else if (!persistent) {
					setIsInViewport(false)
				}
			},
			{ threshold: 0.1 }
		)

		observer.observe(element)
		return () => {
			observer.disconnect()
		}
	}, [elementId, persistent])

	return persistent ? hasBeenVisible : isInViewport
}

export default useIsInViewport
