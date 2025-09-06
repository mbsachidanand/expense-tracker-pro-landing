// Feature type definition
export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

// Step type definition
export interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

// Testimonial type definition
export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

// Navigation link type
export interface NavLink {
  href: string;
  label: string;
}

// Animation variants type
export interface AnimationVariants {
  initial: {
    opacity: number;
    y?: number;
    x?: number;
  };
  animate: {
    opacity: number;
    y?: number;
    x?: number;
  };
  transition: {
    duration: number;
    delay?: number;
  };
}
