import type { Metadata } from "next"; // Correct import for Metadata type
import './globals.css'; // Importing global styles


export const metadata: Metadata = {
  title: "Todo List",
  description: "A minimal todo list application.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}