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
      <body className={`${roboto.className} flex min-h-screen`}>
        <div className="flex">
          {/* Sidebar - Fixed to the left side */}
          <DashboardSidebar />

          {/* Main content area - this will scroll when necessary */}
          <div className="flex-1 overflow-y-auto">
            <Navbar />
            <main className="flex-grow">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
