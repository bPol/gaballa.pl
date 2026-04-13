terraform {
  required_version = ">= 1.6.0"

  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 6.0"
    }
    google-beta = {
      source  = "hashicorp/google-beta"
      version = "~> 6.0"
    }
  }

  # Remote state is recommended before more than one person touches this.
  # backend "gcs" {
  #   bucket = "gaballa-pl-tfstate"
  #   prefix = "terraform/state"
  # }
}
