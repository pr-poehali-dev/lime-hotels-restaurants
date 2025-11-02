import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { BookingDialog } from '@/components/BookingDialog';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { HotelsSection } from '@/components/HotelsSection';
import { ServicesSection } from '@/components/ServicesSection';
import { RestaurantsSection } from '@/components/RestaurantsSection';
import { ContactSection } from '@/components/ContactSection';
import { FooterSection } from '@/components/FooterSection';
import { RoomBookingDialog } from '@/components/RoomBookingDialog';
import { Room } from '@/data/rooms';

const Index = () => {
  const { toast } = useToast();
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [showBookingDialog, setShowBookingDialog] = useState(false);

  const handleBooking = (type: 'hotel' | 'restaurant') => {
    toast({
      title: 'Бронирование отправлено',
      description: `Мы свяжемся с вами в ближайшее время для подтверждения ${type === 'hotel' ? 'номера' : 'столика'}.`,
    });
    setSelectedRoom(null);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <BookingDialog
        open={showBookingDialog}
        onOpenChange={setShowBookingDialog}
        onNavigate={scrollToSection}
      />

      <Navigation
        onNavigate={scrollToSection}
        onBookingClick={() => setShowBookingDialog(true)}
      />

      <HeroSection onNavigate={scrollToSection} />

      <HotelsSection onRoomSelect={setSelectedRoom} />

      <ServicesSection />

      <RestaurantsSection />

      <ContactSection />

      <FooterSection onNavigate={scrollToSection} />

      <RoomBookingDialog
        room={selectedRoom}
        onClose={() => setSelectedRoom(null)}
        onConfirm={() => handleBooking('hotel')}
      />
    </div>
  );
};

export default Index;