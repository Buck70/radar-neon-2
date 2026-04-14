import { getArticles } from '../lib/store';
import { Zap } from 'lucide-react';

export default async function Home() {
  const articles = await getArticles();
  return (
    <main style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', padding: '40px', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '70px', fontWeight: '900', fontStyle: 'italic', letterSpacing: '-4px' }}>
        RADAR<span style={{ color: '#ff00ff' }}>NÉON</span>
      </h1>
      <div style={{ marginTop: '50px', display: 'grid', gap: '20px' }}>
        {articles.map((item) => (
          <div key={item.id} style={{ padding: '30px', borderRadius: '30px', border: '1px solid #333', backgroundColor: '#111' }}>
            <span style={{ color: '#ff00ff', fontWeight: 'bold', fontSize: '12px', textTransform: 'uppercase' }}>{item.category}</span>
            <h2 style={{ fontSize: '30px', margin: '10px 0' }}>{item.title}</h2>
            <p style={{ color: '#888' }}>{item.summary}</p>
            <div style={{ height: '4px', width: '100%', backgroundColor: '#222', marginTop: '20px', borderRadius: '10px' }}>
              <div style={{ height: '100%', width: `${item.heat}%`, backgroundColor: '#ff00ff' }}></div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}