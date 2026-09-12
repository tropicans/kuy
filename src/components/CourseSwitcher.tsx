"use client";

import React from "react";
import { COURSES, CourseData } from "@/data/courses";
import { useTheme } from "@/context/ThemeContext";

interface CourseSwitcherProps {
  activeCourseId: string;
  onSelectCourse: (course: CourseData) => void;
}

export default function CourseSwitcher({
  activeCourseId,
  onSelectCourse,
}: CourseSwitcherProps) {
  const { theme } = useTheme();

  return (
    <div className="flex items-center gap-1.5 p-1 rounded-full border border-white/10 bg-black/40 backdrop-blur-md">
      {COURSES.map((course) => {
        const isActive = course.id === activeCourseId;
        return (
          <button
            key={course.id}
            onClick={() => onSelectCourse(course)}
            className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-[13px] font-medium transition-all duration-200 cursor-pointer flex items-center gap-2 ${
              isActive
                ? theme === "dark"
                  ? "bg-white text-black shadow-sm font-semibold"
                  : "bg-indigo-600 text-white shadow-sm font-semibold"
                : theme === "dark"
                ? "text-zinc-400 hover:text-white hover:bg-white/[0.06]"
                : "text-slate-400 hover:text-white hover:bg-white/[0.06]"
            }`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${isActive ? (theme === "dark" ? "bg-black" : "bg-white") : "bg-transparent"}`} />
            <span>{course.shortTitle}</span>
          </button>
        );
      })}
    </div>
  );
}
