import { useCallback } from "react";

export function useFlyToCart() {
  const flyToCart = useCallback((e: React.MouseEvent, imgUrl: string) => {
    const cartIcon = document.getElementById("cart-icon");
    if (!cartIcon) return;

    const cartRect = cartIcon.getBoundingClientRect();
    const btnRect = e.currentTarget.getBoundingClientRect();

    const flyer = document.createElement("img");
    flyer.src = imgUrl;

    flyer.className = "fixed z-[9999] w-14 h-14 object-contain pointer-events-none rounded-2xl bg-white p-1.5 shadow-2xl border border-gray-100/50";
    
    flyer.style.left = `${btnRect.left + btnRect.width / 2 - 28}px`;
    flyer.style.top = `${btnRect.top + btnRect.height / 2 - 28}px`;
    
    flyer.style.transition = "transform 2500ms cubic-bezier(0.19, 1, 0.22, 1), opacity 2300ms ease-in-out";
    flyer.style.transform = "scale(1) rotate(0deg)";
    flyer.style.opacity = "1";

    document.body.appendChild(flyer);

    const translateX = (cartRect.left + cartRect.width / 2) - (btnRect.left + btnRect.width / 2);
    const translateY = (cartRect.top + cartRect.height / 2) - (btnRect.top + btnRect.height / 2);

    setTimeout(() => {
      flyer.style.transform = `translate(${translateX}px, ${translateY}px) scale(0.12) rotate(360deg)`;
      flyer.style.opacity = "0.05";
    }, 30);

    setTimeout(() => {
      flyer.remove();
      cartIcon.style.transition = "transform 800ms cubic-bezier(0.175, 0.885, 0.32, 1.275)";
      cartIcon.style.transform = "scale(1.4)";
      
      setTimeout(() => {
        cartIcon.style.transform = "scale(1)";
      }, 300); 
    }, 1000); 
  }, []);

  return { flyToCart };
}