import "../globals.css";
import Header from "@/components/header";
import { Footer } from "react-day-picker";
import { ToastContainer } from "react-toastify";

export default function ChildLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <ToastContainer />
      {children}
      <Footer />
    </div>
  );
}
