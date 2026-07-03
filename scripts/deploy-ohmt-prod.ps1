param(
    [string]$Team = "vinus-projects-343f7cc3",
    [string]$Project = "ohmt"
)

$ErrorActionPreference = "Stop"

powershell -ExecutionPolicy Bypass -File "$PSScriptRoot\check-vercel-target.ps1" -ExpectedTeam $Team -ExpectedProject $Project

npm run build
if ($LASTEXITCODE -ne 0) {
    exit $LASTEXITCODE
}

npx vercel deploy . --prod -y --scope $Team
if ($LASTEXITCODE -ne 0) {
    exit $LASTEXITCODE
}

powershell -ExecutionPolicy Bypass -File "$PSScriptRoot\verify-live-template.ps1"
