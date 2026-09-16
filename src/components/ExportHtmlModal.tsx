import React, { useState } from 'react';
import { X, Code, Copy, Check, Download, ExternalLink } from 'lucide-react';

interface ExportHtmlModalProps {
  isOpen: boolean;
  onClose: () => void;
  htmlCode: string;
}

export const ExportHtmlModal: React.FC<ExportHtmlModalProps> = ({
  isOpen,
  onClose,
  htmlCode,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(htmlCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const blob = new Blob([htmlCode], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'cairo_cravings.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div
        className="bg-gray-900 border border-amber-500/40 rounded-3xl max-w-4xl w-full max-h-[88vh] flex flex-col shadow-2xl relative text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Code className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-white uppercase tracking-wide">
                Single-File HTML5 Document Code
              </h3>
              <p className="text-xs text-amber-300">
                Executable standalone file with Tailwind CSS CDN & vanilla JavaScript
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-gray-950 font-heading text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied to Clipboard!' : 'Copy HTML'}</span>
            </button>
            <button
              onClick={handleDownload}
              className="px-3 py-1.5 rounded-lg bg-red-700 hover:bg-red-600 text-white font-heading text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download .html</span>
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Code Content Box */}
        <div className="flex-1 overflow-y-auto p-6 bg-gray-950 font-mono text-xs text-gray-300">
          <pre className="whitespace-pre-wrap">{htmlCode}</pre>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-800 bg-gray-900/60 flex items-center justify-between text-xs text-gray-400">
          <span>Ready to save as <code>cairo_cravings.html</code> and run standalone in any browser</span>
          <button
            onClick={onClose}
            className="text-amber-400 hover:underline font-heading font-semibold uppercase"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
