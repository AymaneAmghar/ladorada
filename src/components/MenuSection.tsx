import MenuCard from './MenuCard';
import { MenuItem } from '@/data/menuData';

interface MenuSectionProps {
  title: string;
  description: string;
  items: MenuItem[];
  showImages?: boolean;
}

const MenuSection = ({ title, description, items, showImages = false }: MenuSectionProps) => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif font-bold text-marine-blue mb-4">
          {title}
        </h2>
        <p className="text-muted-foreground">
          {description}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <MenuCard key={index} item={item} showImage={showImages} />
        ))}
      </div>
    </div>
  );
};

export default MenuSection;