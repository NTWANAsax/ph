import './globals.css';
export const metadata = { 
  title: 'Phethagatsa Solutions | Modern African Skincare',
  description: 'Rooted in Nature. Crafted for Radiance.',
  manifest: '/manifest.json'
};
export default function RootLayout({children}){
  return(
    <html lang="en">
      <body className="bg-black text-[#F5E6B8] antialiased">
        {children}
      </body>
    </html>
  )
}
