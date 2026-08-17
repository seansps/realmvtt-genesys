// Seed the Story Point pools when the GM first enters the campaign. Per the
// rules the GM sets these up at the start of each session (one point in the
// Player Pool per player, one in the GM Pool) — that per-session setup is
// done with the panel's + / - buttons; this only creates the variables so
// the panel has state to show.
//
// Runs on EVERY GM entry, so it must stay idempotent: only set values that
// have never been set.
if (api.getCampaignVariable("playerStoryPoints") === undefined) {
  api.setCampaignVariable("playerStoryPoints", 0);
}
if (api.getCampaignVariable("gmStoryPoints") === undefined) {
  api.setCampaignVariable("gmStoryPoints", 1);
}
