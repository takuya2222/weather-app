import NavBar from "./components/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["400", "600"], subsets: ["latin"] });

export const metadata = {
  title: "Weather app",
  description: "Weather app using the api",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
