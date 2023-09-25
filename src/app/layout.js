import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import ThemeContext, { ThemeContextProvider } from '@/context/ThemeContext';
import ThemeProvider from '@/providers/ThemeProvider';

export const metadata = {
	title: 'Blog App',
	description: 'The best blog app!',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className} suppressHydrationWarning={true}>
				<ThemeContextProvider>
					<ThemeProvider>
						<div className='container'>
							<div className='wrapper'>
								<Navbar />
								{children}
								<Footer />
							</div>
						</div>
					</ThemeProvider>
				</ThemeContextProvider>
			</body>
		</html>
	);
}
