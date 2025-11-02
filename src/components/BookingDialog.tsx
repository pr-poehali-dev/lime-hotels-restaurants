import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onNavigate: (section: string) => void;
}

export const BookingDialog = ({ open, onOpenChange, onNavigate }: BookingDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">Что хотите забронировать?</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Button 
            size="lg" 
            className="h-auto py-6 flex flex-col gap-2"
            onClick={() => {
              onOpenChange(false);
              onNavigate('hotels');
            }}
          >
            <Icon name="Hotel" className="w-8 h-8" />
            <span className="text-lg">Номер в гостинице</span>
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="h-auto py-6 flex flex-col gap-2"
            onClick={() => {
              onOpenChange(false);
              onNavigate('restaurants');
            }}
          >
            <Icon name="UtensilsCrossed" className="w-8 h-8" />
            <span className="text-lg">Столик в ресторане</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
