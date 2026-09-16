import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ClassicsSpotlight } from './components/ClassicsSpotlight';
import { FeaturedMenu } from './components/FeaturedMenu';
import { StorySection } from './components/StorySection';
import { LocationAndHours } from './components/LocationAndHours';
import { Footer } from './components/Footer';
import { DishModal } from './components/DishModal';
import { OrderDrawer, CartItem } from './components/OrderDrawer';
import { ExportHtmlModal } from './components/ExportHtmlModal';
import { ClassicSpotlight, MenuItem } from './types';
import { STORE_INFO } from './data';
import { CheckCircle2, Code, Download, ShoppingBag, X } from 'lucide-react';

export default function App() {
  const [selectedDish, setSelectedDish] = useState<ClassicSpotlight | MenuItem | null>(null);
  const [isOrderDrawerOpen, setIsOrderDrawerOpen] = useState<boolean>(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [toastMessage, setToastMessage] = useState<{ title: string; desc: string } | null>(null);
  const [showExportModal, setShowExportModal] = useState<boolean>(false);
  const [standaloneHtml, setStandaloneHtml] = useState<string>('');

  // Toast trigger helper
  const triggerToast = (title: string, desc: string) => {
    setToastMessage({ title, desc });
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  // Add items to cart
  const handleAddToCart = (item: ClassicSpotlight | MenuItem) => {
    const priceRaw = parseFloat(item.price.replace(/[^0-9.]/g, '')) || 11.99;
    const title = 'shortDesc' in item ? item.title : item.name;

    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i));
      }
      return [
        ...prev,
        {
          id: item.id,
          name: title,
          priceNum: priceRaw,
          priceStr: item.price,
          quantity: 1,
          image: item.image,
        },
      ];
    });

    triggerToast(
      'Added to Order Bag!',
      `${title} (${item.price}) added. Pickup at 11009 N 56th St, Temple Terrace.`
    );
  };

  const handleUpdateQty = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleOrderOnlineClick = () => {
    setIsOrderDrawerOpen(true);
    triggerToast(
      'Online Ordering Ready',
      'Choose pickup at 11009 N 56th St or delivery. Orders ready in ~15-20 min.'
    );
  };

  const handleExploreMenu = () => {
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleGetDirections = () => {
    const el = document.getElementById('location');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenExportModal = async () => {
    try {
      const res = await fetch('/cairo-cravings.html');
      if (res.ok) {
        const text = await res.text();
        setStandaloneHtml(text);
      }
    } catch {
      // fallback
    }
    setShowExportModal(true);
  };

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans relative selection:bg-amber-500 selection:text-gray-950">
      {/* Toast Notification Popup */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce duration-300 max-w-sm">
          <div className="bg-gray-900 border-2 border-amber-500 text-white px-5 py-4 rounded-2xl shadow-2xl flex items-start gap-3 relative">
            <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div className="pr-4">
              <h4 className="font-display text-sm font-bold text-amber-400">
                {toastMessage.title}
              </h4>
              <p className="text-xs text-gray-300 mt-0.5 leading-snug">
                {toastMessage.desc}
              </p>
            </div>
            <button
              onClick={() => setToastMessage(null)}
              className="text-gray-400 hover:text-white absolute top-3 right-3"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Single-File HTML Code Banner / Button for user convenience */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={handleOpenExportModal}
          id="export-single-html-btn"
          className="px-4 py-2.5 rounded-xl bg-gray-900/95 hover:bg-gray-800 text-amber-400 font-heading text-xs font-bold uppercase tracking-wider flex items-center gap-2 border border-amber-500/40 shadow-xl backdrop-blur-md transition-all cursor-pointer hover:scale-105"
          title="View and download complete standalone single-file HTML code"
        >
          <Code className="w-4 h-4" />
          <span>Standalone Single HTML File</span>
        </button>
      </div>

      {/* Main Navigation Bar */}
      <Navbar onOrderClick={handleOrderOnlineClick} cartCount={totalCartCount} />

      {/* Hero Section matching the screenshot */}
      <Hero
        onExploreMenu={handleExploreMenu}
        onGetDirections={handleGetDirections}
        onOrderClick={handleOrderOnlineClick}
      />

      {/* Egyptian Classics Spotlight (Iconic Dishes Banner overlapping hero) */}
      <ClassicsSpotlight
        onSelectDish={(dish) => setSelectedDish(dish)}
        onOrderDish={(dish) => handleAddToCart(dish)}
      />

      {/* Featured Menu Grid (Tabbed Categories) */}
      <FeaturedMenu
        onAddToCart={(item) => handleAddToCart(item)}
        onViewItem={(item) => setSelectedDish(item)}
      />

      {/* Egyptian Heritage & Kitchen Story Section */}
      <StorySection />

      {/* Location & Operating Hours with Interactive Map */}
      <LocationAndHours
        onCopyAddressToast={() =>
          triggerToast('Address Copied!', '11009 N 56th St copied to clipboard.')
        }
      />

      {/* Footer */}
      <Footer />

      {/* Dish Details Modal */}
      {selectedDish && (
        <DishModal
          item={selectedDish}
          onClose={() => setSelectedDish(null)}
          onAddToCart={(dish) => handleAddToCart(dish)}
        />
      )}

      {/* Online Order Drawer */}
      <OrderDrawer
        isOpen={isOrderDrawerOpen}
        onClose={() => setIsOrderDrawerOpen(false)}
        cart={cart}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onCheckoutSuccess={() =>
          triggerToast(
            'Order Confirmed!',
            'Thank you! Your order is being prepared in our kitchen. Ready in ~20 minutes.'
          )
        }
      />

      {/* Single-File HTML Export Modal */}
      {showExportModal && (
        <ExportHtmlModal
          isOpen={showExportModal}
          onClose={() => setShowExportModal(false)}
          htmlCode={standaloneHtml}
        />
      )}
    </div>
  );
}
