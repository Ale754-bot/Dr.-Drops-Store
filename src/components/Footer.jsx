// src/components/Footer.jsx
export function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-brand-border pt-16 pb-12 text-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Badges de Confianza */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-16 border-b border-brand-border text-center">
          <div className="flex flex-col items-center gap-2">
            <span className="text-2xl">🛡️</span>
            <h4 className="text-xs font-black tracking-widest uppercase">PAGOS SEGUROS</h4>
            <p className="text-xs text-brand-muted">Coordiná tu pago de forma protegida.</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-2xl">📦</span>
            <h4 className="text-xs font-black tracking-widest uppercase">CAMBIOS Y DEVOLUCIONES</h4>
            <p className="text-xs text-brand-muted">Garantía en todas tus prendas.</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-2xl">🚚</span>
            <h4 className="text-xs font-black tracking-widest uppercase">ENVÍOS A TODO EL PAÍS</h4>
            <p className="text-xs text-brand-muted">Llegamos a cada rincón.</p>
          </div>
        </div>

        {/* Info y Copyright */}
        <div className="pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xl font-black tracking-tighter uppercase">DR. DROPS</span>
            <p className="text-xs text-brand-muted mt-1 uppercase tracking-widest">Streetwear sin límites / Más que ropa, es actitud.</p>
          </div>

          <p className="text-[11px] text-neutral-500 tracking-wider">
            © 2026 DR. DROPS. Todos los derechos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
}