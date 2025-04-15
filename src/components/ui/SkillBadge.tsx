
import { cn } from '@/lib/utils';

interface SkillBadgeProps {
  name: string;
  className?: string;
}

const SkillBadge = ({ name, className }: SkillBadgeProps) => {
  return (
    <div 
      className={cn(
        "px-3 py-1 bg-secondary rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300",
        className
      )}
    >
      {name}
    </div>
  );
};

export default SkillBadge;
