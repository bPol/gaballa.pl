output "primary_nameservers" {
  description = "Nameservers to set at the primary-domain registrar."
  value       = google_dns_managed_zone.gaballa_pl.name_servers
}

output "redirect_nameservers" {
  description = "Nameservers to set at the redirect-domain registrar."
  value       = google_dns_managed_zone.ewelinagaballa_com.name_servers
}

output "main_hosting_site" {
  description = "Firebase Hosting site id that serves the primary domain."
  value       = google_firebase_hosting_site.main.site_id
}

output "redirect_hosting_site" {
  description = "Firebase Hosting site id that serves the redirect domain."
  value       = google_firebase_hosting_site.redirect.site_id
}

output "github_deploy_sa" {
  description = "Service account email used by GitHub Actions for deploys."
  value       = google_service_account.github_deploy.email
}
