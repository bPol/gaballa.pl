variable "project_id" {
  description = "Google Cloud / Firebase project ID."
  type        = string
  default     = "gaballa-pl"
}

variable "billing_account" {
  description = "Billing account ID already linked to the project (used for drift detection, not provisioning)."
  type        = string
  default     = "017A08-21BDF0-04E877"
}

variable "primary_domain" {
  description = "Apex domain served by the main Firebase Hosting site."
  type        = string
  default     = "gaballa.pl"
}

variable "redirect_domain" {
  description = "Apex domain that 301-redirects to the primary domain."
  type        = string
  default     = "ewelinagaballa.com"
}

variable "firebase_hosting_ip" {
  description = "The Firebase Hosting anycast IP for apex A records."
  type        = string
  default     = "199.36.158.100"
}
