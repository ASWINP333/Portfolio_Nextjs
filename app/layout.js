import { Outfit, Ovo } from "next/font/google";
import "./globals.css";


const OutfitFont = Outfit({
  subsets: ["latin"],weight:["400","500","600","700"]
});
const OvoFont = Ovo({
  subsets: ["latin"],weight:["400"]
});


export const metadata = {
  title: "Portfolio-Aswin P",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth " >
      <body
        className={`${OutfitFont.className} ${OvoFont.className} antialiased leading-8
        overflow-x-hidden dark:bg-darkTheme
        dark:text-white` }
      >
        {children}
      </body>
    </html>
  );
}
