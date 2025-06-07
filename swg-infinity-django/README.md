# SWG Infinity Django Backend

Django REST API backend for the SWG Infinity project.

## Project Structure

```
swg-infinity-django/
 backend/                    # Django project configuration
   ├── __init__.py
   ├── settings.py            # Main settings with CORS and DRF config
   ├── urls.py                # Main URL configuration
   ├── wsgi.py
   └── asgi.py
 api/                       # Main API application
   ├── __init__.py
   ├── apps.py
   ├── admin.py
   ├── models.py
   ├── views.py               # API views (includes health check)
   ├── urls.py                # API URL patterns
   ├── tests.py
   └── migrations/
 venv/                      # Virtual environment
 manage.py                  # Django management script
 requirements.txt           # Python dependencies
 .env.example              # Environment variables template
 README.md                 # This file
```

## Features Configured

- ✅ Django 5.2.1 with SQLite database
- ✅ Django REST Framework for API development
- ✅ CORS headers configured for Next.js frontend integration
- ✅ Environment variables support with python-dotenv
- ✅ Basic API structure with health check endpoint
- ✅ Development-ready settings

## Setup Instructions

1. **Activate virtual environment:**
   ```bash
   source venv/bin/activate
   ```

2. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Run migrations:**
   ```bash
   python manage.py migrate
   ```

4. **Start development server:**
   ```bash
   python manage.py runserver 8000
   ```

## API Endpoints

- **Health Check:** `GET /api/health/`
  - Returns API status and version information

## Frontend Integration

The CORS settings are configured to allow requests from:
- `http://localhost:3000` (Next.js default)
- `http://127.0.0.1:3000`
- `http://localhost:3001` (alternative port)
- `http://127.0.0.1:3001`

## Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
cp .env.example .env
```

Key variables:
- `SECRET_KEY`: Django secret key
- `DEBUG`: Development mode (True/False)
- `ALLOWED_HOSTS`: Comma-separated list of allowed hosts
- `CORS_ALLOW_ALL_ORIGINS`: Allow all origins (development only)

## Next Steps

1. Create models for your application
2. Add authentication/authorization
3. Implement API endpoints for your frontend
4. Configure production database (PostgreSQL recommended)
5. Set up containerization with Docker

## Running with Docker (Future)

This project is designed to be containerized for integration with the Next.js frontend.
EOF  
cd /home/project && cd swg-infinity-django && cat > README.md << 'EOF'
# SWG Infinity Django Backend

Django REST API backend for the SWG Infinity project.

## Project Structure

```
swg-infinity-django/
 backend/                    # Django project configuration
   ├── __init__.py
   ├── settings.py            # Main settings with CORS and DRF config
   ├── urls.py                # Main URL configuration
   ├── wsgi.py
   └── asgi.py
 api/                       # Main API application
   ├── __init__.py
   ├── apps.py
   ├── admin.py
   ├── models.py
   ├── views.py               # API views (includes health check)
   ├── urls.py                # API URL patterns
   ├── tests.py
   └── migrations/
 venv/                      # Virtual environment
 manage.py                  # Django management script
 requirements.txt           # Python dependencies
 .env.example              # Environment variables template
 README.md                 # This file
```

## Features Configured

- ✅ Django 5.2.1 with SQLite database
- ✅ Django REST Framework for API development
- ✅ CORS headers configured for Next.js frontend integration
- ✅ Environment variables support with python-dotenv
- ✅ Basic API structure with health check endpoint
- ✅ Development-ready settings

## Setup Instructions

1. **Activate virtual environment:**
   ```bash
   source venv/bin/activate
   ```

2. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Run migrations:**
   ```bash
   python manage.py migrate
   ```

4. **Start development server:**
   ```bash
   python manage.py runserver 8000
   ```

## API Endpoints

- **Health Check:** `GET /api/health/`
  - Returns API status and version information

## Frontend Integration

The CORS settings are configured to allow requests from:
- `http://localhost:3000` (Next.js default)
- `http://127.0.0.1:3000`
- `http://localhost:3001` (alternative port)
- `http://127.0.0.1:3001`

## Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
cp .env.example .env
```

Key variables:
- `SECRET_KEY`: Django secret key
- `DEBUG`: Development mode (True/False)
- `ALLOWED_HOSTS`: Comma-separated list of allowed hosts
- `CORS_ALLOW_ALL_ORIGINS`: Allow all origins (development only)

## Next Steps

1. Create models for your application
2. Add authentication/authorization
3. Implement API endpoints for your frontend
4. Configure production database (PostgreSQL recommended)
5. Set up containerization with Docker

## Running with Docker (Future)

This project is designed to be containerized for integration with the Next.js frontend.
