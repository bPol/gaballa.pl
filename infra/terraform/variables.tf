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

variable "zoho_verification_code" {
  description = "Zoho domain verification code (e.g. 'zb67060752' — the bit before '.zmverify.zoho.com'). From Zoho Mail Admin Console → Domains → your domain → Verify (TXT method). Leave empty until issued."
  type        = string
  default     = ""
}

variable "zoho_dkim_selector" {
  description = "Zoho DKIM selector (e.g. 'zoho'). From Zoho Mail Admin Console → Email Configuration → DKIM → Add Selector. Leave empty until issued."
  type        = string
  default     = ""
}

variable "zoho_dkim_public_key" {
  description = "Zoho DKIM public key value as shown in the Zoho admin console (the 'v=DKIM1; k=rsa; p=…' string, no surrounding quotes). Leave empty until issued."
  type        = string
  default     = ""
}
