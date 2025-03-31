import { useState, useEffect } from "react"

const usePageLoaded = (): boolean => {
	const [isPageLoaded, setIsPageLoaded] = useState(false)

	useEffect(() => {
		const handlePageLoad = () => {
			setIsPageLoaded(true)
		}
		if (document.readyState === "complete") {
			handlePageLoad()
		} else {
			window.addEventListener("load", handlePageLoad)
		}
		return () => {
			window.removeEventListener("load", handlePageLoad)
		}
	}, [])

	return isPageLoaded
}

export default usePageLoaded
