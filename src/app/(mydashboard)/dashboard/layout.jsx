import DashboardSidebar from "@/components/sidebar/DashboardSidebar";
import "../../globals.css";
import { Roboto } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "500", "700", "900"],
});

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} flex`}>
        <DashboardSidebar />
        <div className="flex flex-col">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
