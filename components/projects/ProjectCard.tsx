import { ProjectBadge } from "./ProjectBadge";
import { ProjectTech } from "./ProjectTech";
import { Icon } from "../ui/Icon";
import Image from "next/image";

export function ProjectCard({
  title,
  description,
  tech,
  badge,
  badgeColor,
  borderColor,
  image,
  iconName,
  iconColor,
}: {
  title: string;
  description: string;
  tech: string[];
  badge: string;
  badgeColor: string;
  borderColor: string;
  image: string;
  iconName: string;
  iconColor: string;
}) {
  return (
    <div
      className={`group relative bg-surface-container-low border border-outline-variant/30 hover:${borderColor}/60 transition-all`}
    >
      <div className="aspect-video overflow-hidden bg-surface-container-highest relative">
        <Image
          fill
          alt={title}
          src={image}
          className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
        />

        <div className="absolute inset-0 bg-linear-to-t from-surface-container-lowest to-transparent"></div>

        <div className="absolute top-4 left-4">
          <ProjectBadge label={badge} color={badgeColor} />
        </div>
      </div>

      <div className="p-6 space-y-4">
        <h3
          className={`text-2xl font-black font-headline text-on-surface group-hover:${borderColor} transition-colors uppercase`}
        >
          {title}
        </h3>

        <p className="text-secondary/70 text-sm leading-relaxed font-light">
          {description}
        </p>

        <ProjectTech items={tech} />
      </div>

      <div className="absolute bottom-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <Icon name={iconName} className={`${iconColor} text-4xl`} />
      </div>
    </div>
  );
}
