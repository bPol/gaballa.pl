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
  # Firebase Hosting site verification + preserved SPF from legacy setup.
  rrdatas = [
    "\"hosting-site=gaballa-pl\"",
    "\"v=spf1 mx a ~all\"",
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
