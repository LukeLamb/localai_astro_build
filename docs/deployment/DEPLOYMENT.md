# Deployment Information

## 🚀 Current Deployment

**Platform:** Vercel  
**Production URL:** <https://localaifinance.com/>  
**Vercel Dashboard:** <https://vercel.com/lukelambs-projects/localai-astro-build/7VV7QqxjLQqVHdJfrGzpSBu89LQE>

## 📦 Deployment Configuration

### Build Settings

- **Framework Preset:** Astro
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Node Version:** 20.x
- **Install Command:** `npm install`

### Environment Variables

No environment variables are currently required for the production build.

## 🔄 Deployment Process

### Automatic Deployments

Every push to the `master` branch triggers an automatic deployment to Vercel:

1. Code is pushed to GitHub
2. Vercel detects the change
3. Build process runs (`npm run build`)
4. Static files are deployed to CDN
5. Site is live at <https://localaifinance.com/>

### Manual Deployments

You can also deploy manually using the Vercel CLI:

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy to production
vercel --prod

# Deploy to preview
vercel
```

## 🎯 Vercel Features in Use

### ✅ Currently Configured

- **Custom Domain:** localaifinance.com
- **Automatic HTTPS:** SSL certificates managed by Vercel
- **Edge Network:** Global CDN for fast content delivery
- **Build Optimization:** Automatic asset optimization
- **Git Integration:** Connected to GitHub repository
- **Preview Deployments:** Every PR gets a preview URL

### 🔧 Configuration Files

#### `vercel.json`

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "astro",
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        }
      ]
    },
    {
      "source": "/_astro/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

## 📊 Performance Metrics

### Expected Performance

- **Time to First Byte (TTFB):** < 200ms
- **First Contentful Paint (FCP):** < 1s
- **Largest Contentful Paint (LCP):** < 2.5s
- **Cumulative Layout Shift (CLS):** < 0.1
- **First Input Delay (FID):** < 100ms

### Monitoring

Monitor your site's performance through:

- Vercel Analytics (built-in)
- Google PageSpeed Insights
- Chrome DevTools Lighthouse

## 🔒 Security

### Headers Configured

- `X-Frame-Options: DENY` - Prevents clickjacking
- `X-Content-Type-Options: nosniff` - Prevents MIME type sniffing
- `X-XSS-Protection: 1; mode=block` - XSS protection
- `Referrer-Policy: strict-origin-when-cross-origin` - Controls referrer information

### HTTPS

All traffic is automatically redirected to HTTPS. SSL certificates are automatically provisioned and renewed by Vercel.

## 🌐 Domain Configuration

### Current Setup

- **Primary Domain:** localaifinance.com
- **DNS Provider:** [Your DNS Provider]
- **DNS Records:**
  - A Record pointing to Vercel's IP addresses
  - CNAME for www subdomain (if applicable)

### Domain Verification

Domain is verified and properly configured through Vercel's domain management interface.

## 🐛 Troubleshooting

### Common Issues

#### Build Failures

1. Check build logs in Vercel dashboard
2. Verify all dependencies are listed in `package.json`
3. Ensure Node version compatibility (v20)
4. Test build locally: `npm run build`

#### Deployment Not Updating

1. Force redeploy from Vercel dashboard
2. Check Git integration is active
3. Verify branch protection rules

#### Performance Issues

1. Review build output size
2. Check image optimization settings
3. Verify CDN cache is working
4. Review Vercel Analytics for insights

## 📱 Contact Form Handling

### Note About Forms

The contact forms were originally configured for Netlify Forms. For Vercel deployment, you have two options:

1. **Serverless Functions:** Convert forms to use Vercel serverless functions
2. **Third-Party Service:** Integrate with services like:
   - Formspree
   - Form.io
   - Basin
   - Getform

Current forms may need reconfiguration for Vercel environment.

## 📈 Next Steps

### Recommended Vercel Features to Enable

- [ ] **Vercel Analytics** - Built-in web analytics
- [ ] **Web Vitals** - Core Web Vitals monitoring
- [ ] **Preview Comments** - Collaboration on preview deployments
- [ ] **Password Protection** - For staging/preview environments
- [ ] **Edge Functions** - For dynamic content (if needed)

## 🔗 Useful Links

- **Vercel Dashboard:** <https://vercel.com/lukelambs-projects/localai-astro-build>
- **Astro + Vercel Docs:** <https://docs.astro.build/en/guides/deploy/vercel/>
- **Vercel Documentation:** <https://vercel.com/docs>
- **GitHub Repository:** <https://github.com/LukeLamb/localai_astro_build>

---

**Last Updated:** October 1, 2025  
**Deployment Status:** ✅ Active and Live
