import sys
import os
import traceback

sys.path.insert(0, os.path.dirname(__file__))

try:
    from a2wsgi import ASGIMiddleware
    from app.main import app
    
    # Standard a2wsgi initialization without extra parameters
    application = ASGIMiddleware(app)

except Exception:
    error_trace = traceback.format_exc()
    def application(environ, start_response):
        status = '200 OK'
        output = f"PASSENGER BOOT ERROR TRACE:\n\n{error_trace}".encode('utf-8')
        response_headers = [('Content-type', 'text/plain'), ('Content-Length', str(len(output)))]
        start_response(status, response_headers)
        return [output]