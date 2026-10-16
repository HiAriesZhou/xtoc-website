import { Download } from "lucide-react";
import { extensionStores } from "@/lib/stores";

export function StoreLinks({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`store-links${compact ? " store-links-compact" : ""}`} role="group" aria-label="Install XTOC">
      {extensionStores.map((store) => (
        <a
          key={store.browser}
          className={compact ? "store-text-link" : "primary-button"}
          href={store.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View XTOC in ${store.name}; install with desktop ${store.browser}`}
        >
          {compact ? store.browser : <><span className="desktop-cta-copy">Add to {store.browser}</span><span className="mobile-cta-copy">{store.browser} for desktop</span></>}
          <Download aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
