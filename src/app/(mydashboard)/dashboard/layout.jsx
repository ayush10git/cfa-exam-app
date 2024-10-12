import DashboardSidebar from "@/components/DashboardSidebar";
import "../../globals.css";

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex gap-3">
        <DashboardSidebar />
        {children}
      </body>
    </html>
  );
}
