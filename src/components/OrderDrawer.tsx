import React, { useState } from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2, MapPin, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import { STORE_INFO } from '../data';

export interface CartItem {
  id: string;
  name: string;
  priceNum: number;
  priceStr: string;
  quantity: number;
  image: string;
}

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQty: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  onCheckoutSuccess: () => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQty,
  onRemoveItem,
  onClearCart,
  onCheckoutSuccess,
}) => {
  const [orderType, setOrderType] = useState<'pickup' | 'delivery'>('pickup');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  if (!isOpen) return null;

  const subtotal = cart.reduce((acc, item) => acc + item.priceNum * item.quantity, 0);
  const tax = subtotal * 0.075;
  const total = subtotal + tax;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;
    setOrderSubmitted(true);
    setTimeout(() => {
      onCheckoutSuccess();
      onClearCart();
      setOrderSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div
        className="w-full max-w-md bg-gray-950 border-l border-amber-900/30 text-white h-full flex flex-col justify-between shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-6 border-b border-gray-900 flex items-center justify-between bg-gray-900/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-white uppercase tracking-wide">
                Cairo Cravings Online Order
              </h3>
              <p className="text-xs text-amber-300">
                11009 N 56th St, Temple Terrace
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Drawer Body / Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Pickup vs Delivery Toggle */}
          <div className="grid grid-cols-2 gap-2 p-1 bg-gray-900 rounded-xl border border-gray-800">
            <button
              onClick={() => setOrderType('pickup')}
              className={`py-2 rounded-lg font-heading text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                orderType === 'pickup' ? 'bg-amber-500 text-gray-950' : 'text-gray-400 hover:text-white'
              }`}
            >
              Takeout Pickup (15-20 min)
            </button>
            <button
              onClick={() => setOrderType('delivery')}
              className={`py-2 rounded-lg font-heading text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                orderType === 'delivery' ? 'bg-amber-500 text-gray-950' : 'text-gray-400 hover:text-white'
              }`}
            >
              Delivery Partner
            </button>
          </div>

          {orderSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="font-display text-xl font-bold text-white">Order Received!</h4>
              <p className="text-sm text-gray-300 max-w-xs mx-auto">
                Shukran! Your authentic Egyptian feast is being fired up in our kitchen. Ready in ~20 minutes at 11009 N 56th St.
              </p>
            </div>
          ) : cart.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <div className="w-16 h-16 rounded-full bg-gray-900 text-amber-500 flex items-center justify-center mx-auto">
                <ShoppingBag className="w-8 h-8 opacity-60" />
              </div>
              <h4 className="font-display text-base font-bold text-gray-200">Your Craving Bag is Empty</h4>
              <p className="text-xs text-gray-400 max-w-xs mx-auto">
                Explore our menu to add authentic Koshary, Hawawshi flatbread, and fresh Ta’ameya.
              </p>
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-amber-500 text-gray-950 font-heading text-xs font-bold uppercase tracking-wider hover:bg-amber-400 transition-colors"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-3 p-3 rounded-xl bg-gray-900/70 border border-gray-800"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-lg object-cover bg-gray-950 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs sm:text-sm font-display font-bold text-white truncate">
                      {item.name}
                    </h4>
                    <span className="text-xs text-amber-400 font-semibold">
                      ${(item.priceNum * item.quantity).toFixed(2)}
                    </span>
                    <div className="text-[10px] text-gray-400">
                      ${item.priceNum.toFixed(2)} each
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-1.5 bg-gray-950 px-2 py-1 rounded-lg border border-gray-800">
                    <button
                      onClick={() => onUpdateQty(item.id, -1)}
                      className="text-gray-400 hover:text-white p-1"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-bold px-1">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQty(item.id, 1)}
                      className="text-gray-400 hover:text-white p-1"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-gray-500 hover:text-red-400 p-1"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}

              {/* Order Notes & Details Form */}
              <div className="pt-2 space-y-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-lg bg-gray-900 border border-gray-800 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-amber-500"
                />
                <input
                  type="tel"
                  placeholder="Phone Number (for pickup SMS)"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-lg bg-gray-900 border border-gray-800 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-amber-500"
                />
              </div>

              {/* Pickup Location Reminder */}
              <div className="p-3 rounded-xl bg-gray-900/90 border border-gray-800 text-xs text-gray-300 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-amber-400">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Pickup Location:</span>
                </div>
                <p className="text-[11px] text-gray-300 pl-5">
                  11009 N 56th St, Temple Terrace, FL 33617
                </p>
                <div className="flex items-center gap-1.5 text-[11px] text-gray-400 pl-5">
                  <Clock className="w-3 h-3" />
                  <span>Ready in ~15 to 20 minutes</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Drawer Footer / Subtotal & Checkout */}
        {cart.length > 0 && !orderSubmitted && (
          <div className="p-6 border-t border-gray-900 bg-gray-900/80 space-y-4">
            <div className="space-y-1.5 text-xs text-gray-300">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>FL Sales Tax (7.5%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-gray-800">
                <span>Estimated Total</span>
                <span className="text-amber-400 font-heading text-base">${total.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={handleSubmitOrder}
              className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-gray-950 font-heading text-xs sm:text-sm font-black uppercase tracking-wider transition-all shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Place Order (${total.toFixed(2)})</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
