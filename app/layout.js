import "../styles/globals.css";
import { SectionContextProvider } from "../context/SectionContextProvider";
import { myInfo } from "../assets/data";

export const metadata = {
  title: "Portfolio",
  description: `${myInfo.name} - ${myInfo.title}`,
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SectionContextProvider>{children}</SectionContextProvider>
      </body>
    </html>
  );
}
