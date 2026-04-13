###############################################################################
# GitHub Actions deploy service account
###############################################################################

resource "google_service_account" "github_deploy" {
  project      = var.project_id
  account_id   = "github-deploy"
  display_name = "GitHub Actions Deploy"
  description  = "Used by GitHub Actions to deploy Firebase Hosting"

  depends_on = [google_project_service.services]
}

resource "google_project_iam_member" "github_deploy_hosting_admin" {
  project = var.project_id
  role    = "roles/firebasehosting.admin"
  member  = "serviceAccount:${google_service_account.github_deploy.email}"
}

resource "google_project_iam_member" "github_deploy_serviceusage" {
  project = var.project_id
  role    = "roles/serviceusage.serviceUsageConsumer"
  member  = "serviceAccount:${google_service_account.github_deploy.email}"
}
