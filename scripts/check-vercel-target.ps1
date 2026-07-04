param(
    [string]$ExpectedTeam = "vinus-projects-343f7cc3",
    [string]$ExpectedProject = "ohmt"
)

$ErrorActionPreference = "Stop"

function Fail($message) {
    Write-Error $message
    exit 1
}

$localProjectPath = Join-Path (Get-Location) ".vercel\project.json"
if (Test-Path $localProjectPath) {
    $localProject = Get-Content -LiteralPath $localProjectPath -Raw | ConvertFrom-Json
    if ($localProject.projectName -ne $ExpectedProject) {
        Fail "Wrong local Vercel project link: '$($localProject.projectName)'. Expected '$ExpectedProject'. Remove .vercel and run: vercel link --scope $ExpectedTeam"
    }
}

$previousErrorActionPreference = $ErrorActionPreference
$ErrorActionPreference = "Continue"
$teams = cmd /c "npx vercel teams ls 2>&1"
$vercelExitCode = $LASTEXITCODE
$ErrorActionPreference = $previousErrorActionPreference
$teamsText = $teams | Out-String
if ($vercelExitCode -ne 0) {
    Fail "Unable to read Vercel teams. Run 'npx vercel login' with an account that can access $ExpectedTeam/$ExpectedProject."
}

if ($teamsText -notmatch [regex]::Escape($ExpectedTeam)) {
    Fail "Current Vercel login cannot access team '$ExpectedTeam'. Run 'npx vercel login' with the OHMT Vercel account."
}

Write-Host "Vercel target OK: $ExpectedTeam/$ExpectedProject"
