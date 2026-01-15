import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  imageUrl?: string;
}

const ProductCard = ({ title, description, icon: Icon, imageUrl }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-border bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden bg-secondary">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-secondary to-muted">
            <Icon className="h-16 w-16 text-primary/60" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <CardContent className="p-5">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <h3 className="font-heading text-lg font-semibold text-foreground">{title}</h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
