
from http.server import  BaseHTTPRequestHandler, SimpleHTTPRequestHandler, socketserver, HTTPServer


# print ("DGF")
# server_address = ('', 8000)                                                                                                                                                                    
# httpd = HTTPServer(server_address, BaseHTTPRequestHandler)                                                                                                                                   
# httpd.serve_forever()


# print ("ASD")
# PORT = 8000

# Handler = BaseHTTPRequestHandler

# httpd = socketserver.TCPServer(("", PORT), Handler)

# print ("serving at port", PORT)
# httpd.serve_forever()


class Server(BaseHTTPRequestHandler):
    def do_GET(self):
        print ("Got Get Request",flush=True)
        # if self.path == '/':
        #     self.path = '/index.html'
        try:
            file_to_open = open(self.path[1:]).read()
            self.send_response(200)
        except:
            file_to_open="File not found"
            self.send_response(404)
        self.end_headers()
        self.wfile.write(bytes(file_to_open, 'utf-8'))


print ("Start Server",flush=True)
httpd = HTTPServer(('', 8000), Server)
httpd.serve_forever()



# from http.server import BaseHTTPRequestHandler, HTTPServer
# import time

# hostName = "localhost"
# hostPort = 8000

# class MyServer(BaseHTTPRequestHandler):
#     def do_GET(self):
#         self.send_response(200)
#         self.send_header("Content-type", "text/html")
#         self.end_headers()
#         self.wfile.write(bytes("<html><head><title>Title goes here.</title></head>", "utf-8"))
#         self.wfile.write(bytes("<body><p>This is a test.</p>", "utf-8"))
#         self.wfile.write(bytes("<p>You accessed path: %s</p>" % self.path, "utf-8"))
#         self.wfile.write(bytes("</body></html>", "utf-8"))

# myServer = HTTPServer((hostName, hostPort), MyServer)
# print(time.asctime(), "Server Starts - %s:%s" % (hostName, hostPort))

# try:
#     myServer.serve_forever()
# except KeyboardInterrupt:
#     pass

# myServer.server_close()
# print(time.asctime(), "Server Stops - %s:%s" % (hostName, hostPort))