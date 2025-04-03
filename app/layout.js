import LocomotiveScrollProvider from "./Components/LocomotiveScrollProvider";
import PageTransition from "./Components/PageTransition";
import Navbar from "./Layouts/Navbar";
import { PageTransitionProvider } from "./context/allowPageAnimations";
import "./globals.css";

export const metadata = {
  title: "Next.js Smooth Scroll",
  description: "Smooth scrolling with Locomotive Scroll",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PageTransitionProvider>
          <LocomotiveScrollProvider>
            <PageTransition>
              <Navbar />
              {children}
            </PageTransition>
          </LocomotiveScrollProvider>
        </PageTransitionProvider>
      </body>
    </html>
  );
}
