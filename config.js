/* =====================================================================
   config.js — THROWAWAY config for Phase 3a/3b verification ONLY.
   Points the client at the SHARED multi-tenant backend as tenant
   "the-interim-test". Deploy ONLY to the scratch project — never a live silo.
   ===================================================================== */
window.MISE_CONFIG = {
  supabaseUrl: "https://vhxtzesocggajdutpoqe.supabase.co",
  supabaseAnon: "sb_publishable_kVqZZbDva1vB_Mmev0onng_P0o71jRe",

  tenantId: "the-interim-test",

  // Shared backend's app_state PK is (tenant_id, key) — composite conflict target.
  appStateConflict: "tenant_id,key",

  // Shared backend uses the PUBLISHED guest model (guests read get_published_menu;
  // head publishes snapshots). Legacy silos OMIT this and keep the live model.
  guestMenuMode: "published",

  // The bar's published-menu token (generated on first publish; paste it here).
  publishToken: "a2d69723b7734767828be4af6630a4da4a2f30f203e241c289bb3b5c8cfd58ef",

  appName: "Mise (Shared 3b Test)"
};
