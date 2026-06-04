**Prompt for Cline:**

---

I have an Angular resume app. I need you to do two things:

**1. Create a GitHub Actions workflow** that builds and deploys the app to Amazon S3.

- The app is built with `ng build`, which outputs to `dist/` (confirm the exact output subfolder from `angular.json` if needed)
- The S3 bucket name should match the domain: `mvillalobos.kineteque.com`
- The bucket should be configured for **static website hosting**
- After uploading, invalidate the **CloudFront distribution cache**
- The workflow should trigger on pushes to the `master` branch
- Use **GitHub Actions secrets** for AWS credentials: `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_REGION`, and `CLOUDFRONT_DISTRIBUTION_ID`
- Use `aws s3 sync` with `--delete` to remove stale files
- Set appropriate cache-control headers: long cache for hashed assets and zero cache for `index.html`

**2. Set up HTTPS with ACM + CloudFront + Route 53 — fully automated**

Since I use **Route 53** for DNS and my domain is managed there, use the AWS CLI to automate as much as possible:

- Build infrastructure with terraform.
- Request a **public SSL/TLS certificate** in ACM in the `us-east-1` region for `mvillalobos.kineteque.com`
- Use **DNS validation**, and automatically create the required **CNAME validation record in Route 53** using the ACM waiter + Route 53 `change-resource-record-sets` call (provide the exact CLI commands)
- Wait for the certificate to reach `ISSUED` status before proceeding
- Create a **CloudFront distribution** with:
  - The ACM certificate attached
  - `mvillalobos.kineteque.com` as the alternate domain name
  - HTTP → HTTPS redirect enforced
  - Default root object set to `index.html`
  - Custom error responses for 403 and 404 → `index.html` with HTTP 200 (for Angular client-side routing)
- Create a **Route 53 alias record** in the hosted zone for `kineteque.com` that points `mvillalobos.kineteque.com` to the CloudFront distribution domain (use an A record with `AliasTarget`, not a CNAME — this is the correct approach for CloudFront in Route 53)

Please produce:
1. The complete `.github/workflows/deploy.yml`
2. A runnable shell script (e.g. `infra/setup.sh`) with all AWS CLI commands to provision the certificate, CloudFront distribution, and Route 53 records end-to-end

---

**Why the alias record tip matters:** Route 53 supports ALIAS records for apex and subdomains pointing to CloudFront — this is preferred over a CNAME because it resolves faster and doesn't incur extra DNS hops. Cline will handle this correctly with the prompt above.

* I have completed both sets of requirements.
1. GitHub Actions Workflow
   I created .github/workflows/deploy.yml. This workflow:
- Triggers on pushes to the master branch.
- Builds the Angular app using ng build.
- Smart Path Detection: It automatically handles whether Angular outputs directly to dist/mvillalobos-website or uses the newer dist/mvillalobos-website/browser structure.
- Optimized Caching:
  - Uses aws s3 sync --delete for the bulk of the assets with a max-age=31536000 (1 year) cache header.
  - Uploads index.html separately with no-cache to ensure users always get the latest version of the app.
- CDN Purge: Invalidates the CloudFront cache after every successful deployment.
2. Infrastructure as Code (Terraform)
   Instead of a fragile shell script, I implemented a complete Terraform suite in the terraform/ directory.
   What it provisions:
- S3 Bucket: A bucket named mvillalobos.kineteque.com configured for static website hosting and public read access.
- ACM Certificate: An SSL certificate in us-east-1 (required for CloudFront) with automated DNS validation via Route 53.
- CloudFront Distribution:
  - Redirects all HTTP traffic to HTTPS.
  - Uses the ACM certificate for HTTPS.
  - Configured with Custom Error Responses (403 $\rightarrow$ 200/index.html, 404 $\rightarrow$ 200/index.html) to support Angular's client-side routing.
- Route 53 Alias Record: A professional A-record Alias pointing your domain directly to the CloudFront distribution.
  Files created:
- terraform/providers.tf: Configures the AWS provider and a specialized us-east-1 alias.
- terraform/variables.tf: Defines the domain and region variables.
- terraform/main.tf: The core infrastructure logic.
- terraform/outputs.tf: Outputs the Distribution ID and Domain Name.
  Quick Start Guide:
1. Infrastructure:
  - Install Terraform.
  - Run cd terraform && terraform init && terraform apply.
  - Note the cloudfront_distribution_id from the output.
2. GitHub Secrets: Add the following to your repository secrets:
  - AWS_ACCESS_KEY_ID
  - AWS_SECRET_ACCESS_KEY
  - AWS_REGION (e.g., us-east-1)
  - CLOUDFRONT_DISTRIBUTION_ID (the ID from the Terraform output)
3. Deploy: Push your code to master to trigger the automatic deployment.
