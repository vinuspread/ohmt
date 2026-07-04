param(
    [string]$Url = "https://ohmt.site/ko/templates/OHMT001-fashion",
    [string]$RequiredText = "MAISON OHMT",
    [string]$ForbiddenText = "",
    [int]$Retries = 12,
    [int]$DelaySeconds = 10
)

$ErrorActionPreference = "Stop"

for ($attempt = 1; $attempt -le $Retries; $attempt++) {
    $cacheBust = [DateTimeOffset]::UtcNow.ToUnixTimeSeconds()
    $separator = "?"
    if ($Url.Contains("?")) {
        $separator = "&"
    }
    $targetUrl = "{0}{1}verify={2}" -f $Url, $separator, $cacheBust

    try {
        $response = Invoke-WebRequest -Uri $targetUrl -UseBasicParsing -Headers @{
            "Cache-Control" = "no-cache"
            "Pragma" = "no-cache"
        }
        $html = $response.Content

        $hasRequired = $html.Contains($RequiredText)
        $hasForbidden = $false
        if ($ForbiddenText.Length -gt 0) {
            $hasForbidden = $html.Contains($ForbiddenText)
        }

        Write-Host ("Attempt {0}/{1}: required={2} forbidden={3} status={4}" -f $attempt, $Retries, $hasRequired, $hasForbidden, $response.StatusCode)

        if ($hasRequired -and -not $hasForbidden) {
            Write-Host "Live template verification passed: $Url"
            exit 0
        }
    } catch {
        Write-Host ("Attempt {0}/{1} failed: {2}" -f $attempt, $Retries, $_.Exception.Message)
    }

    if ($attempt -lt $Retries) {
        Start-Sleep -Seconds $DelaySeconds
    }
}

Write-Error "Live template verification failed for $Url. Expected '$RequiredText'."
exit 1
