// src/app/qr/[video]/[shot]/page.js
import ProductList from '@/components/qr/ProductList';
import NotFound from '@/components/qr/NotFound';
import ErrorPage from '@/components/qr/ErrorPage';

export const metadata = {
  title: 'Product Detail - VideoVogue',
  description: 'Shoppable product from VideoVogue',
};

// Revalidate every hour for better performance
export const revalidate = 3600;

async function getProducts(videoId, shotNumber) {
  try {
    const token = process.env.VIDEOVOGUE_API_TOKEN;
    const apiUrl = process.env.VIDEOVOGUE_API_URL;

    const response = await fetch(`${apiUrl}?videoId=${videoId}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`API returned ${response.status}`);
    }

    const shots = await response.json();
    const matchedProducts = shots.filter(
      item => String(item.shotNumber) === String(shotNumber) && item.isShoppable === true
    );

    return { products: matchedProducts, error: null };
  } catch (error) {
    return { products: null, error: error.message };
  }
}

export default async function QRLandingPage({ params }) {
  const { video, shot } = await params;
  const { products, error } = await getProducts(video, shot);

  if (error) return <ErrorPage error={error} />;
  if (!products || products.length === 0) return <NotFound />;
  
  return <ProductList products={products} />;
}