// src/components/qr/ProductList.js
'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './ProductList.module.css';

export default function ProductList({ products }) {
  const [shareModalData, setShareModalData] = useState(null);

  const handleShare = async (productLink) => {
    const shareUrl = productLink || window.location.href;
    
    if (navigator.share) {
      try {
        await navigator.share({ url: shareUrl });
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.error('Error sharing:', err);
        }
      }
    } else {
      setShareModalData(shareUrl);
    }
  };

  const copyLink = () => {
    if (shareModalData) {
      navigator.clipboard.writeText(shareModalData);
      alert('Link copied!');
      setShareModalData(null);
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.mainContainer}>
        <h2 className={styles.title}>Products Detail</h2>
        
        {products.map((product, index) => (
          <div key={index} className={styles.product}>
            {product.image ? (
              <img 
                src={product.image} 
                alt={product.itemName || 'Product'} 
                className={styles.productImage}
                loading="lazy"
              />
            ) : (
              <div className={styles.productPlaceholder}>
                No Image
              </div>
            )}

            <div className={styles.productInfo}>
              <div className={styles.productName}>
                {product.itemName || 'Unnamed Product'}
              </div>
              
              <div className={styles.productDescription}>
                {product.productDescription || 'No description available.'}
              </div>

              <div className={styles.productPrice}>
                {product.price ? (
                  <>
                    {product.currency || '₹'} {product.price}
                  </>
                ) : (
                  <span className={styles.priceUnavailable}>Not Available</span>
                )}
              </div>

              <div className={styles.productAction}>
                <div className={styles.buttonGroup}>
                  {product.productLink ? (
                    <a 
                      href={product.productLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.buyButton}
                    >
                      Buy Now
                    </a>
                  ) : (
                    <button disabled className={styles.buyButton}>
                      No Link
                    </button>
                  )}

                  <button 
                    className={styles.shareButton} 
                    onClick={() => handleShare(product.productLink)}
                    aria-label="Share product"
                  >
                    <svg 
                      width="23" 
                      height="23" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                    >
                      <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8" />
                      <polyline points="16 6 12 2 8 6" />
                      <line x1="12" y1="2" x2="12" y2="15" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Share Modal */}
      {shareModalData && (
        <>
          <div className={styles.backdrop} onClick={() => setShareModalData(null)} />
          <div className={styles.modal}>
            <p style={{ marginBottom: '12px' }}>Copy this link:</p>
            <input
              type="text"
              value={shareModalData}
              readOnly
              className={styles.modalInput}
              onClick={(e) => e.target.select()}
            />
            <button onClick={copyLink} className={styles.modalButton}>
              Copy Link
            </button>
            <div>
              <button onClick={() => setShareModalData(null)} className={styles.modalClose}>
                Close
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}