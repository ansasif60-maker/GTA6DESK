$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:8080/")
$listener.Start()
Write-Output "GTA 6 Desk HTTP Server running on http://localhost:8080/"

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        $rawPath = [System.Uri]::UnescapeDataString($request.Url.LocalPath.TrimStart('/'))
        if ($rawPath -eq '') { $rawPath = 'index.html' }
        
        $baseDir = if ($PSScriptRoot) { $PSScriptRoot } else { "c:\Users\ZEE COMPUTERs\Desktop\GTA6DESK" }
        $localFile = Join-Path $baseDir $rawPath
        if (-not (Test-Path $localFile -PathType Leaf) -and (Test-Path "$localFile.html" -PathType Leaf)) {
            $localFile = "$localFile.html"
        }

        if (Test-Path $localFile -PathType Leaf) {
            $bytes = [System.IO.File]::ReadAllBytes($localFile)
            $ext = [System.IO.Path]::GetExtension($localFile).ToLower()
            $contentType = switch ($ext) {
                '.html' { 'text/html; charset=utf-8' }
                '.css'  { 'text/css; charset=utf-8' }
                '.js'   { 'application/javascript; charset=utf-8' }
                '.json' { 'application/json; charset=utf-8' }
                '.jpg'  { 'image/jpeg' }
                '.jpeg' { 'image/jpeg' }
                '.png'  { 'image/png' }
                '.svg'  { 'image/svg+xml' }
                '.xml'  { 'application/xml; charset=utf-8' }
                default { 'application/octet-stream' }
            }
            $response.ContentType = $contentType
            $response.ContentLength64 = $bytes.Length
            if ($request.HttpMethod -ne 'HEAD') {
                $response.OutputStream.Write($bytes, 0, $bytes.Length)
            }
        } else {
            $response.StatusCode = 404
            $msg = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
            $response.OutputStream.Write($msg, 0, $msg.Length)
        }
        $response.OutputStream.Close()
    } catch {
        # ignore client disconnects
    }
}
