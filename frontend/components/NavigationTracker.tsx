"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Tracks navigation to save previous path in sessionStorage
 * This helps the preloader know when to show on homepage
 */
export function NavigationTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Save current path as previous for next navigation
    const currentPath = pathname || '/';
    const previousPath = sessionStorage.getItem('current_path');
    
    if (previousPath && previousPath !== currentPath) {
      // We navigated to a different page
      sessionStorage.setItem('previous_path', previousPath);
    }
    
    // Update current path
    sessionStorage.setItem('current_path', currentPath);
    
    // Track navigation type
    const handleBeforeUnload = () => {
      sessionStorage.setItem('navigation_type', 'reload');
    };
    
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [pathname]);

  return null;
}

