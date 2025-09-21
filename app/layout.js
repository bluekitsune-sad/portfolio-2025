import "../styles/globals.css";
import { SectionContextProvider } from "../context/SectionContextProvider";

export const metadata = {
  title: "Portfolio",
  description: "Saad Yousuf - I am a Full Stack Developer",
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
