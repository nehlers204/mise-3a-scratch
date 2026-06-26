/* =====================================================================
   config.js — THROWAWAY config for Phase 3a verification ONLY.
   Points the client at the SHARED multi-tenant backend as tenant
   "the-interim-test".

   SAFETY INVARIANT: deploy this ONLY to a scratch/throwaway target that is
   NOT one of the four live silos. Do not edit any live silo's config.js.
   Nothing here can reach prod/test/cthein/scrystal as long as this file
   lives only on the throwaway target.
   ===================================================================== */
window.MISE_CONFIG = {
  // --- FILL THESE TWO from the SHARED project's dashboard ---------------

  // Settings -> API -> "Project URL"  (looks like https://<ref>.supabase.co)
  supabaseUrl: "https://vhxtzesocggajdutpoqe.supabase.co",

  // Settings -> API Keys -> the PUBLISHABLE key (starts with "sb_publishable_").
  // This key is low-privilege and client-safe — RLS still applies and it is
  // MEANT to ship in the browser. Do NOT paste the secret key here.
  supabaseAnon: "sb_publishable_kVqZZbDva1vB_Mmev0onng_P0o71jRe",

  // --- These are correct as-is -----------------------------------------

  // The tenant this throwaway install represents (matches tenants.id in shared).
  tenantId: "the-interim-test",

  // Labels the PWA install so it's obviously the test build.
  appName: "Mise (Shared 3a Test)"

  // NOTE: visionFnUrl / visionSharedSecret / suggestFnUrl are intentionally
  // omitted. Bottle-scan and copy-suggest are not part of the 3a canary and
  // won't work against the shared backend until its edge functions are
  // deployed — out of scope here.
};
