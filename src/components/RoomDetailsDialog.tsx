import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Room } from '@/data/rooms';
import Icon from '@/components/ui/icon';

interface RoomDetailsDialogProps {
  room: Room | null;
  onClose: () => void;
  onBook: (room: Room) => void;
}

export const RoomDetailsDialog = ({ room, onClose, onBook }: RoomDetailsDialogProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  if (!room) return null;

  const allImages = [room.image, ...room.gallery];

  return (
    <Dialog open={!!room} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl mb-4">{room.title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="relative">
            <img
              src={allImages[selectedImage]}
              alt={`${room.title} - фото ${selectedImage + 1}`}
              className="w-full h-[400px] object-cover rounded-lg"
            />
            
            <button
              onClick={() => setSelectedImage((prev) => (prev === 0 ? allImages.length - 1 : prev - 1))}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <Icon name="ChevronLeft" size={24} />
            </button>
            
            <button
              onClick={() => setSelectedImage((prev) => (prev === allImages.length - 1 ? 0 : prev + 1))}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <Icon name="ChevronRight" size={24} />
            </button>

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {selectedImage + 1} / {allImages.length}
            </div>
          </div>

          <div className="grid grid-cols-6 gap-2">
            {allImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative h-20 rounded-lg overflow-hidden transition-all ${
                  selectedImage === index ? 'ring-2 ring-primary scale-105' : 'opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={image}
                  alt={`Миниатюра ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          <div className="bg-muted/30 p-6 rounded-lg">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold mb-2">Стоимость</h3>
                <p className="text-3xl font-bold text-primary">{room.price}</p>
              </div>
              <div className="text-right">
                <div className="flex items-center text-muted-foreground">
                  <Icon name="Users" className="w-5 h-5 mr-2" />
                  {room.capacity}
                </div>
              </div>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">Описание</h3>
              <p className="text-muted-foreground">{room.description}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">Удобства в номере</h3>
              <div className="grid grid-cols-2 gap-3">
                {room.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Icon name="Check" className="w-5 h-5 mr-2 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <Button size="lg" className="flex-1" onClick={() => onBook(room)}>
              <Icon name="Calendar" className="mr-2 w-5 h-5" />
              Забронировать номер
            </Button>
            <Button size="lg" variant="outline" onClick={onClose}>
              Закрыть
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
