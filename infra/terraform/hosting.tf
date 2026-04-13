###############################################################################
# Firebase Hosting sites
#
# Custom domains are NOT managed here — the google provider's support for
# Firebase Hosting custom domains is limited. They are created via the
# firebasehosting.googleapis.com REST API (see infra/terraform/README.md)
# and verified via the TXT records above.
###############################################################################

resource "google_firebase_hosting_site" "main" {
  provider = google-beta

  project = var.project_id
  site_id = "gaballa-pl"

  depends_on = [google_project_service.services]
}

resource "google_firebase_hosting_site" "redirect" {
  provider = google-beta

  project = var.project_id
  site_id = "gaballa-redirect"

  depends_on = [google_project_service.services]
}
