import { useTheme } from "./theme-provider"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="border border-border rounded-md w-10 h-10 flex items-center justify-center bg-card text-card-foreground hover:bg-primary/10 transition-colors"
    >
      <span className="sr-only">Toggle theme</span>
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  )
}
