"use client"

import { useRef, useEffect } from "react"

export function useClickAway<T extends HTMLElement = HTMLElement>(onClickAway: (event: MouseEvent) => void) {
    const ref = useRef<T>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                onClickAway(event)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [onClickAway])

    return ref
}
