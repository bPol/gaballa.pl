# `gaballa.pl` infrastructure — Terraform

Codifies the Google Cloud / Firebase infrastructure backing `gaballa.pl` and the `ewelinagaballa.com` → `gaballa.pl` redirect.

## What's managed here

- Project service enables (`dns`, `firebase`, `firebasehosting`, etc.)
- Cloud DNS zones: `gaballa-pl`, `ewelinagaballa-com`
- Cloud DNS records for both zones (A + TXT for apex and `www`)
- Firebase Hosting sites: `gaballa-pl` (main), `gaballa-redirect`
- `github-deploy` service account + IAM bindings used by GitHub Actions

## What's NOT managed here

- **Google Cloud project** (`gaballa-pl`) — created manually; billing linked manually
- **Firebase Hosting custom domains** — the google-beta provider's coverage is thin; these are created via the `firebasehosting.googleapis.com` REST API. The TXT records above are what Firebase uses to verify ownership
- **GitHub Actions secret** (`FIREBASE_SERVICE_ACCOUNT_GABALLA_PL`) — the SA JSON key is created out-of-band and stored with `gh secret set`; Terraform does not manage secret material
- **Site content** — Astro project in `site/`, redirect config in `redirect/`

## Prerequisites

```
gcloud auth application-default login --account=b@bernhard-huber.eu
gcloud auth application-default set-quota-project gaballa-pl
```

Terraform uses Application Default Credentials.

## First-time: importing existing resources

These resources were created manually (or via the Firebase CLI) before this Terraform was written. Import them into state instead of re-creating:

```sh
terraform init

# Service enables — one per service in local.enabled_services
terraform import 'google_project_service.services["dns.googleapis.com"]' gaballa-pl/dns.googleapis.com
terraform import 'google_project_service.services["firebase.googleapis.com"]' gaballa-pl/firebase.googleapis.com
terraform import 'google_project_service.services["firebasehosting.googleapis.com"]' gaballa-pl/firebasehosting.googleapis.com
terraform import 'google_project_service.services["serviceusage.googleapis.com"]' gaballa-pl/serviceusage.googleapis.com
terraform import 'google_project_service.services["cloudresourcemanager.googleapis.com"]' gaballa-pl/cloudresourcemanager.googleapis.com
terraform import 'google_project_service.services["iam.googleapis.com"]' gaballa-pl/iam.googleapis.com

# DNS zones
terraform import google_dns_managed_zone.gaballa_pl projects/gaballa-pl/managedZones/gaballa-pl
terraform import google_dns_managed_zone.ewelinagaballa_com projects/gaballa-pl/managedZones/ewelinagaballa-com

# DNS records (format: projects/PROJECT/managedZones/ZONE/rrsets/NAME/TYPE)
terraform import google_dns_record_set.gaballa_pl_a projects/gaballa-pl/managedZones/gaballa-pl/rrsets/gaballa.pl./A
terraform import google_dns_record_set.gaballa_pl_txt projects/gaballa-pl/managedZones/gaballa-pl/rrsets/gaballa.pl./TXT
terraform import google_dns_record_set.ewelinagaballa_com_a projects/gaballa-pl/managedZones/ewelinagaballa-com/rrsets/ewelinagaballa.com./A
terraform import google_dns_record_set.ewelinagaballa_com_txt projects/gaballa-pl/managedZones/ewelinagaballa-com/rrsets/ewelinagaballa.com./TXT
terraform import google_dns_record_set.ewelinagaballa_com_www_a projects/gaballa-pl/managedZones/ewelinagaballa-com/rrsets/www.ewelinagaballa.com./A
terraform import google_dns_record_set.ewelinagaballa_com_www_txt projects/gaballa-pl/managedZones/ewelinagaballa-com/rrsets/www.ewelinagaballa.com./TXT

# Firebase Hosting sites
terraform import google_firebase_hosting_site.main projects/gaballa-pl/sites/gaballa-pl
terraform import google_firebase_hosting_site.redirect projects/gaballa-pl/sites/gaballa-redirect

# Service account + IAM
terraform import google_service_account.github_deploy projects/gaballa-pl/serviceAccounts/github-deploy@gaballa-pl.iam.gserviceaccount.com
terraform import google_project_iam_member.github_deploy_hosting_admin "gaballa-pl roles/firebasehosting.admin serviceAccount:github-deploy@gaballa-pl.iam.gserviceaccount.com"
terraform import google_project_iam_member.github_deploy_serviceusage "gaballa-pl roles/serviceusage.serviceUsageConsumer serviceAccount:github-deploy@gaballa-pl.iam.gserviceaccount.com"
```

Then `terraform plan` should come back clean. If it shows drift, update the `.tf` files to match reality or apply the plan to converge.

## Day-to-day

```sh
terraform plan
terraform apply
```

## State

Local state for now. Before more than one person touches this, move to the commented-out GCS backend in `versions.tf` (you'll need to create the bucket first).

## Custom domains (manual, for reference)

Custom domains on the two hosting sites were created with:

```sh
TOKEN=$(gcloud auth print-access-token --account=b@bernhard-huber.eu)

# gaballa.pl → main site
curl -X POST \
  "https://firebasehosting.googleapis.com/v1beta1/projects/gaballa-pl/sites/gaballa-pl/customDomains?customDomainId=gaballa.pl" \
  -H "Authorization: Bearer $TOKEN" \
  -H "X-Goog-User-Project: gaballa-pl" \
  -d '{}'

# ewelinagaballa.com (apex + www) → redirect site
curl -X POST \
  "https://firebasehosting.googleapis.com/v1beta1/projects/gaballa-pl/sites/gaballa-redirect/customDomains?customDomainId=ewelinagaballa.com" \
  -H "Authorization: Bearer $TOKEN" \
  -H "X-Goog-User-Project: gaballa-pl" \
  -d '{}'

curl -X POST \
  "https://firebasehosting.googleapis.com/v1beta1/projects/gaballa-pl/sites/gaballa-redirect/customDomains?customDomainId=www.ewelinagaballa.com" \
  -H "Authorization: Bearer $TOKEN" \
  -H "X-Goog-User-Project: gaballa-pl" \
  -d '{}'
```
