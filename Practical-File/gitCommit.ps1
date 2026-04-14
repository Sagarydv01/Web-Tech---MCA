git status --porcelain | ForEach-Object {

    $line = $_
    $status = $line.Substring(0,2)
    $file = $line.Substring(3).Trim('"')

    if (-not $file) { return }

    Write-Host "Processing: $file [$status]"

    if ($status -match "^\?\?") {
        git add -- "$file"
        git commit -m "add: $file"
    }
    elseif ($status -match "^.M|^M.") {
        git add -- "$file"
        git commit -m "modify: $file"
    }
    elseif ($status -match "^.D|^D.") {
        git rm -- "$file"
        git commit -m "delete: $file"
    }
    else {
        git add -- "$file"
        git commit -m "update: $file"
    }

    if ($LASTEXITCODE -eq 0) {
        git push
    }
}