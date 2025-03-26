
import React from "react";
import { Link } from "react-router-dom";
import { Heart, Users, Calendar, ArrowRight } from "lucide-react";
import {
  CustomCard,
  CustomCardHeader,
  CustomCardTitle,
  CustomCardDescription,
  CustomCardContent,
  CustomCardFooter,
} from "./CustomCard";
import { CustomBadge } from "./CustomBadge";
import { CustomButton } from "./CustomButton";

interface NGOCardProps {
  id: string;
  name: string;
  description: string;
  imageSrc: string;
  categories: string[];
  totalDonors: number;
  upcomingEvents: number;
}

const NGOCard = ({
  id,
  name,
  description,
  imageSrc,
  categories,
  totalDonors,
  upcomingEvents,
}: NGOCardProps) => {
  return (
    <CustomCard hover className="h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-3 right-3 flex flex-wrap gap-2 max-w-[75%] justify-end">
          {categories.slice(0, 2).map((category, index) => (
            <CustomBadge
              key={index}
              variant="primary"
              className="bg-white/90 dark:bg-gray-800/90 text-primary shadow-sm"
            >
              {category}
            </CustomBadge>
          ))}
        </div>
      </div>
      <CustomCardHeader>
        <CustomCardTitle>{name}</CustomCardTitle>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
          <div className="flex items-center gap-1">
            <Users size={14} className="text-primary" />
            <span>{totalDonors} donors</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar size={14} className="text-primary" />
            <span>{upcomingEvents} events</span>
          </div>
        </div>
      </CustomCardHeader>
      <CustomCardContent className="flex-grow">
        <p className="text-muted-foreground line-clamp-3">{description}</p>
      </CustomCardContent>
      <CustomCardFooter className="flex justify-between">
        <Link to={`/ngo/${id}`}>
          <CustomButton
            variant="outline"
            size="sm"
            rightIcon={<ArrowRight size={14} />}
          >
            Learn More
          </CustomButton>
        </Link>
        <CustomButton
          variant="primary"
          size="sm"
          leftIcon={<Heart size={14} />}
          onClick={() => console.log(`Donate to ${name}`)}
        >
          Donate
        </CustomButton>
      </CustomCardFooter>
    </CustomCard>
  );
};

export default NGOCard;
