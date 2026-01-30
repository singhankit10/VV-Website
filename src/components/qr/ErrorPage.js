// src/components/qr/ErrorPage.js
'use client';

export default function ErrorPage({ error }) {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }

        .error-container {
          background: white;
          padding: 40px;
          border-radius: 16px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          text-align: center;
          max-width: 400px;
        }

        .error-icon {
          font-size: 64px;
          margin-bottom: 20px;
        }

        .error-title {
          font-size: 24px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 12px;
        }

        .error-text {
          font-size: 16px;
          color: #6b7280;
          line-height: 1.5;
          background: #fee2e2;
          padding: 12px;
          border-radius: 8px;
          font-family: monospace;
          word-break: break-word;
        }
      `}</style>

      <div className="error-container">
        <div className="error-icon">⚠️</div>
        <h2 className="error-title">Error Loading Product</h2>
        <p className="error-text">{error}</p>
      </div>
    </>
  );
}