import { ThemeProvider } from '@/components/theme-provider'

const App = () => {
	return (
		<ThemeProvider>
			<p className={'text-foreground text-2xl'}>App init</p>
		</ThemeProvider>
	)
}

export default App
