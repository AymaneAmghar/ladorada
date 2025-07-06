import { Card, CardContent } from '@/components/ui/card';
import { MenuItem } from '@/data/menuData';

interface MenuCardProps {
  item: MenuItem;
  showImage?: boolean;
}

const MenuCard = ({ item, showImage = false }: MenuCardProps) => {
  return (
    <Card className="group hover:shadow-elegant transition-all duration-300">
      {showImage && item.image && (
        <div className="relative overflow-hidden h-48">
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
          />
        </div>
      )}
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-serif font-semibold text-marine-blue">
            {item.name}
          </h3>
          <span className="text-gold font-semibold text-lg ml-4 flex-shrink-0">
            {item.price}
          </span>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          {item.description}
        </p>
      </CardContent>
    </Card>
  );
};

export default MenuCard;