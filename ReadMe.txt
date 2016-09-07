Khắc phục lỗi tương tự:
XMLHttpRequest cannot load file:///D:/FrontEnt.Test-Ha.Van.Truong/app/components/login/login.html.
Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https, chrome-extension-resource.

To fix it: Tắt hết chrome đi và chạy command line đoạn code sau và mở project trên chrome đó:
"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --allow-file-access-from-files --disable-web-security
