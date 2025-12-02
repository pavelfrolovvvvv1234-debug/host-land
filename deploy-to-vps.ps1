# Deploy script for VPS
$VPS_HOST = "95.182.98.171"
$VPS_USER = "root"
$VPS_PASSWORD = "lY3wW4qH1woH"

Write-Host "🚀 Starting deployment to VPS..." -ForegroundColor Cyan

# Create deployment commands
$commands = @"
# Find or clone project
if [ ! -d "/var/www/host-land" ]; then
    echo "📦 Cloning project..."
    cd /var/www
    git clone https://github.com/pavelfrolovvvvv1234-debug/host-land.git
    cd host-land
else
    echo "📥 Updating project..."
    cd /var/www/host-land
    git pull origin main
fi

# Build and restart
echo "🔨 Building and restarting containers..."
cd frontend
docker compose down
docker compose build --no-cache
docker compose up -d

echo "✅ Deployment complete!"
docker compose ps
"@

Write-Host "📋 Commands to execute on VPS:" -ForegroundColor Yellow
Write-Host $commands

Write-Host ""
Write-Host "⚠️  Please run these commands manually via SSH:" -ForegroundColor Yellow
Write-Host "ssh $VPS_USER@$VPS_HOST" -ForegroundColor Cyan
Write-Host "Password: $VPS_PASSWORD" -ForegroundColor Gray

