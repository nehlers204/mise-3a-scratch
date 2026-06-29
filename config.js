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

  // Phase 3b-1: the bar's published-menu token. LEAVE EMPTY for the first deploy.
  // Sign in as head -> Settings -> Published Menu -> "Publish Menu". That generates
  // and displays the token; paste it here, redeploy, then reload as a guest.
  publishToken: "a2d69723b7734767828be4af6630a4da4a2f30f203e241c289bb3b5c8cfd58ef",

  appName: "Mise (Shared 3b Test)"
};
