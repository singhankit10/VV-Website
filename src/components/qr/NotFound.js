// src/components/qr/NotFound.js
'use client';

export default function NotFound() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }

        .not-found-container {
          background: white;
          padding: 40px;
          border-radius: 16px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          text-align: center;
          max-width: 400px;
        }

        .not-found-icon {
          font-size: 64px;
          margin-bottom: 20px;
        }

        .not-found-title {
          font-size: 24px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 12px;
        }

        .not-found-text {
          font-size: 16px;
          color: #6b7280;
          line-height: 1.5;
        }
      `}</style>

      <div className="not-found-container">
        <div className="not-found-icon">🔍</div>
        <h2 className="not-found-title">Product Not Found</h2>
        <p className="not-found-text">
          This QR code doesn&apos;t match any product in our system.
        </p>
      </div>
    </>
  );
}