# zip에서 템플릿 추출 후 프로젝트에 반영
# OHMT00X-slug 경로를 slug 경로로 변환

param(
    [string]$ZipDir = "E:\Work\ohmytemplate\zips",
    [string]$ProjectDir = "E:\Work\OHMT_admin"
)

# 처리할 zip 목록 (OHMT030 제외)
$zips = Get-ChildItem -Path $ZipDir -Filter "*.zip" | Where-Object { $_.Name -notmatch "OHMT030" }

$tempBase = "$env:TEMP\ohmt-import"
if (Test-Path $tempBase) { Remove-Item -Recurse -Force $tempBase }
New-Item -ItemType Directory -Force $tempBase | Out-Null

$slugMap = @{
    "OHMT001-fashion"       = "fashion"
    "OHMT002-jewelry"       = "jewelry"
    "OHMT003-exhibition"    = "exhibition"
    "OHMT004-furniture"     = "furniture"
    "OHMT005-sneaker"       = "sneaker"
    "OHMT006-studio"        = "studio"
    "OHMT007-portfolio"     = "portfolio"
    "OHMT008-airline"       = "airline"
    "OHMT009-car"           = "car"
    "OHMT010-cosmetic"      = "cosmetic"
    "OHMT011-ir"            = "ir"
    "OHMT012-magazine"      = "magazine"
    "OHMT013-newspaper"     = "newspaper"
    "OHMT014-docs"          = "docs"
    "OHMT015-dashboard"     = "dashboard"
    "OHMT016-technology"    = "technology"
    "OHMT017-multi-shop"    = "multi-shop"
    "OHMT018-burger"        = "burger"
    "OHMT019-coffee"        = "coffee"
    "OHMT020-hotel"         = "hotel"
    "OHMT021-museum"        = "museum"
    "OHMT022-yoga"          = "yoga"
    "OHMT023-game"          = "game"
    "OHMT024-kids-education"= "kids-education"
    "OHMT025-wedding"       = "wedding"
    "OHMT026-spa"           = "spa"
    "OHMT027-architecture"  = "architecture"
    "OHMT028-ev"            = "ev"
    "OHMT029-fitness"       = "fitness"
}

foreach ($zip in $zips) {
    $zipName = $zip.BaseName  # e.g. OHMT001-fashion-EN
    $isKo = $zipName -match "-KO$"
    $lang = if ($isKo) { "ko" } else { "en" }

    # slug 추출 (OHMT001-fashion-EN → OHMT001-fashion)
    $ohmtKey = $zipName -replace "-EN$|-KO$", ""
    $slug = $slugMap[$ohmtKey]
    if (-not $slug) { Write-Host "SKIP (no slug map): $zipName"; continue }

    Write-Host "Processing: $zipName → $slug ($lang)"

    # 임시 폴더에 압축 해제
    $tempDir = "$tempBase\$zipName"
    Expand-Archive -Path $zip.FullName -DestinationPath $tempDir -Force

    # 1. public/templates/[slug]/ → 프로젝트 public
    $pubSrc = "$tempDir\public\templates\$slug"
    $pubDst = "$ProjectDir\public\templates\$slug"
    if (Test-Path $pubSrc) {
        New-Item -ItemType Directory -Force $pubDst | Out-Null
        Copy-Item -Path "$pubSrc\*" -Destination $pubDst -Recurse -Force
    }

    # 2. src/app/[lang]/templates/OHMT00X-slug/ → 프로젝트 src
    $srcSrc = "$tempDir\src\app\$lang\templates\$ohmtKey"
    $srcDst = "$ProjectDir\src\app\$lang\templates\$slug"
    if (Test-Path $srcSrc) {
        if (Test-Path $srcDst) { Remove-Item -Recurse -Force $srcDst }
        Copy-Item -Path $srcSrc -Destination $srcDst -Recurse -Force
    }
}

# 임시 폴더 정리
Remove-Item -Recurse -Force $tempBase

Write-Host "`n✓ 추출 완료"
