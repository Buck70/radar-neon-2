import { Zap } from 'lucide-react';

// On met les données directement ici pour éviter les erreurs de dossier
const articles = [
  { id: 1, category: 'SYSTÈME', title: "Radar Néon en Ligne", summary: "Déploiement réussi. Le système de veille est opérationnel.", heat: 100 }
];

export default function Home() {
  return (
    <main style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', padding: '40px', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ color: '#ff00ff', fontWeight: 'bold', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Zap size={20} /> SYSTÈME ACTIF
        </div>
        <h1 style={{ fontSize: '70px', fontWeight: '900', fontStyle: 'italic', letterSpacing: '-4px', margin: '0' }}>
          RADAR<span style={{ color: '#ff00ff' }}>NÉON</span>
        </h1>
        <div style={{ marginTop: '50px' }}>
          {articles.map((item) => (
            <div key={item.id} style={{ padding: '30px', borderRadius: '30px', border: '1px solid #333', backgroundColor: '#111' }}>
              <span style={{ color: '#ff00ff', fontSize: '12px', fontWeight: 'bold' }}>{item.category}</span>
              <h2 style={{ fontSize: '30px', margin: '15px 0' }}>{item.title}</h2>
              <p style={{ color: '#aaa' }}>{item.summary}</p>
              <div style={{ height: '4px', width: '100%', backgroundColor: '#222', marginTop: '20px' }}>
                <div style={{ height: '100%', width: `${item.heat}%`, backgroundColor: '#ff00ff' }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
