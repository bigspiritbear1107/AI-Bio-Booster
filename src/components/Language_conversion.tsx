import { useState, useEffect, useRef } from "react"
// import { Globe, Flag } from "lucide-react"

export default function LanguageSidebar() {
    const [visible, setVisible] = useState(false)
    const [fixedY, setFixedY] = useState<number | null>(null)
    const panelRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const fromRight = window.innerWidth - e.clientX
            if (fromRight < 30 && !visible) {
                setFixedY(e.clientY)
                setVisible(true)
            }
        }

        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [visible])

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
                setVisible(false)
                setFixedY(null)
            }
        }

        if (visible) {
            document.addEventListener("click", handleClickOutside)
        }
        return () => document.removeEventListener("click", handleClickOutside)
    }, [visible])

    const handleLanguageSelect = (lang: string) => {
        console.log(`Language selected: ${lang}`)
        setVisible(false)
        setFixedY(null)
    }

    return (
        <>
            {visible && fixedY !== null && (
                <div
                    ref={panelRef}
                    className="fixed right-2 z-50 text-white px-3 py-2 rounded-xl shadow-xl w32 bg-gradient-to-l from-pink-500 via-red-500 to-yellow-500"
                    style={{ top: `${fixedY}px`, transform: "translateY(-50%)" }}
                >
                    <button
                        onClick={() => handleLanguageSelect("EN")}
                        className="flex items-center gap-1 w-full text-left text-sm hover:text-indigo-200"
                    >
                        {/* <span className="text-base">🇬🇧</span> */}
                        EN
                    </button>
                    <div className="w-full border-t border-white/30 my-1" />
                    <button
                        onClick={() => handleLanguageSelect("DE")}
                        className="flex items-center gap-1 w-full text-left text-sm hover:text-indigo-200 mt-1"
                    >
                        {/* <span className="text-base">🇩🇪</span> */}
                        DE
                    </button>
                </div>

            )}
        </>
    )
}
