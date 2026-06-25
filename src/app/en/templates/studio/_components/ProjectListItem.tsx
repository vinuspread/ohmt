"use client";
import React from "react";
import Link from "next/link";
import { MoveRight } from "lucide-react";

interface ProjectItemData {
    id: string;
    title: string;
    category: string;
    year: string;
    location: string;
    image: string;
}

interface ProjectListItemProps {
    project: ProjectItemData;
}

export function ProjectListItem({ project }: ProjectListItemProps) {
    return (
        <Link
            href={`/en/templates/OHMT006-studio/projects/${project.id}`}
            className="group grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10 lg:gap-16 items-center border-b border-black/5 pb-10 md:pb-16 last:border-b-0"
        >
            {/* Left Large High-End Image */}
            <div className="lg:col-span-8 aspect-[16/9] overflow-hidden bg-[#F4F2EE] relative">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-[1.5s] ease-out opacity-100"
                />
                <div className="absolute top-6 left-6">
                    <span className="bg-white px-3.5 py-1.5 text-[12px] font-bold border border-black/10 text-black">
                        {project.category}
                    </span>
                </div>
            </div>

            {/* Right High-Density Description */}
            <div className="lg:col-span-4 space-y-6 md:space-y-8">
                <div className="space-y-3 md:space-y-4">
                    <div className="flex justify-between text-[12px] md:text-[13px] text-black/40 font-bold uppercase">
                        <span>{project.location}</span>
                        <span>{project.year}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl lg:text-[2.8rem] font-bold leading-[1.1] text-black transition-colors duration-300">
                        {project.title}
                    </h3>
                </div>

                <div className="flex items-center gap-3 text-[12px] md:text-[13px] font-bold text-black border-t border-black/5 pt-5 md:pt-6 group-hover:opacity-75 transition-opacity uppercase">
                    <span>Inquire Project</span>
                    <MoveRight size={14} className="group-hover:translate-x-3 transition-transform duration-300" />
                </div>
            </div>
        </Link>
    );
}
