import { Button } from "@/components/ui/button";
import Link from "next/link";

interface TopicHeaderProps {
  topic: string;
  showViewAll?: boolean;
  viewAllLink?: string;
  borderLength?: number; // in px
}

export function TopicHeader({
  topic,
  showViewAll = false,
  viewAllLink = `/${topic.toLowerCase()}`,
  borderLength = 450,
}: TopicHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6 md:mb-10">
      <div className="flex items-center gap-1 text-2xl font-bold">
        <span className="text-primary">#</span>
        <h2 className="text-white mr-2">{topic}</h2>
        <div className="h-[1.5px] bg-primary hidden md:block" style={{ width: borderLength }}></div>
      </div>
      {showViewAll && (
        <Link href={viewAllLink}>
          <Button variant="outline" className="text-white font-bold hover:text-primary">
            View All {"~~>"}
          </Button>
        </Link>
      )}
    </div>
  );
}