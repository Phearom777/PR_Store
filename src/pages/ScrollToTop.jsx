import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// 👉 Component សម្រាប់ scroll ទៅកំពូលរាល់ពេលផ្លាស់ប្តូរ page
export default function ScrollToTop() {
  // useLocation() => បាន path បច្ចុប្បន្ន (pathname)
  const { pathname } = useLocation();

  useEffect(() => {
    // រាល់ពេល pathname ផ្លាស់ប្តូរ (ចុច link / route ថ្មី)
    // ទំព័រនឹង scroll ទៅកំពូល (0,0)
    window.scrollTo(0, 0);
  }, [pathname]); // dependency = pathname

  // Component មិនមាន UI អី → return null
  return null;
}
