export function AdSlot({ label = "Publicidade", height = 90 }: { label?: string; height?: number }) {
  return (
    <div
      className="my-6 flex items-center justify-center rounded-md border border-dashed border-border bg-muted text-xs uppercase tracking-widest text-muted-foreground"
      style={{ minHeight: height }}
      aria-label="Espaço para anúncio"
    >
      {label}
    </div>
  );
}
