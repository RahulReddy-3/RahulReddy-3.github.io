# Create directories
New-Item -Path "assets/lottie" -ItemType Directory -Force
New-Item -Path "assets/images" -ItemType Directory -Force

# Download Lottie files
$assets = @{
    "data-pipeline.json" = "https://assets1.lottiefiles.com/packages/lf20_sk5h1kfn.json"
    "db-connections.json" = "https://assets2.lottiefiles.com/packages/lf20_5tkzkblw.json"
    "cloud-infra.json" = "https://assets1.lottiefiles.com/packages/lf20_6xfqjqek.json"
    "data-viz.json" = "https://assets10.lottiefiles.com/packages/lf20_9wpyhdzo.json"
}

foreach ($file in $assets.Keys) {
    $url = $assets[$file]
    $output = "assets/lottie/$file"
    Invoke-WebRequest -Uri $url -OutFile $output
    Write-Host "Downloaded $file"
}

Write-Host "All assets downloaded successfully!"