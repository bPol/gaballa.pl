###############################################################################
# Primary domain: gaballa.pl — Firebase Hosting (main site)
###############################################################################

resource "google_dns_managed_zone" "gaballa_pl" {
  project     = var.project_id
  name        = "gaballa-pl"
  dns_name    = "${var.primary_domain}."
  description = "DNS zone for ${var.primary_domain}"
  visibility  = "public"

  depends_on = [google_project_service.services]
}

resource "google_dns_record_set" "gaballa_pl_a" {
  project      = var.project_id
  managed_zone = google_dns_managed_zone.gaballa_pl.name
  name         = "${var.primary_domain}."
  type         = "A"
  ttl          = 300
  rrdatas      = [var.firebase_hosting_ip]
}

resource "google_dns_record_set" "gaballa_pl_txt" {
  project      = var.project_id
  managed_zone = google_dns_managed_zone.gaballa_pl.name
  name         = "${var.primary_domain}."
  type         = "TXT"
  ttl          = 300
  # Firebase Hosting verification + Zoho-aware SPF + (optional) Zoho domain verification.
  rrdatas = concat(
    [
      "\"hosting-site=gaballa-pl\"",
      "\"v=spf1 include:zoho.com ~all\"",
    ],
    var.zoho_verification_code != "" ? ["\"zoho-verification=${var.zoho_verification_code}.zmverify.zoho.com\""] : [],
  )
}

resource "google_dns_record_set" "gaballa_pl_mx" {
  project      = var.project_id
  managed_zone = google_dns_managed_zone.gaballa_pl.name
  name         = "${var.primary_domain}."
  type         = "MX"
  ttl          = 3600
  rrdatas = [
    "10 mx.zoho.com.",
    "20 mx2.zoho.com.",
    "50 mx3.zoho.com.",
  ]
}

# DMARC — starts at p=none (monitor only). Tighten to quarantine/reject after observing reports.
resource "google_dns_record_set" "gaballa_pl_dmarc" {
  project      = var.project_id
  managed_zone = google_dns_managed_zone.gaballa_pl.name
  name         = "_dmarc.${var.primary_domain}."
  type         = "TXT"
  ttl          = 3600
  rrdatas      = ["\"v=DMARC1; p=none; rua=mailto:postmaster@${var.primary_domain}\""]
}

# DKIM — created only once selector + key are supplied via variables.
# TXT values >255 chars are split into 255-char quoted chunks within a single rrdata,
# which Cloud DNS / resolvers concatenate back into one logical record.
resource "google_dns_record_set" "gaballa_pl_dkim" {
  count        = var.zoho_dkim_selector != "" && var.zoho_dkim_public_key != "" ? 1 : 0
  project      = var.project_id
  managed_zone = google_dns_managed_zone.gaballa_pl.name
  name         = "${var.zoho_dkim_selector}._domainkey.${var.primary_domain}."
  type         = "TXT"
  ttl          = 3600
  rrdatas = [
    join(" ", [for chunk in regexall(".{1,255}", var.zoho_dkim_public_key) : "\"${chunk}\""]),
  ]
}

###############################################################################
# Redirect domain: ewelinagaballa.com — Firebase Hosting (redirect site)
###############################################################################

resource "google_dns_managed_zone" "ewelinagaballa_com" {
  project     = var.project_id
  name        = "ewelinagaballa-com"
  dns_name    = "${var.redirect_domain}."
  description = "DNS zone for ${var.redirect_domain} (301 to ${var.primary_domain})"
  visibility  = "public"

  depends_on = [google_project_service.services]
}

resource "google_dns_record_set" "ewelinagaballa_com_a" {
  project      = var.project_id
  managed_zone = google_dns_managed_zone.ewelinagaballa_com.name
  name         = "${var.redirect_domain}."
  type         = "A"
  ttl          = 300
  rrdatas      = [var.firebase_hosting_ip]
}

resource "google_dns_record_set" "ewelinagaballa_com_txt" {
  project      = var.project_id
  managed_zone = google_dns_managed_zone.ewelinagaballa_com.name
  name         = "${var.redirect_domain}."
  type         = "TXT"
  ttl          = 300
  rrdatas      = ["\"hosting-site=gaballa-redirect\""]
}

resource "google_dns_record_set" "ewelinagaballa_com_www_a" {
  project      = var.project_id
  managed_zone = google_dns_managed_zone.ewelinagaballa_com.name
  name         = "www.${var.redirect_domain}."
  type         = "A"
  ttl          = 300
  rrdatas      = [var.firebase_hosting_ip]
}

resource "google_dns_record_set" "ewelinagaballa_com_www_txt" {
  project      = var.project_id
  managed_zone = google_dns_managed_zone.ewelinagaballa_com.name
  name         = "www.${var.redirect_domain}."
  type         = "TXT"
  ttl          = 300
  rrdatas      = ["\"hosting-site=gaballa-redirect\""]
}
