$env:Path = "C:\Program Files\nodejs;" + $env:Path
Set-Location "C:\Users\rjamm\ammons-law"
if (Test-Path node_modules) {
    Remove-Item -Recurse -Force node_modules
}
npm install
