// src/components/header/header.tsx (add to existing component)
"use client";
// ... existing imports
import { useAuth } from "@/contexts/AuthContext";

export default function Header() {
  // ... existing code
  const { logout, user } = useAuth();
  
  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    logout();
  };
  
  // In your JSX for the user dropdown menu:
  return (
    // ... existing JSX
    <li>
      <Link 
        href="#" 
        onClick={handleLogout}
        className="dropdown-item"
      >
        <i className="ti ti-logout me-2"></i>Logout
      </Link>
    </li>
    // ... rest of the component
  );
}