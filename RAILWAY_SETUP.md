# Railway Deployment Guide

## Environment Variables Required

Set these environment variables in your Railway project:

```bash
DATABASE_URL=your_railway_postgres_url_here
NODE_ENV=production
PORT=5000  # Railway will auto-set this
```

## Deployment Steps

1. **Create Railway Project**
   ```bash
   railway login
   railway init
   ```

2. **Add PostgreSQL Service**
   - Go to Railway dashboard
   - Add PostgreSQL service
   - Copy the DATABASE_URL from the PostgreSQL service

3. **Deploy**
   ```bash
   railway up
   ```

## Key Changes Made for Railway Compatibility

- ✅ Replaced `@neondatabase/serverless` with standard `pg` driver
- ✅ Fixed server port to use Railway's `PORT` environment variable
- ✅ Updated build scripts (separate client/server builds, CommonJS server)
- ✅ Removed Replit-specific plugins from production builds
- ✅ Added health check endpoint at `/health`
- ✅ Created Dockerfile optimized for Railway
- ✅ Added database migration to start script
- ✅ Configured PostgreSQL with proper SSL settings

## Database Setup

The application will automatically run migrations on startup. Make sure your Railway PostgreSQL service is running before deployment.

## Troubleshooting

- Check Railway logs if deployment fails
- Verify DATABASE_URL is set in Railway environment variables
- Ensure all dependencies are listed in package.json
- Test health endpoint: `curl https://your-app.railway.app/health`