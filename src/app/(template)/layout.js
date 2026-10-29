"use client";

import { useState, createContext, useContext } from "react";
import Header from "@/components/partials/Header";
import Footer from "@/components/partials/Footer";
import FloatingButton from "@/components/partials/FloatingButton";
import CallToAction from "@/components/partials/CallToAction";
import BookingModal from "@/components/shared/BookingModal";

export const BookingContext = createContext({ openBooking: () => {} });
export const useBooking = () => useContext(BookingContext);

export default function TemplateLayout({ children }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <BookingContext.Provider value={{ openBooking, closeBooking }}>
      <div className="min-h-screen flex flex-col">
        <Header onOpenBooking={openBooking} />
        <main className="flex-1">{children}</main>
        <CallToAction onOpenBooking={openBooking} />
        <Footer onOpenBooking={openBooking} />
        <FloatingButton onOpenBooking={openBooking} />
        <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
      </div>
    </BookingContext.Provider>
  );
}
