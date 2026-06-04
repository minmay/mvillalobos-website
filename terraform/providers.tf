terraform {
  required_version = ">= 1.0.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

# Default provider
provider "aws" {
  region  = var.aws_region
  profile = "github-actions-resume"
}

# Alias provider for us-east-1 (required for ACM certificates in CloudFront)
provider "aws" {
  alias   = "us_east_1"
  region  = "us-east-1"
  profile = "github-actions-resume"
}
